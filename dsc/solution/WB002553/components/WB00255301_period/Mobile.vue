<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">效期控管</h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【降低報廢】效期控管</h3>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <hover-box custom-class="main icon1">
                            <template slot="content">
                                <p class="hoverBox-title">生氣的老闆</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    廠商給的貨有無超過1/3效期？哪些要先領用？<br>
                                    出給通路的貨有無超過1/3效期？<br>
                                    哪些要先出貨？哪些快到期了要趕快降價出清？<br>
                                    哪些是短效期品要多加關注？沒辦法事先預警，一不注意就要報廢丟棄，利潤都被吃掉了…
                                </div>
                            </template>
                        </hover-box>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t1-1-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【降低報廢】效期控管-其實可以這樣做到…</h3>
                        </div>
                    </template>
                    <template slot="t1-1">
                        <div class="slider-illust">
                            <img src="images/WB00255301_period/slide-illust1.png" alt="">
                        </div>
                        <a href="#contact" class="slider-more js-nav">還有更多效期控管方案說明</a>
                    </template>
                </tabs>
            </div>

            <h2 v-on:click="slideToggle">存貨政策</h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【降低報廢】存貨政策</h3>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <hover-box custom-class="yellow icon2" :height="300">
                            <template slot="content">
                                <p class="hoverBox-title">崩潰的倉管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                <p>
                                    哪些產品已低於安全庫存量要再生產？<br>
                                    哪些週轉率不佳要做適當(清倉)處理？<br>
                                    哪些要配合通路促銷，需多備一些庫存？
                                </p>
                                <p>
                                    哪些原料已低於安全庫存量要再進？<br>
                                    原料、在製品這麼多，效期都不一樣<br>
                                    怎麼知道還剩多少效期？
                                </p>
                                </div>
                            </template>
                        </hover-box>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t2-1-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【降低報廢】存貨政策-其實可以這樣做到…</h3>
                        </div>
                    </template>
                    <template slot="t2-1">
                        <div class="slider-illust">
                            <img src="images/WB00255301_period/slide-illust2.png" alt="">
                        </div>
                        <a href="#contact" class="slider-more js-nav">還有更多存貨政策方案說明</a>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">應變能力</h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【降低報廢】應變能力</h3>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="main icon1">
                            <template slot="content">
                                <p class="hoverBox-title">生氣的老闆</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    2/3是可以出大潤發，1/2是可以出全家，再來就只剩下不要求允收期的客戶可以出貨了，等變成即期品就要降價出清，價格愈來愈差，最後甚至都已經做成產品了才報廢，也太傷了吧！無法即時發現盡早處理，拖愈久損失愈大呀！
                                </div>
                            </template>
                        </hover-box>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t3-1-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【降低報廢】應變能力-其實可以這樣做到…</h3>
                        </div>
                    </template>
                    <template slot="t3-1">
                        <div class="slider-illust">
                            <img src="images/WB00255301_period/slide-illust3.png" alt="">
                        </div>
                        <a href="#contact" class="slider-more js-nav">還有更多應變能力方案說明</a>
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
            return ['常見困擾', '解決方案'];
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
