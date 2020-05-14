<template>
    <div ref="progressBars" class="progressBars">
        <template v-for="bar in progressBars">
            <ul class="js-barGroup" :key="bar.items[0].text"></ul>
        </template>
    </div>
</template>

<script>
module.exports = {
    props: ['progressBars'],
    computed: {
        isMobile: function () {
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
        initComponent: function () {
            $('.js-barGroup').each(function (idx, el) {
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
                        var i = d3.interpolateRound(0, d.percentage);
                        return function (t) {
                            this.textContent = i(t) + '%';
                        };
                    })
                    .style('width', function (d) {
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
                        return percentage + '%';
                    });
            }.bind(this));
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