<template>
    <div class="factoryLogistics">
        <main-header>
            <template slot="content">
                <h1>帳料要在一起很難嗎？</h1>
                <p>
                    誰說帳料之間是世界上最遙遠的距離<br>
                    鼎新帶您體驗從採購、領料、生產、倉儲、出貨到售後服務完整物流方案<br>
                    從今以後<strong>帳</strong>與<strong>料</strong>過著幸福快樂的生活...再也不分離！
                </p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="帳料一致，就從拿起手機開始！"
                    padding="1em"
                ></section-title>
                <p class="section1-text">不做重工、不用等料、快速追溯，搬物料與過帳從此合而為一！</p>
                <img src="images/factoryLogistics/section1-illust.png" alt="">
            </div>
        </article>
        
        <article class="section2">
            <div class="container">
                <section-title
                    title="即時掌握供應商交貨與急料資訊"
                    padding="1em"
                ></section-title>
                <img src="images/factoryLogistics/section2-illust.jpg" alt="">
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="掃描核對確認後自動產生進貨單"
                    padding="1em"
                ></section-title>
                <img src="images/factoryLogistics/section3-illust1.jpg" alt="">
                <img src="images/factoryLogistics/arrow-down.png" class="arrow-down" alt="">
                <img src="images/factoryLogistics/section3-illust2.png" alt="">
            </div>
        </article>
        
        <article class="section4">
            <div class="container">
                <section-title
                    title="入庫上架，正確記錄庫存位置"
                    padding="1em"
                ></section-title>
                <img src="images/factoryLogistics/section4-illust1.jpg" alt="">
                <img src="images/factoryLogistics/arrow-down.png" class="arrow-down" alt="">
                <img src="images/factoryLogistics/section4-illust2.png" alt="">
            </div>
        </article>

        <article class="section5">
            <div class="container">
                <section-title
                    title="依儲位順序備料，正確記錄批號"
                    padding="1em"
                ></section-title>
                <p>
                    選定庫房後，至原物料儲位拿取物料掃描標籤條碼。<br>
                    系統自動協助檢核料號與數量是否符合，並<strong>自動跳轉下一個相鄰儲位</strong>，揀取下一個原物料。至揀貨完畢。
                </p>
                <div class="section5-flow">
                    <img src="images/factoryLogistics/section5-illust1.png" alt="">
                    <img src="images/factoryLogistics/arrow-right.png" class="arrow-right" alt="">
                    <img src="images/factoryLogistics/section5-illust2.png" alt="">
                </div>
            </div>
        </article>

        <div class="section6">
            <div class="container">
                <ul>
                    <li>完工入庫，如何準確記錄成品庫存位置？</li>
                    <li>如何即時掌握欠料狀況？</li>
                    <li>從出貨記錄批號，檢核貨品是否正確</li>
                    <li>原物料批/序號、半成品批/序號快速追溯</li>
                </ul>
                <a href="#contact" class="js-nav">了解更多&lt;帳料一致&gt;完整方案</a>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        }
    },
}
</script>