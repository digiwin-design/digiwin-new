module.exports = {
    props: ['progressBars'],
    computed: {
        isMobile() {
            return store.state.isMobile;
        }
    },
    methods: {
        scrollHandler: _.throttle(function () {
            let progressBarsPos = $(this.$refs.progressBars).offset().top;
            let distance = progressBarsPos - $(window).height();
            let windowPos = $(window).scrollTop();
            if (windowPos >= distance) {
                this.initComponent();
                window.removeEventListener('scroll', this.scrollHandler);
            }
        }, 100),
        initComponent() {
            $('.js-barGroup').each((idx, el) => {
                let li = d3
                    .select(el)
                    .selectAll('li')
                    .data(this.progressBars[idx].items)
                    .enter()
                    .append('li')
                    .each(function (d) { // 將最大值指定class
                        if (d.highest) {
                            d3.select(this).classed('highest', true);
                        }
                    });
                li
                    .append('div')
                    .classed('text', true)
                    .append('p')
                    .text(d => d.text);
                li
                    .append('div')
                    .classed('value', true)
                    .append('div')
                    .classed('bar', true)
                    .transition()
                    .duration(2000)
                    .tween('text', d => { // 文字動畫
                        var i = d3.interpolateRound(0, d.percentage);
                        return function (t) {
                            this.textContent = `${i(t)}%`;
                        };
                    })
                    .style('width', d => {
                        let percentage;
                        if (this.isMobile && d.percentage < 23) {
                            percentage = 23; // 最小寬度
                        }
                        else if (d.percentage < 14) {
                            percentage = 14; // 最小寬度
                        }
                        else {
                            percentage = d.percentage;
                        }
                        return `${percentage}%`;
                    });
            });
        },
    },
    mounted() {
        this.scrollHandler();
        window.addEventListener('scroll', this.scrollHandler);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    },
};