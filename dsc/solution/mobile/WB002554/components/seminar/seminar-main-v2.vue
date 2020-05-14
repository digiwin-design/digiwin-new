<template>
    <div>
        <div class="header">
            <div class="container">
                <div>
                    <h1>{{content.title}}</h1>
                </div>
            </div>
        </div>

        <article class="section1">
            <h1>{{content.section1Title}}</h1>
            <div ref="accordion" class="accordion">
                <h2 v-on:click="slideToggle">
                    標題1<span><i>more</i></span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/accordion/illust1.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav" target="_blank">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nemo officiis placeat laudantium ratione provident modi doloribus odit velit a corporis vitae harum iure nesciunt ad qui, quisquam eligendi eum?
                        </div>
                    </div>
                </div>
                <h2 v-on:click="slideToggle">
                    標題2<span><i>more</i></span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/accordion/illust1.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav" target="_blank">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nemo officiis placeat laudantium ratione provident modi doloribus odit velit a corporis vitae harum iure nesciunt ad qui, quisquam eligendi eum?
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article v-if="progressBars && progressBars.length" class="section2">
            <div class="container">
                <h1>{{content.section2Title}}</h1>
                <p v-html="content.section2Desc" class="section2-desc"></p>
                <progress-bars :progress-bars="progressBars"></progress-bars>
            </div>
        </article>

        <contact v-bind:multiple="false" source></contact>
    </div>
</template>

<script>
module.exports = {
    name: 'SeminarMain',
    props: ['content'],
    components: {
        'progress-bars': httpVueLoader('components/seminar/progress-bars.vue'),
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        percentages: function () {
            // 排序各組數值以取得最大值
            let percentages = [];
            this.content.progressBars.forEach(function (progressBar) {
                let percentage = [];
                progressBar.items.forEach(function (item) {
                    percentage.push(item.percentage);
                });
                percentage.sort(function (a, b) { return b - a; });
                percentages.push(percentage);
            });
            return percentages;
        },
        progressBars: function () {
            if (!this.content.progressBars) return null;

            // 取得各組最大值
            this.content.progressBars.forEach(function (progressBar, idx) {
                progressBar.items.forEach(function (item) {
                    if (item.percentage === this.percentages[idx][0]) {
                        item['highest'] = true;
                    }
                }.bind(this));
            }.bind(this));
            
            return this.content.progressBars;
        },
    },
    watch: {
        isMobile: function (value) {
            // mobile->desktop時預設展開第一項
            if (!value) {
                $(this.$refs.accordion).find('h2').eq(0).addClass('active').next().slideDown()
                    .end().siblings('h2').removeClass('active').next().slideUp();
            }
        }
    },
    mounted: function () {
        if (typeof (NProgress) !== 'undefined') {
            NProgress.done();
        }
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
    methods: {
        slideToggle: function (event) {
            let $target = event.target.nodeName === 'H2' ? $(event.target) : $(event.target).parents('h2');
            $target.toggleClass('active').next().slideToggle();
            if (!this.isMobile) {
                $target.siblings('h2').removeClass('active').next().slideUp();
            }
        },
    },
};
</script>