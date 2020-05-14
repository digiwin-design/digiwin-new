<template>
    <div class="desktop">
        <ul class="desktop-nav">
            <li><a href="#section1" class="js-nav icon1" data-text="維護合約"></a></li>
            <li><a href="#section2" class="js-nav icon2" data-text="維修履歷"></a></li>
            <li><a href="#section3" class="js-nav icon3" data-text="客訴追蹤"></a></li>
        </ul>

        <section id="section1">
            <h1 class="sectionTitle">維護合約</h1>
            <slider id="t1" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">
                            <strong>事件一</strong>賣出設備這麼多，有些有簽訂維修合約，有些則沒有，各紙合約期限也不同，都是WORD，查找不易。
                        </h3>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon1" color="#174f8e">
                                <template slot="content">
                                    <p class="hoverBox-title">維修工程師</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">該不該收費，收多少，報價要花很多時間翻找資料，就怕沒收或是少收。</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon2" color="#49bcc3">
                                <template slot="content">
                                    <p class="hoverBox-title">老闆</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">保養計畫漏排，客戶停機待檢，維修人員沒出現?</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template>

                <!-- 解決方案 -->
                <template slot="t1-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_service/slide-illust1.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多維護合約管理方案說明</a>
        </section>

        <section id="section2">
            <h1 class="sectionTitle">維修履歷</h1>
            <slider id="t2" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t2-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">
                            <strong>事件二</strong>客戶設備又再次維修，維修紀錄多為紙本，查找歷史維修紀錄和維修原因不容易，不會是上次沒修好吧?
                        </h3>
                    </div>
                </template>
                <template slot="t2-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon3" color="#23796e">
                                <template slot="content">
                                    <p class="hoverBox-title">工程師</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">這台怎麼常常在修，換修什麼零件，在保內還是過保，全部問完機器早修好了。</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon4" color="#8e8717">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">這次換馬達，下次換IC版，是我運氣好買到機王?這家廠商也是頭痛醫頭,腳痛醫腳，越修越壞，CASE一堆在等機器。檢測又有時間壓力，一例一休要加班了。</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template>

                <!-- 解決方案 -->
                <template slot="t2-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_service/slide-illust2.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多維修履歷方案說明</a>
        </section>

        <section id="section3">
            <h1 class="sectionTitle">產品條碼</h1>
            <slider id="t3" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t3-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">
                            <strong>事件三</strong>同樣的問題，不同的人處理時間就是差很多。人員流動性又高，經驗傳承困難。
                        </h3>
                    </div>
                </template>
                <template slot="t3-0">
                    <hover-box custom-class="main icon5" color="#0c9d8a">
                        <template slot="content">
                            <p class="hoverBox-title">客服主管</p>
                        </template>
                        <template slot="hover">
                            <div class="hoverBox-hoverText">
                                <p>案件處理狀況不透明，都要找人 一一詢問，回覆不及時的結果就是客訴!</p>
                                <p>上周問題都處理到什麼進度了，沒人知道，工程師又找不到人..</p>
                            </div>
                        </template>
                    </hover-box>
                </template>

                <!-- 解決方案 -->
                <template slot="t3-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_service/slide-illust3.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多客訴追蹤方案說明</a>
        </section>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function () {
            return ['常見痛點', '解決方案'];
        }
    },
}
</script>