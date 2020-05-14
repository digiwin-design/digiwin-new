<template>
    <div class="index">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1 container">
                <section-title title="以品牌實力貫通虛實通路" padding-bottom="1em"></section-title>
                <p>從單一診所發展至醫美生技集團到IPO上市櫃，成功著實不易，鼎新醫美解決方案協助企業在不同成長階段，提供專屬的資訊支持系統，充分滿足您對管理系統的各項需求，無論您需要的是成功模式的探究，或是發展集團過程中必經的管理痛點消除，鼎新皆具備完整方案支持作為您經營企業最佳後盾。</p>
                <img src="images/index/section1-illust.jpg" alt="">
            </article>

            <article class="section2">
                <div class="container">
                    <section-title title="用貼心關懷啟動完善的服務流程"></section-title>
                    <img src="images/index/section2-illust.jpg" alt="">
                    <router-link to="/solution?tab=4">了解更多醫學美容管理系統</router-link>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'WB002850',
    computed: {
        result() {
            return store.state.result.index;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
