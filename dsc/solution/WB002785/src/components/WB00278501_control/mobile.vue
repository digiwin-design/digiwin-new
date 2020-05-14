<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">AVL 承認管理</h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件一</strong>生產許可證幾十張加上原物料/包材的供應商這麼多, 若是承認文件過期卻未發現, 那問題就大了!
                            </h3>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <hover-box custom-class="main icon1" color="#174f8e">
                            <template slot="content">
                                <p class="hoverBox-title">研發</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">大量的檢測報告已經讓我心力交瘁，還要面對承認文件管理，到期又不會提醒我的 EXCEL 真是我唯一的選擇嗎?</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon2" color="#49bcc3">
                            <template slot="content">
                                <p class="hoverBox-title">採購</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">我怎能確保不管是原物料、包材，每個供應商甚至供應商背後的製造原廠都是在被承認的狀態啊!</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多AVL承認管理方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t1-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_control/slide-illust1-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多AVL承認管理方案說明</a>
                    </template>
                </tabs>
            </div>

            <h2 v-on:click="slideToggle">GDP管理</h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件二</strong>生產原料/ 物料/ 直接包材/ 間接包材, 種類繁多, 法規要求的管理重點卻一個都不能馬虎!<br>如果連最基本的先到期的批號應該要先領用/出貨, 還有那些醫材該冷藏冷凍都管不了, 存貨管理怎能不亂?
                            </h3>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <hover-box custom-class="main icon3" color="#23796e">
                            <template slot="content">
                                <p class="hoverBox-title">倉管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">這麼多的進料, 批號&保存期限要記錄, 在倉庫裡的儲位管理, 倉儲的限制條件… 唉! 誰能幫我!</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon4" color="#49c39f">
                            <template slot="content">
                                <p class="hoverBox-title">品管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">倉儲的管理重點都有明文規定, 若因人力有限導致管理紀錄不完整, 查廠的時候麻煩就大</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多GDP 管理方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t2-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_control/slide-illust2-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多GDP 管理方案說明</a>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">品檢紀錄</h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件三</strong>不論是原料或包材,除了每批進料的背後都是一堆品質檢驗紀錄報告要做, 還要產出進料年度品質報告!<br>讓品檢紀錄方便, 產出報告容易, 面對查廠輕鬆?有沒有好方法?
                            </h3>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="main icon4" color="#49c39f">
                            <template slot="content">
                                <p class="hoverBox-title">品管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>檢驗做不完只好加人加設備…? 加到人做不下了接下來加廠房嗎? 而且文件多, 保存不易, 查廠時又不易搜尋 …..</p>
                                    <p>進料後還得留樣, 但每批進貨該留多少量? 多久要複驗一次? 複驗時間到了誰記得? 忘記就麻煩大了!</p>
                                </div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多品檢紀錄方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t3-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_control/slide-illust3-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多品檢紀錄方案說明</a>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">產品生產履歷</h2>
            <div class="accordion-content">
                <tabs id="t4" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t4-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件四</strong>生產履歷是品質保證的最後一道關卡, 當藥品品質異常時才能發揮保險的效果, 控制損失的範圍!
                            </h3>
                        </div>
                    </template>
                    <template slot="t4-0">
                        <hover-box custom-class="main icon5" color="#418db9">
                            <template slot="content">
                                <p class="hoverBox-title">生管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">可能影響到藥品品質的因素這麼多, 每項都靠人工紀錄, 成本當然居高不下! 但健保給付價格卻 …..</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon4" color="#49c39f">
                            <template slot="content">
                                <p class="hoverBox-title">品管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">耗費人力大量留存的紀錄如果查廠時, 稽查員要調的資料在20分鐘內翻不出來, 結果還是一個慘字!</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多產品生產履歷方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t4-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_control/slide-illust4-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多產品生產履歷方案說明</a>
                    </template>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function() {
            return ['常見痛點', '解決方案'];
        }
    },
    methods: {
        slideToggle: function (event) {
            $(event.target).toggleClass('active').next().slideToggle();
        },
        scrollHandler: function (event) {
            $(event.target.hash).addClass('active').next().slideDown();
        }
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>
