<template>
    <div class="case">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="案例客戶"></section-title>
                    <section>
                        <h2>第一化工</h2>
                        <p>當門市開到第4家時業務量已經倍增，核帳人力早已不堪負荷。導入鼎新系統後，現在10家電皆可加速對帳作業，而在資訊系統建置完備之際，第一化工也更積極拓展快速成長的網路購物市場，目前除了自家網路店外，尚有Yahoo購物商城、PChome商店街，也正積極評估多家購物平台，將網購朝向多平台的經營，除了增加曝光，也是想抓住唯一景氣不減的網路宅經濟!</p>
                        <img src="images/case/section1-case1.jpg" alt="">
                    </section>
                    <section>
                        <h2>森田藥妝</h2>
                        <p>我們的團隊擁有共同的流程，解決問題的速度就更快，本專案看似ERP導入，但卻讓團隊更為成長!面對未來變局與快速改變，組織唯有不斷的再更新與再進化才能退脫傳統束縛。</p>
                        <img src="images/case/section1-case2.jpg" alt="">
                    </section>
                </div>
            </article>

            <article class="section2">
                <div class="container">
                    <section-title title="更多美妝業輔導案例"></section-title>
                    <case-card v-for="item in result.cases" :key="item.id" :my-case="item"></case-card>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'case',
    computed: {
        result() {
            return store.state.result.case;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
