<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">專案管理</h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件一</strong>這次新品開發預計要多久時間，PM儘快擬定研發專案執行計劃及時間表!!
                            </h3>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <hover-box custom-class="main icon1" color="#174f8e">
                            <template slot="content">
                                <p class="hoverBox-title">研發</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">除了要開發產品, 還要填專案進度報告.又有一堆的產品文件資料要做要整理!!</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon2" color="#49bcc3">
                            <template slot="content">
                                <p class="hoverBox-title">研發主管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">專案進度嚴重落後, 現在進行到那個階段, 遇到什麼瓶頸有什麼問題?</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon3" color="#4c7cbd">
                            <template slot="content">
                                <p class="hoverBox-title">總經理</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">都己經過3個月了，產品遲遲無法上市，這樣我們還有多少市場商機??</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多專案管理方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t1-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_research/slide-illust1-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多專案管理方案說明</a>
                    </template>
                </tabs>
            </div>

            <h2 v-on:click="slideToggle">許可證管理</h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件二</strong>這次新品銷售市場在歐美，認證審查要儘快申請完成，否則無法上市!!
                            </h3>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <hover-box custom-class="main icon1" color="#174f8e">
                            <template slot="content">
                                <p class="hoverBox-title">研發</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">各國認證審查格式都不一樣,同一個產品審查資料都要重覆再整理…真是無言又没效率!</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon2" color="#49bcc3">
                            <template slot="content">
                                <p class="hoverBox-title">研發主管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">認證審查申請狀況如何, 是不是資料有誤…? 補送文件重新送審了嗎…?</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon3" color="#4c7cbd">
                            <template slot="content">
                                <p class="hoverBox-title">總經理</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">都己經過3個月了，產品遲遲無法上市，這樣我們還有多少市場商機??</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多許可證管理方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t2-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_research/slide-illust2-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多許可證管理方案說明</a>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">FMEA</h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件三</strong>客戶反應使用產品時有異常!!!
                            </h3>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="main icon1" color="#174f8e">
                            <template slot="content">
                                <p class="hoverBox-title">研發</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">在做CAPA 、FMEA分析、評估時，要找到相關文件總是耗費大量時間!</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon2" color="#49bcc3">
                            <template slot="content">
                                <p class="hoverBox-title">研發主管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">當產品不良時如何從FEMA資料快速判斷問題, 提供問題分析並做矯正?</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon3" color="#4c7cbd">
                            <template slot="content">
                                <p class="hoverBox-title">總經理</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">當產品不良時如何從FEMA資料快速判斷問題, 提供問題分析並做矯正?</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多FMEA品質方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t3-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_research/slide-illust3-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多FMEA品質方案說明</a>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">圖文管理</h2>
            <div class="accordion-content">
                <tabs id="t4" :nav="nav">
                    <!-- 常見痛點 -->
                    <template slot="t4-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">
                                <strong>事件四</strong>怎麼找不到SWEDS01-G810-1產品的圖檔資料夾??
                            </h3>
                        </div>
                    </template>
                    <template slot="t4-0">
                        <hover-box custom-class="main icon1" color="#174f8e">
                            <template slot="content">
                                <p class="hoverBox-title">研發</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">有個類似零件也是類似的規格，可是那位主辦離職了…圖又找不到…</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon2" color="#49bcc3">
                            <template slot="content">
                                <p class="hoverBox-title">研發主管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">採購/現場：每張單用的版本都不一樣，到底哪一個是對的?</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="main icon3" color="#4c7cbd">
                            <template slot="content">
                                <p class="hoverBox-title">總經理</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">公司重要的產品研發文件資料這麼亂，這樣審查認證問題就大了???</div>
                            </template>
                        </hover-box>
                        <a href="#contact" class="more js-nav">還有更多圖文管理方案說明</a>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t4-1">
                        <div class="slider-illust">
                            <img src="images/WB00278501_research/slide-illust4-s.png" alt="">
                        </div>
                        <a href="#contact" class="more js-nav">還有更多圖文管理方案說明</a>
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
