module.exports = {
    props: ['content'],
    components: {
        'accordion': httpVueLoader('components/seminar/accordion/Accordion.vue'),
        'progressBars': httpVueLoader('components/seminar/progressBars/ProgressBars.vue'),
    },
    computed: {
        percentages() {
            // 排序各組數值以取得最大值
            let percentages = [];
            this.content.progressBars.forEach(progressBar => {
                let percentage = [];
                progressBar.items.forEach(item => {
                    percentage.push(item.percentage);
                });
                percentage.sort(function (a, b) { return b - a; });
                percentages.push(percentage);
            });
            return percentages;
        },
        progressBars() {
            // 取得各組最大值
            this.content.progressBars.forEach((progressBar, idx) => {
                progressBar.items.forEach(item => {
                    if (item.percentage === this.percentages[idx][0]) {
                        item['highest'] = true;
                    }
                });
            });
            return this.content.progressBars;
        },
    },
    mounted() {
        if (typeof(NProgress) !== 'undefined') {
            NProgress.done();
        }
    },
};