<template>
    <div class="WB00247601_case">
        <main-header>
            <template slot="content">
                <h2>因專注而卓越</h2>
                <h1>東野精機</h1>
                <h2>重塑競爭邊界 讓專家變贏家</h2>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title title="產銷會議從兵荒馬亂的120分鐘 轉變成充滿效率的30分鐘"></section-title>
                <p>東野精機擁有從加工至專案設備的各類訂單，如何有效生產並達成與客戶的承諾「如期、如質」成為重要課題，透過資訊化建立創新「減法」管理，運用數據串聯做到有效監控，並打造出與傳產廠有明顯差異的精實生產模式，由內而外讓客戶見證東野獨到的生產樣貌。東野精機有了高效運營支持，未來便能挑戰更高營收動能，持續縮短交期，創造產業佳話。</p>
            </div>
        </article>

        <article class="section2 dark">
            <div class="container">
                <section-title title="創營收新高峰後也增加企業在營運管理上的難度"></section-title>
                <img src="images/WB00247601_case/section2-illust.svg" alt="">
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title title="客製化訂單所引發的產銷困擾"></section-title>
                <h2>用消失的時間：</h2>
                <collapse :collapse="result.collapse1"></collapse>
                <h2>增加客戶效能：</h2>
                <collapse :collapse="result.collapse2" :first-active="false"></collapse>
            </div>
        </article>

        <article class="section4 dark">
            <div class="container">
                <section-title
                    title="翻轉從目標、能力缺口審視開始"
                    desc="面對不斷增長的業績,如何持續維持如期、如質優質服務"
                ></section-title>
                <img src="images/WB00247601_case/section4-illust.svg" alt="">
            </div>
        </article>
        
        <article class="section5">
            <div class="container">
                <section-title title="翻轉管理軸線的關鍵里程碑"></section-title>
                <img src="images/WB00247601_case/section5-illust.svg" alt="">
            </div>
        </article>

        <article class="section6 dark">
            <div class="container">
                <section-title
                    title="提升訂單達交率的三大關鍵能力"
                    desc="面對不斷增長的業績,如何持續維持如期、如質優質服務"
                ></section-title>
                <img src="images/WB00247601_case/section6-illust1.svg" alt="">
                <img src="images/WB00247601_case/section6-illust2.svg" alt="">
                <img src="images/WB00247601_case/section6-illust3.svg" alt="">
            </div>
        </article>

        <article class="section7">
            <div class="container">
                <section-title title="營運目標的監控指標樹"></section-title>
                <img src="images/WB00247601_case/section7-illust.svg" alt="">
            </div>
        </article>
        
        <article class="section8">
            <div class="container">
                <section-title title="當複雜變簡單"></section-title>
                <img src="images/WB00247601_case/section8-illust.svg" alt="">
            </div>
        </article>

        <article class="section9 dark">
            <div class="container">
                <section-title title="這一切的改變如何做到，聽專家怎麼說"></section-title>
                <div class="row">
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cjT2imE3Wno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <hgroup>
                        <h3>東野精機股份有限公司</h3>
                        <h2>宋博維 總經理</h2>
                    </hgroup>
                </div>
                <div class="row">
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2-2oxPw3hxU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <hgroup>
                        <h3>東野精機股份有限公司</h3>
                        <h2>曾琡珺 副總經理</h2>
                    </hgroup>
                </div>
                <div class="row">
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EsFcu3bW09M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <hgroup>
                        <h3>鼎新電腦股份有限公司</h3>
                        <h2>楊瑞德 顧問經理</h2>
                    </hgroup>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'WB00247601_case',
    computed: {
        result() {
            return store.state.result.WB00247601_case;
        }
    },
}
</script>
