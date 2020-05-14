<template>
    <div class="solution08">
        <article class="section1 container">
            <section-title title="IC設計產業現況作業分析"></section-title>
            <img src="images/solution/solution08-illust1.png" alt="">
        </article>

        <article class="section2 container">
            <section-title title="輔導成功案例"></section-title>
            <p>鼎新超過150家IC設計業的輔導經驗，轉化成行業方案，提供您最佳服務與支援!</p>
            
            <h2 class="mt-1"><img src="images/solution/solution08-case1.png" alt="松翰科技"></h2>
            <h3 class="subtitle mt-1">消費性IC設計的領導者</h3>
            <p>松翰科技成立於1996年7月，隨即於1997年初推出第一顆語音控制器產品，自那時起，松翰科技就以堅強的研發實力成為語音、音樂控制器的領導者，為多方面應用的教育性電子玩具注入新的生命。今日，松翰憑藉著堅強的研發實力，不斷提升核心技術的層次，擴充產品線，提供更多創新且具有競爭力的產品與方案，已躍居消費性晶片領域的佼佼者。</p>
            <img src="images/solution/solution08-case1-chart.png" alt="" class="mt-1">
            <p class="mt-1">目前松翰科技台灣、美國、香港、大陸深圳、成都都設有公司，業務或客服單位。黃棋楙表示，雖然工廠採委外政策；但去年7月導入鼎新TIPTOP ERP，今年元月正式上線啟用，期望掌握分據全球的各銷售點，從接單到交貨的即時資訊，並與委外工廠連線，可掌握生產管理、製程，同時結合財務、成本控制等，資訊的整合與透明，對松翰科技的管理及決策參考絕對重要。</p>

            <h2 class="mt-1"><img src="images/solution/solution08-case2.png" alt="茂達電子"></h2>
            <p class="mt-1">茂達電子(Anpec Electronics Corp.)成立於民國86年10月，以提升國內電源類比(Power Analog)設計環境並建立自主類比及電源相關產業為使命。主要從事類比〈Analog〉積體電路設計、測試、生產及行銷業務，產品線主要包括：電源轉換及電源管理IC(Power Conversion and Power Management IC)、放大器及驅動IC(Amplifier and Driver)及離散式功率元件(Discrete Power Devices - MOSFET、IGBT)三大類。</p>
            <img src="images/solution/solution08-case2-chart.png" alt="" class="mt-1">
            <h3 class="subtitle mt-1">Benefit</h3>
            <p>目前松翰科技台灣、美國、香港、大陸深圳、成都都設有公司，業務或客服單位。黃棋楙表示，雖然工廠採委外政策；但去年7月導入鼎新TIPTOP ERP，今年元月正式上線啟用，期望掌握分據全球的各銷售點，從接單到交貨的即時資訊，並與委外工廠連線，可掌握生產管理、製程，同時結合財務、成本控制等，資訊的整合與透明，對松翰科技的管理及決策參考絕對重要。</p>
            <case-list :list="result.caseList" class="mt-1"></case-list>
        </article>

        <article class="section3 container">
            <section-title title="IC設計行業方案"></section-title>
            <img src="images/solution/solution08-illust2.png" alt="" class="mt-1">
        </article>

        <article class="section4 container">
            <section-title title="方案特色"></section-title>
            <dl class="list">
                <template v-for="item in result.section4">
                    <dt :key="item.name">{{item.name}}</dt>
                    <dd :key="item.desc.imgSrc">
                        <div v-if="item.desc.text" v-html="item.desc.text"></div>
                        <img :src="img" :class="{ 'mt-1': item.desc.text || idx > 0 }" v-for="(img, idx) in item.desc.imgSrc" :key="img">
                    </dd>
                </template>
            </dl>
        </article>

        <article class="section5 container">
            <section-title title="IC設計研討會"></section-title>
            <img src="images/solution/solution08-illust3.png" alt="">
            <a href="#contact" class="js-nav nav mt-2">索取研討會資料</a>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution08',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
