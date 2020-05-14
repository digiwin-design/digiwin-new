<template>
    <div class="desktop">
        <section>
            <h1>鮮</h1>
            <slider-radio id="t1" :nav="['食材品質追溯','食材配送效率']">
                <template slot="t1-0-t">
                    <h2>食材標籤化、規範化；數據採集即時化；食品品質安全才有保障</h2>
                </template>
                <template slot="t1-0">
                    <div class="section1-left-illust">
                        <!-- SVG須改圖 -->
                        <!-- <section1-left-svg></section1-left-svg> -->
                        <img src="images/logistics/section1-left-illust.png" alt="">
                    </div>
                </template>

                <template slot="t1-1-t">
                    <h2>食材標籤化、規範化；數據採集即時化；食品品質安全才有保障</h2>
                </template>
                <template slot="t1-1">
                    <div class="section1-right-illust">
                        <section1-right-svg></section1-right-svg>
                    </div>
                </template>
            </slider-radio>
        </section>
        
        <section>
            <h1>準</h1>
            <slider-radio id="t2" :nav="['智能預測','以需定供']">
                <template slot="t2-0-t">
                    <h2>以智能預測，備料準確，要貨就能即時準確</h2>
                </template>
                <template slot="t2-0">
                    <img src="images/logistics/section2-left-illust.png" alt="">
                </template>

                <template slot="t2-1-t">
                    <h2>全管道訂單，即時整合，快速供貨</h2>
                </template>
                <template slot="t2-1">
                    <img src="images/logistics/section2-right-illust.png" alt="">
                </template>
            </slider-radio>
        </section>
        
        <section>
            <h1>價</h1>
            <slider-radio id="t3" :nav="['降低成本','減少浪費']">
                <template slot="t3-0-t">
                    <h2>全管道供應鏈資訊的完整串連，<br>從採購、生管、倉管、物流、門店到總部，<br>每個環節提升提升的效能，都能有效降低成本</h2>
                </template>
                <template slot="t3-0">
                    <img src="images/logistics/section3-left-illust.png" alt="">
                </template>

                <template slot="t3-1-t">
                    <h2>建立標準食譜用料，有效控制與管理食材成本，<br>才能確實減少浪費及降低成本，有效掌握料理的品質</h2>
                </template>
                <template slot="t3-1">
                    <img src="images/logistics/section3-right-illust.png" alt="">
                </template>
            </slider-radio>
        </section>
        
        <section>
            <h1>效</h1>
            <slider-radio id="t4" :nav="['標準化','數據化']">
                <template slot="t4-0-t">
                    <h2>建構標準化的作業流程<br>從食材採購、製作流程、中廚加工、產品審核、半成品加工到最終門店出餐</h2>
                </template>
                <template slot="t4-0">
                    <img src="images/logistics/section4-left-illust.png" alt="">
                </template>

                <template slot="t4-1-t">
                    <h2>門店即時數據的回饋與分析<br>總部能有效掌握銷售與效益</h2>
                </template>
                <template slot="t4-1">
                    <img src="images/logistics/section4-right-illust.png" alt="">
                </template>
            </slider-radio>
        </section>
    </div>
</template>