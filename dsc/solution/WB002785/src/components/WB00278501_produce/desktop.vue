<template>
    <div class="desktop">
        <ul class="desktop-nav">
            <li><a href="#section1" class="js-nav icon1" data-text="物料規劃"></a></li>
            <li><a href="#section2" class="js-nav icon2" data-text="生產進度"></a></li>
            <li><a href="#section3" class="js-nav icon3" data-text="產品條碼"></a></li>
        </ul>

        <section id="section1">
            <h1 class="sectionTitle">物料規劃</h1>
            <slider id="t1" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">
                            <strong>事件一</strong>生產計劃排定後會通知採購下單, 但計畫總是趕不上變化, 生產現場領不到料的狀況時有所聞!
                        </h3>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon1" color="#174f8e">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">大客戶的急單當然要接, 但採購緊急應變時若未同時考量存貨/在途量等資訊, 就難免容易疏漏</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon2" color="#49bcc3">
                                <template slot="content">
                                    <p class="hoverBox-title">採購</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">生產計劃變來變去的, 到底那些採購變成了急單? 那些該取消?真的沒有替代料可用嗎?買多/買錯/買少怎麼辦?</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template>

                <!-- 解決方案 -->
                <template slot="t1-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_produce/slide-illust1.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多物料規劃管理方案說明</a>
        </section>

        <section id="section2">
            <h1 class="sectionTitle">生產進度</h1>
            <slider id="t2" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t2-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">
                            <strong>事件二</strong>當客戶詢問到底訂單何時可以出貨時, 總是說不清楚, 講不明白
                        </h3>
                    </div>
                </template>
                <template slot="t2-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon3" color="#23796e">
                                <template slot="content">
                                    <p class="hoverBox-title">現場</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">現有工具的操作介面過於複雜, 不適用於現場, 所以生產進度只能由人工填單, 隔天再由專人輸入EXCEL管理</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon1" color="#174f8e">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">落後的生產進度資訊, 無法滿足業務期望, 也造成排程誤差, 製程若有外包就更難以掌握了</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template>

                <!-- 解決方案 -->
                <template slot="t2-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_produce/slide-illust2.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多生產進度管理方案說明</a>
        </section>

        <section id="section3">
            <h1 class="sectionTitle">產品條碼</h1>
            <slider id="t3" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t3-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">
                            <strong>事件三</strong>入出庫單據輸入資料複雜(品號/序號/批號/有效日期), 一不小心就容易紀錄錯誤, <br>查廠時被抓到就不妙了!若是不能應用條碼來簡化進出貨及盤點的效率及正確性, 可能會影響客戶對出貨品質的滿意度
                        </h3>
                    </div>
                </template>
                <template slot="t3-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon4" color="#23796e">
                                <template slot="content">
                                    <p class="hoverBox-title">倉管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">品號/序號/批號/效期這些複雜且重要的資訊都以人工輸入系統(或紙本作業), 當然容易失誤</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon5" color="#49c39f">
                                <template slot="content">
                                    <p class="hoverBox-title">品管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">留存的進出貨紀錄如果查廠時, 稽查員要調的資料在20分鐘內翻不出來, 結果還是一個慘字!<br>複驗時間到了誰記得? 忘記就麻煩大了!</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template>

                <!-- 解決方案 -->
                <template slot="t3-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_produce/slide-illust3.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多產品條碼方案說明</a>
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