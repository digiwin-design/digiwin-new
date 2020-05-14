<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">配方管理</h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【研產銷一致化管理】配方管理</h3>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <hover-box custom-class="orange icon3" height="340">
                            <template slot="content">
                                <p class="hoverBox-title">苦腦的研發</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>夏天鮮奶產量小需求多價格高，所以改用保久乳，但其他用料比例要跟著調整，三個口味就有六個BOM，隨著口味增加BOM是倍數成長，等到冬天改用鮮奶，還要逐一更改BOM耶！怎麼改？</p>
                                    <p>高級肉桂一次採買至少需50公斤，但是一年只會耗用2-3公斤，結果生產一大堆肉桂巧克力蛋糕只為了消耗高單價的肉桂原料，避免肉桂過期，產品設計出來後要怎麼知道該原料有用在哪些產品？</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t1-1-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【研產銷一致化管理】配方管理-其實可以這樣做到…</h3>
                        </div>
                    </template>
                    <template slot="t1-1">
                        <div class="slider-illust">
                            <img src="images/WB00255301_produce/slide-illust1.png" alt="">
                        </div>
                        <a href="#contact" class="slider-more js-nav">還有更多配方管理方案說明</a>
                    </template>
                </tabs>
            </div>

            <h2 v-on:click="slideToggle">生產管理</h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【研產銷一致化管理】生產管理</h3>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <hover-box custom-class="pink icon4">
                            <template slot="content">
                                <p class="hoverBox-title">生管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    氣候轉涼蠶豆酥的銷量變好，必須要調整生產線、多備原料，但市場需求變化大，去年和前年十一長假賣得特別好，今年備貨好幾倍，銷售沒預期的好，導至生產過多報廢，真慘！
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="orange icon5">
                            <template slot="content">
                                <p class="hoverBox-title">廠長</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>產銷常常起衝突，業務常反應：要出貨給客戶了，但生產老是來不及。生管也怪業務：老是今天接單，明天就要交貨，備料生產是不用時間嗎？我這個廠長真難為...</p>
                                    <p>相同口味的產品都不排在一起生產，常要換線造成生產效率不佳。</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t2-1-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【研產銷一致化管理】生產管理-其實可以這樣做到…</h3>
                        </div>
                    </template>
                    <template slot="t2-1">
                        <div class="slider-illust">
                            <img src="images/WB00255301_produce/slide-illust2.png" alt="">
                        </div>
                        <a href="#contact" class="slider-more js-nav">還有更多存貨政策方案說明</a>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle">品質管理</h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【研產銷一致化管理】品質管理</h3>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="coffee icon6" height="260">
                            <template slot="content">
                                <p class="hoverBox-title">品管</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>採購進料時，到底哪一批要先驗？有沒有在要求的2/3效期之內？</p>
                                    <p>有哪些存貨(原物料&半成品&成品)時間到了1/2要複檢？<br>效期只剩1/5，存貨還會不會用到？能不能用？</p>
                                    <p>通路客戶會不會訪廠？每批出貨送驗SGS檢驗報告，客戶訪廠時，會不會找很久還是找不到？</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t3-1-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【研產銷一致化管理】品質管理-其實可以這樣做到…</h3>
                        </div>
                    </template>
                    <template slot="t3-1">
                        <div class="slider-illust">
                            <img src="images/WB00255301_produce/slide-illust3.png" alt="">
                        </div>
                        <a href="#contact" class="slider-more js-nav">還有更多品質管理方案說明</a>
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
