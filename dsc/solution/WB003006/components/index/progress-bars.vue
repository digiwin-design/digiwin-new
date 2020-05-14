<template>
    <div ref="progressBars" class="progressBars">
        <template v-for="bar in bars">
            <ul class="js-barGroup" :key="bar.items[0].text"></ul>
        </template>
    </div>
</template>

<script>
module.exports = {
    props: {
        progressBars: {
            type: Array,
            required: true
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        percentages: function () {
            if (!this.progressBars) return null;

            // 排序各組數值
            let percentages = [];
            this.progressBars.forEach(function (progressBar) {
                let percentage = [];
                progressBar.items.forEach(function (item) {
                    percentage.push(item.percentage);
                });
                percentage.sort(function (a, b) { return b - a; });
                percentages.push(percentage);
            });
            return percentages;
        },
        bars: function () {
            if (!this.progressBars) return null;

            this.progressBars.forEach(function (progressBar, idx) {
                progressBar.items.forEach(function (item) {
                    // 取得各組前8名
                    if (item.percentage > this.percentages[idx][8]) {
                        item['highest'] = true;
                    }
                    // 取得各組第1名
                    if (item.percentage === this.percentages[idx][0]) {
                        item['first'] = true;
                    }
                }.bind(this));
            }.bind(this));

            return this.progressBars;
        },
    },
    watch: {
        isMobile: function (val) {
            this.destroyComponent();
            this.initComponent();
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
        initComponent: function () {
            document.querySelectorAll('.js-barGroup').forEach(function (el, idx) {
                let _this = this;
                let li = d3
                    .select(el)
                    .selectAll('li')
                    .data(this.progressBars[idx].items)
                    .enter()
                    .append('li')
                    .each(function (d) {
                        // 指定class
                        if (d.highest) {
                            d3.select(this).classed('highest', true);
                        }
                        if (d.first) {
                            d3.select(this).classed('first', true);
                        }
                    });
                li
                    .append('div')
                    .classed('text', true)
                    .append('p')
                    .text(function (d) {
                        return d.text;
                    });
                li
                    .append('div')
                    .classed('value', true)
                    .append('div')
                    .classed('bar', true)
                    .transition()
                    .duration(2000)
                    .tween('text', function (d) { // 文字動畫
                        var i = d3.interpolateNumber(0, d.percentage);
                        return function (t) {
                            this.textContent = i(t).toFixed(1) + '%';
                        };
                    })
                    .style('width', function (d) {
                        let percentage;
                        if (_this.isMobile && d.percentage < 40) {
                            percentage = 40; // 最小寬度
                        }
                        else if (d.percentage < 20) {
                            percentage = 20; // 最小寬度
                        }
                        else {
                            percentage = d.percentage;
                        }
                        return percentage + '%';
                    })
            }.bind(this));
        },
        destroyComponent: function () {
            document.querySelectorAll('.js-barGroup').forEach(function (el, idx) {
                el.innerHTML = '';
            });
        },
    },
    mounted: function () {
        this.scrollHandler();
        window.addEventListener('scroll', this.scrollHandler);
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollHandler);
    },
};
</script>