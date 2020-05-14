<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">鮮</h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="['食材品質追溯','食材配送效率']">
                    <template slot="t1-0-t">
                        <h3>食材標籤化、規範化；數據採集即時化；食品品質安全才有保障</h3>
                    </template>
                    <template slot="t1-0">
                        <img src="images/logistics/section1-left-illust.png" alt="">
                    </template>

                    <template slot="t1-1-t">
                        <h3>食材標籤化、規範化；數據採集即時化；食品品質安全才有保障</h3>
                    </template>
                    <template slot="t1-1">
                        <img src="images/logistics/section1-right-illust.png" alt="">
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">準</h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="['智能預測','以需定供']">
                    <template slot="t2-0-t">
                        <h3>以智能預測，備料準確，要貨就能即時準確</h3>
                    </template>
                    <template slot="t2-0">
                        <img src="images/logistics/section2-left-illust.png" alt="">
                    </template>

                    <template slot="t2-1-t">
                        <h3>全管道訂單，即時整合，快速供貨</h3>
                    </template>
                    <template slot="t2-1">
                        <img src="images/logistics/section2-right-illust.png" alt="">
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">價</h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="['降低成本','減少浪費']">
                    <template slot="t3-0-t">
                        <h3>全管道供應鏈資訊的完整串連，從採購、生管、倉管、物流、門店到總部，每個環節提升提升的效能，都能有效降低成本</h3>
                    </template>
                    <template slot="t3-0">
                        <img src="images/logistics/section3-left-illust.png" alt="">
                    </template>

                    <template slot="t3-1-t">
                        <h3>建立標準食譜用料，有效控制與管理食材成本，才能確實減少浪費及降低成本，有效掌握料理的品質</h3>
                    </template>
                    <template slot="t3-1">
                        <img src="images/logistics/section3-right-illust.png" alt="">
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">效</h2>
            <div class="accordion-content">
                <tabs id="t4" :nav="['標準化','數據化']">
                    <template slot="t4-0-t">
                        <h3>建構標準化的作業流程<br>從食材採購、製作流程、中廚加工、產品審核、半成品加工到最終門店出餐</h3>
                    </template>
                    <template slot="t4-0">
                        <img src="images/logistics/section4-left-illust.png" alt="">
                    </template>

                    <template slot="t4-1-t">
                        <h3>門店即時數據的回饋與分析<br>總部能有效掌握銷售與效益</h3>
                    </template>
                    <template slot="t4-1">
                        <img src="images/logistics/section4-right-illust.png" alt="">
                    </template>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
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
