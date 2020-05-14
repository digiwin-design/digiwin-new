<template>
    <div class="progressBar" ref="progressBar">
        <ul ref="barGroup"></ul>
    </div>
</template>

<script>
module.exports = {
    props: {
        progressBar: {
            type: Array,
            required: true
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        percentages: function () { // 排序各組數值
            let percentages = [];
            this.progressBar.forEach(function (item) {
                percentages.push(item.percentage);
            });
            percentages.sort(function (a, b) { return b - a; });
            return percentages;
        },
        bars: function () {
            let progressBar = this.progressBar;
            progressBar.forEach(function (el) {
                // 取得各組前3名
                if (el.percentage > this.percentages[3]) {
                    el['highest'] = true;
                }
                // 取得各組第1名
                // if (el.percentage === this.percentages[0]) {
                //     el['first'] = true;
                // }
            }.bind(this));
            return progressBar;
        },
    },
    methods: {
        scrollHandler: _.throttle(function () {
            let progressBarPos = this.$refs.progressBar.getBoundingClientRect().top + window.pageYOffset;
            let distance = progressBarPos - window.innerHeight;
            let windowPos = window.pageYOffset;
            // 視窗底部捲動到長條圖時執行
            if (windowPos >= distance) {
                this.initComponent();
                window.removeEventListener('scroll', this.scrollHandler);
            }
        }, 100),
        initComponent: function () {
            let widthScale = d3.scaleLinear().domain([0, this.percentages[0]]).range([0, 100]);
            let bar = d3
                .select(this.$refs.barGroup)
                .selectAll('li')
                .data(this.bars)
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
            bar
                .append('div')
                .classed('text', true)
                .append('p')
                .text(function (d) {
                    return d.text;
                });
            bar
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
                    return widthScale(d.percentage) + '%';
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