<template>
    <div class="WB00247601_manufacture">
        <main-header>
            <template slot="content">
                <h1>生產製造</h1>
                <p>
                    存貨的控制不是盲目的砍庫存？
                    <br />採購追料也無法解決缺料問題？
                    <br />專屬機械業的動態BOM與特徵碼是什麼？
                    <br />靈活的BOM將與您迎接高度客製化接單時代來臨...
                </p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="機械同業反應建置資訊系統欲改善的問題"
                    desc="統計今年度機械業反映的作業與管理困擾整理出相關數據，發現經濟景氣再不佳，機械業對於資訊系統建置與歸劃依然持續在進行，誠如下圖所示，ERP建置仍是首要，其中尤以BOM、缺料管理與生產製造議題最受重視，並期望能透過資訊系統的建置來改善的重點。"
                ></section-title>
                <progress-bars :progress-bars="result.progressBars"></progress-bars>
                <p class="section1-caption">▲ 機械同業建置資訊系統欲改善問題分布圖</p>
                <div class="section1-boxs">
                    <hover-box color="#009c9e">
                        <template slot="content">
                            <p class="hoverBox-title">來自桃園某精密工業來電</p>
                        </template>
                        <template slot="hover">
                            <p>你好，我們公司因為產品轉型為客製專業機，在<strong>零件及生管流程管理</strong>上較複雜，原系統無法符合......</p>
                        </template>
                    </hover-box>
                    <hover-box color="#03b2dd">
                        <template slot="content">
                            <p class="hoverBox-title">來自新北某電力機械製造廠來電</p>
                        </template>
                        <template slot="hover">
                            <p>你好，因廠區常有插單，缺料狀況，目前皆由人工處理排程，不易掌控，<strong>希望能有系統運算產能最佳化</strong>......</p>
                        </template>
                    </hover-box>
                    <hover-box color="#48a3e1">
                        <template slot="content">
                            <p class="hoverBox-title">來自台中某CNC分度盤製造廠來電</p>
                        </template>
                        <template slot="hover">
                            <p>最近<strong>訂單選配需求提高</strong>，BOM斷階與品號編碼需要重新調整，還有庫存貨與生產成本居高不下......</p>
                        </template>
                    </hover-box>
                </div>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <section-title
                    title="為什麼<strong>BOM</strong>是最多業者反映的困擾？"
                    padding-bottom="1em"
                ></section-title>
                <p class="section2-desc">產品的BOM是生產的源頭所在，從研發初次架設完成後，後續在經歷多次的設計變更或是重啟套用後，這些調整的訊息若無法正確地從研發單位傳遞到業務、採購與生產等單位，整體作業如「研發設計」、「採購」、「委外加工」與「生產」等即無法同步等，影響層面不容忽視。</p>
                <figure>
                    <figcaption>▼產品BOM與前後作業流程關係圖</figcaption>
                    <img src="images/WB00247601_manufacture/section2-illust.svg" alt="">
                </figure>
            </div>
            <section>
                <h2>產品<strong>BOM</strong>對各職能的作業影響</h2>
                <slider :slides="result.slider1">
                    <swiper-slide v-for="slide in result.slider1" :key="slide.id">
                        <div class="slide" :class="`slide${slide.id}`">
                            <img :src="`images/WB00247601_manufacture/slide${slide.id}.jpg`" alt="">
                        </div>
                    </swiper-slide>
                </slider>
            </section>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="動態BOM與特徵碼"
                    padding-bottom="1em"
                    desc="即時及高度整合的BOM結構，能快速擬定訂單用料，協助機械業面對客製化接單的挑戰！"
                ></section-title>
                <p>以往BOM被直接解釋為產品用料清單，但在客製化接單環境趨勢之下，此種定義已經不足以協助企業來進行物料需求規劃。所以鼎新重新將它定義為生產的<strong class="highlight">BOM必需包含三大結構分別為：共用料件、標準選配件、訂單特殊選配件</strong>以滿足計劃、生產來使用，通常我們會根據共用料件來進行計劃性的採購及生產，以及規劃部份的標準選配件庫存，以因應突如其來的訂單需求，最後再根據訂單的特殊用料需求來進行採購發包。</p>
                <img src="images/WB00247601_manufacture/section3-illust1.png" alt="">
                <p>過去是預先做好幾個BOM等著接單，若接到不一樣的功能組合就從現有的BOM再做修改，最後一大堆衍生型號，差異在哪也沒人清楚。現在大多是研發預先將可能的需求，包裝成一個個零散的模組或零件品號，再由業務將客戶的需求轉化成勾選對應的模組。但這兩個方式都還是在「選品號」也常常會忽略相依互斥的關係，訂單一選錯可能就一路錯到客戶端才發現。</p>
                <p><strong>未來只要讓客戶將需要的產品特徵或功能說出來，業務單位只要照著點選即可，就不需要再擔心選的品號對不對、有沒有遺漏，快速提供客戶報價與擬定訂單用料。</strong></p>
                <img src="images/WB00247601_manufacture/section3-illust2.png" alt="">
                <figure>
                    <img src="images/WB00247601_manufacture/section3-illust3.svg" alt="">
                    <figcaption>▲機台選配之過去、現在與未來</figcaption>
                </figure>
                <p>業務單位只要依客戶功能選好產品特徵以後，透過產品特徵模板媒合，找到正確的零組件，組出符合客戶需求的BOM。</p>
                <figure>
                    <img src="images/WB00247601_manufacture/section3-illust4.svg" alt="">
                    <figcaption>▲機台特徵碼示意圖</figcaption>
                </figure>
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <section-title title="採購跟催很確實，但生產時為什麼還缺料？"></section-title>
                <p>機械業本身是屬於「一面設計、一面製造」的生產習性，因此在報價或接單時僅對概略性的機械規格及功能進行評估。而真正的規劃活動卻是從正式接單後開始，造成研發設計活動與生產發包製造活動時有衝突現象，這也是現場生產缺料的主要原因之一。訂單用料的變更尤其加深了物料發包的複雜性，缺料絕不是採購跟催效率低的問題，<strong>面對缺料，機械業必需思考的是，如何在變動下維持最佳平衡狀態的發包計劃，且隨著訂單變動能夠快速的調整發包計劃。</strong></p>
                <img class="section4-illust" src="images/WB00247601_manufacture/section4-illust1.png" alt="">
                <h2>如何改善缺料？</h2>
                <h3>精準的庫存分類</h3>
                <p>
                    機械業本來會有上萬項的庫存品項，客製化的挑戰尤其會導至品項的增加，過往常會習慣依照訂單的需求全部發包下去，但是常常小零件都齊了，就差關鍵料還沒進來不能開工，導致倉庫滿滿，訂單能出的沒幾台。<br>
                    存貨的控制不是盲目的砍庫存，如果<strong>存貨能從模組、關鍵料、長天期等角度進行分類，找出催料的優先序，先求主角要能如期進場，再要求配角如期到場</strong>，倉庫就不會放了一堆無法投入生產的東西。
                </p>
                <h3>四段式採購發包</h3>
                <p>
                    當客戶訂單猶如敵機臨空般不可預期時，您的生管系統能否應付！當機台的缺料紅單愈來愈多，採購只能在追料與缺料間奔波繁忙？<br>
                    降低庫存很重要，但降了常導致現場停工待料影響生產，若我們能<strong>從銷售預測最適化做起，即能將共用件與選配件的模組規劃搭配銷售預測進行庫存的最小量與最大週轉</strong>。預測之後，接下來做四段式發包，或稱為<strong>「多段式發包」，透過預測與越庫管理推估出五大鑄件及關鍵料的數量</strong>。
                </p>
                <figure class="section4-illust">
                    <figcaption>機台預測(共用件)</figcaption>
                    <img src="images/WB00247601_manufacture/section4-illust2.png" alt="">
                </figure>
                <figure class="section4-illust">
                    <figcaption>選配件預測</figcaption>
                    <img src="images/WB00247601_manufacture/section4-illust3.png" alt="">
                </figure>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'WB00247601_manufacture',
    components: {
        'section-title': httpVueLoader('../components/section-title.vue'),
        'progress-bars': httpVueLoader('../components/WB00247601_manufacture/progress-bars.vue'),
        'hover-box': httpVueLoader('../components/WB00247601_manufacture/hover-box.vue'),
    },
    computed: {
        result() {
            return store.state.result.WB00247601_manufacture;
        },
    },
}
</script>
