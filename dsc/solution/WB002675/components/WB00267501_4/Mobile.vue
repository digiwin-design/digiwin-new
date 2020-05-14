<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <div class="accordion-title js-title" v-on:click="slideToggle">接團前</div>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">控團沒做好影響有多大</h2>
                            <div>
                                哪一團什麼時候進來，不容易掌握，花時間做聯繫，需要做臨時應變。
                                <br />團控沒控好，引起團和團碰撞，造成館內壅擠，客人參觀意願降低。
                            </div>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <div class="slider-illust">
                            <img src="images/WB00267501_4/slide-illust1.png" alt />
                        </div>
                        <p class="slider-wish">
                            《我希望》
                            <br />有預計到團通知，可事先協調旅行社或導遊或遊覽車司機進場時間，確認不會撞團。
                            <br />並調控現場服務人員排班，視當天接團數量，適當安排服務人員，提昇服務品質....
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t1-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">觀光工廠其實您可以這樣管</h2>
                            <div>
                                <strong>資源有限，事先安排不忙亂</strong>
                                <ul>
                                    <li>團務資料預先建立，預先安排接待人力與有限資源。</li>
                                    <li>掌握準確商品庫存，即時補貨，架上不缺貨。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t1-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_4/slide-illust2.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>

            <div class="accordion-title js-title" v-on:click="slideToggle">接團中</div>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">導購人流沒控好影響有多大</h2>
                            <div>
                                導遊完全不清楚客人買多少了？如何能再叫客人多買一點?？
                                <br />客人急，時間不夠了，結帳看起來還要很久，不如不買了...
                            </div>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <div class="slider-illust">
                            <img src="images/WB00267501_4/slide-illust3.png" alt />
                        </div>
                        <p class="slider-wish">
                            《我希望》
                            <br />導遊休息室有看板顯示即時購物狀況，讓導遊可以暗地觀察消費狀況，購買力不足時幫忙推銷
                            <br />並且可以透過歷史銷售進行門市補貨、避免熱銷品缺貨、地雷商品積壓、報廢。
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t2-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">觀光工廠其實您可以這樣管</h2>
                            <div>
                                <strong>結帳快又順、秩序不混亂！</strong>
                                <ul>
                                    <li>現場看板即時查詢各團進站狀況與業績達成狀況。</li>
                                    <li>事先製作號碼牌，印上“預約序號”條碼，避免現場結帳秩序混亂，加速結帳。</li>
                                    <li>提供多種促銷方案，人員結帳不必再自行記錄換算折扣或促銷方式。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t2-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_4/slide-illust4.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>

            <div class="accordion-title js-title" v-on:click="slideToggle">接團後</div>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h2
                                class="slider-desc-title"
                            >摳咪雄〞沒算好影響有多大</h2>
                            <div>因為佣金結算速度慢或出錯，造成領隊不高興。</div>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="icon29" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">李導遊在櫃檯</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>我要離開了，<br>佣金可以現在算給我嗎？</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon30" color="#08b1c4">
                            <template slot="content">
                                <p class="hoverBox-title">不開心的王領隊</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>請稍等，還差28元即可～<br>等等..剛算錯了已經特價的商品不能算，還差535元</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon31" color="#dcb104">
                            <template slot="content">
                                <p class="hoverBox-title">不高興的張司機</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>究竟是差多少？<br>又沒講清楚!!</p>
                                </div>
                            </template>
                        </hover-box>
                        <p class="slider-wish">
                            《我希望》
                            <br />能夠快速結算佣金，可彈性選擇佣金現結、日結、月結、幾天結......
                            <br />讓導遊司機滿意，下次會再帶團來。並能分析哪個旅行社或哪個導遊貢獻度最高。
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t3-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">觀光工廠其實您可以這樣管</h2>
                            <div>
                                <strong>退佣速度快又正確，別讓導遊不開心！</strong>
                                <ul>
                                    <li>快速結算旅行團帳務，並提供旅行團帳務對帳資訊。</li>
                                    <li>可彈性選擇佣金現結、日結、月結、幾天結......。</li>
                                    <li>每日門市結帳後快速上傳銷售資訊至後台，資訊無落差。</li>
                                    <li>以系統確認檢討庫存數量，提昇庫存準確度。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t3-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_4/slide-illust5.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function () {
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
        $(this.$refs.accordion).find('.js-title').eq(0).addClass('active');
    },
};
</script>
