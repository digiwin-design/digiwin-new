<template>
    <div class="industry">
        <main-header>
            <template slot="content">
                <h2>智造生存轉型的處方箋</h2>
                <h1><img src="images/industry/header-title.png" alt="智慧工廠"></h1>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <h1 class="title">精實智慧製造最前線</h1>
                <figure>
                    <figcaption class="title">台灣精實智慧製造的實踐</figcaption>
                    <img src="images/industry/section1-illust.png" alt="">
                </figure>
            </div>
            <section class="section1-1">
                <div class="container">
                    <h2 class="title">精實智慧製造架構</h2>
                    <p>精實智慧製造是「一個能夠消除浪費與創造價值的實體系統。她能夠在系統上取得、傳送與分析資料，達成可視化與問題解決，並持續改善實體系統、提升顧客價值。」</p>
                    <p>精實智慧製造就如同她的名稱，重點不在於技術上能做什麼，而在於實質上能夠創造出何種價值。</p>
                </div>
            </section>
            <section class="section1-2">
                <div class="container">
                    <img src="images/industry/section1-2-illust.png" alt="">
                    <h2 class="title">東海大學 <strong>劉仁傑</strong> 教授</h2>
                    <ul>
                        <li>日本神戶大學經營學博士</li>
                        <li>現任東海大學工業工程與經營資訊學系教授、日本大阪市立大學客座教授、上海華東理工大學EMBA客座教授</li>
                        <li>曾任美國賓州大學華頓商學院訪問學者、經濟部產業諮詢委員會審議委員</li>
                        <li>長期致力於精實系統推動、台灣製造產業體系變革暨台日企業聯盟研究，經常應邀到國內外大學、企業，講授追求物質文明與精神文明的製造管理理論與實務洞察心得</li>
                    </ul>
                    <a href="http://lean.thu.edu.tw/【ma雜誌94期】2017年9月-東海精實管理專欄《精實智慧-製/" target="_blank">
                        <ul>
                            <li><strong>精實系統知識應用聯盟</strong></li>
                            <li>產業創新經營研究室-東海大學劉仁傑教授研究</li>
                        </ul>
                    </a>
                    <a href="/tw/dsc/activity/MFT/WB002967/WB00296701.html" target="_blank">
                        <ul>
                            <li><strong>劉仁傑教授 研討會活動＜課程講義免費索取＞</strong></li>
                            <li>2019/07/09「未來智造，精實製造」</li>
                        </ul>
                    </a>
                </div>
            </section>
        </article>

        <article id="fullScene" class="section2">
            <div class="container">
                <h1 class="title">機械設備業智慧工廠全場景</h1>
                <img src="images/industry/section2-illust.png" alt="">
                <div class="section2-links">
                    <router-link to="/WB00247601_Industry01/2">採購收貨</router-link>
                    <router-link to="/WB00247601_Industry02/2">IQC</router-link>
                    <router-link to="/WB00247601_Industry03/2">原料倉</router-link>
                    <router-link to="/WB00247601_Industry04/2">副線生產</router-link>
                    <router-link to="/WB00247601_Industry05/2">裝配店面倉</router-link>
                    <router-link to="/WB00247601_Industry06/2">主線生產</router-link>
                    <router-link to="/WB00247601_Industry07/2">出貨</router-link>
                    <router-link to="/WB00247601_Industry08/2">戰情室</router-link>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'industry',
}
</script>
