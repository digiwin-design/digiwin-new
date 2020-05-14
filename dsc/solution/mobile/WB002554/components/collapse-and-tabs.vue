<template>
    <div class="collapse-and-tabs">
        <div ref="accordion" class="accordion">
            <template v-for="(item, idx) in content">
                <h2 v-on:click="slideToggle" :key="item.title">{{item.title}}</h2>
                <div class="accordion-content" :key="item.troubled.desc">
                    <tabs :id="`t${idx+1}`" :nav="nav">
                        <template :slot="`t${idx+1}-0`">
                            <div class="accordion-troubled">
                                <p class="accordion-troubled-desc" v-html="item.troubled.desc"></p>
                                <pain
                                    :content="pain"
                                    v-for="pain in item.troubled.pains"
                                    :key="pain.title"
                                ></pain>
                            </div>
                        </template>
                        <template :slot="`t${idx+1}-1`">
                            <div class="accordion-solution">
                                <p class="accordion-solution-desc" v-html="item.solution.desc"></p>
                                <figure v-for="figure in item.solution.figures" :key="figure.imgSrc">
                                    <img :src="figure.fileName" alt />
                                    <figcaption>▲ {{figure.figcaption}}</figcaption>
                                </figure>
                                <a href="#contact" class="js-nav">
                                    <i class="material-icons">arrow_forward</i>
                                    {{item.solution.linkText}}
                                </a>
                            </div>
                        </template>
                    </tabs>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'CollapseAndTabs',
    props: {
        content: {
            type: Array
        }
    },
    computed: {
        nav: function () {
            return ['常見困擾', '解決方案'];
        },
    },
    methods: {
        slideToggle: function (event) {
            $(event.target).toggleClass('active').next().slideToggle();
        },
        scrollHandler: function (event) {
            $(event.target.hash).addClass('active').next().slideDown();
        }
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>
