<template>
    <div>
        <div class="header" @click="linkTo('https://www.moea.gov.tw/MNS/dos/bulletin/Bulletin.aspx?kind=9&html=1&menu_id=18808&bull_id=2968')">
            <div class="container">
                <div>
                    <h1>{{content.title}}</h1>
                    <p>{{content.desc}}</p>
                </div>
            </div>
        </div>

        <div class="section1">
            <accordion :accordion="content.accordion"></accordion>
        </div>

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
        'accordion': httpVueLoader('components/seminar/accordion.vue'),
        'progress-bars': httpVueLoader('components/seminar/progress-bars.vue'),
    },
    computed: {
        percentages: function () {
            if (!this.content.progressBars) return null;

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
    methods: {
        linkTo: function (url) {
            window.open(url);
        }
    },
    mounted: function () {
        if (typeof (NProgress) !== 'undefined') {
            NProgress.done();
        }
    },
};
</script>