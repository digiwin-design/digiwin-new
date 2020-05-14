<template>
    <div>
        <div class="header">
            <div class="container">
                <div>
                    <h1>{{content.title}}</h1>
                    <ul>
                        <li>洞察品牌經營策略</li>
                        <li>有效掌握關鍵客群</li>
                        <li>擴大市場深化商機</li>
                    </ul>
                </div>
            </div>
        </div>

        <article class="section1">
            <h1>{{content.section1Title}}</h1>
            <div ref="accordion" class="accordion">
                <h2 v-on:click="slideToggle">
                    開啟新零售 實現全域營銷<span><i>more</i></span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/accordion/illust3.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/RTL/WB002993/web/" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav" target="_blank">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            <p>新零售翻轉產業生態，面對消費者思考模式的改變，該如何因應跨平台、多通路、多支付、碎片數據？</p>
                            <dl>
                                <dt>➤全通路融合線上線下</dt>
                                <dd>會員經營X精準行銷，達到多來客、高回購率</dd>
                                <dt>➤升級顧客體驗</dt>
                                <dd>虛擬服務 X 有感場景，提高消費意願，加速成交	</dd>
                                <dt>➤強化營運效能</dt>
                                <dd>金流X物流X資訊流，藉數據驅動決策，贏得商機</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <h2 v-on:click="slideToggle">
                    融合線上線下商機 開啟全通路經營布局<span><i>more</i></span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/accordion/illust4.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/RTL/WB003007/WB00300701.html" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav" target="_blank">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            <p>
                                找客戶就像大海撈針，如何吸客找到潛在客戶？<br>
                                線上線下通路越多元，該怎麼融合零碎的消費足跡？<br>
                                做行銷就像亂槍打鳥，無法精準抓到消費者需求？<br>
                                從市場趨勢談起，解析業者在新零售議題下的未來商機，如何在廣大市場找到潛在顧客？從線上線下共融互通、打造有感的行銷服務，完整建立吸客、導客到留客的經營祕訣！
                            </p>
                        </div>
                    </div>
                </div>
                <h2 v-on:click="slideToggle">
                    2019鼎新流通年會<span><i>more</i></span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/accordion/illust1.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="https://youtu.be/H4hcibwkqAM" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav" target="_blank">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            <h3>如何把企業核心價值和新科技作結合，<br>思考周邊價值的延伸，是零售業共同努力的方向</h3>
                            <p class="subtitle">新零售是一種企業持續精進的進化論</p>
                            <ul>
                                <li>掌握消費心理/行為，創造消費價值</li>
                                <li>創新/品牌經營</li>
                                <li>以人為本，是經營事業成功的關鍵</li>
                            </ul>
                            <h4>議程介紹</h4>
                            <h5>AI世代</h5>
                            <ul>
                                <li>新零售是一種企業持續精進的進化論</li>
                            </ul>
                            <h5>消費行為進化</h5>
                            <ul>
                                <li>場域翻轉</li>
                                <li>五感體驗</li>
                            </ul>
                            <h5>新零售趨勢</h5>
                            <ul>
                                <li>虛實整合，創新經營</li>
                                <li>以顧客需求出發，創造品牌價值</li>
                                <li>新零售是一種企業持續精進的進化論</li>
                            </ul>
                            <h4>講師介紹</h4>
                            <ul>
                                <li>流通教父徐重仁</li>
                                <li>亞馬遜台灣分公司 林惠君 總經理</li>
                                <li>治略資訊整合股份有限公司 王智 創辦人</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 v-on:click="slideToggle">
                    創造市場機會，精準抓住關鍵客群 找到客戶沒說出口的需求<span><i>more</i></span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/accordion/illust2.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="https://www.digiwin.com/tw/dsc/activity/WB002946/WB00294601.html" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav" target="_blank">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            <h3>創造市場機會，精準抓住關鍵客群<br>找到客戶沒說出口的需求</h3>
                            <p>
                                找客戶就像大海撈針，如何吸客找到潛在客戶？<br>
                                線上線下通路越多元，該怎麼融合零碎的消費足跡？<br>
                                做行銷就像亂槍打鳥，無法精準抓到消費者需求？<br>
                                競爭對手又打出低價，留不住會員也做不到活粉？
                            </p>
                            <h4>議程介紹</h4>
                            <h5>LINE Taiwan 廣告事業部 郭勝軒 產業經理</h5>
                            <ul>
                                <li>吸客：互動式行銷，創造360度顧客接觸場景</li>
                                <li>導客：數位化軌跡，精準掌握導客切入點</li>
                                <li>留客：個人化服務，滿足更多層次的需求</li>
                            </ul>
                            <h5>傳盛科技 股份有限公司 鄔竣清 總經理</h5>
                            <ul>
                                <li>觀未來：打造新零售模式</li>
                                <li>放長線：找出潛在的粉絲</li>
                                <li>釣大魚：客戶主動找上你</li>
                                <li>定策略：善用大數據培養鐵粉</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article v-if="progressBars && progressBars.length" class="section2">
            <div class="container">
                <h1>{{content.section2Title}}</h1>
                <p v-html="content.section2Desc" class="section2-desc"></p>
                <progress-bars :progress-bars="progressBars"></progress-bars>
            </div>
        </article>

        <contact v-bind:multiple="false" source></contact>
    </div>
</template>

<script>
module.exports = {
    props: ['content'],
    components: {
        'progress-bars': httpVueLoader('components/seminar/progressBars/progress-bars.vue'),
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        percentages: function () {
            // 排序各組數值以取得最大值
            let percentages = [];
            this.content.progressBars.forEach(function (progressBar) {
                let percentage = [];
                progressBar.items.forEach(function (item) {
                    percentage.push(item.percentage);
                });
                percentage.sort(function (a, b) { return b - a; });
                percentages.push(percentage);
            });
            return percentages;
        },
        progressBars: function () {
            if (!this.content.progressBars) return null;
            
            // 取得各組最大值
            this.content.progressBars.forEach(function (progressBar, idx) {
                progressBar.items.forEach(function (item) {
                    if (item.percentage === this.percentages[idx][0]) {
                        item['highest'] = true;
                    }
                }.bind(this));
            }.bind(this));
            
            return this.content.progressBars;
        },
    },
    watch: {
        isMobile: function (value) {
            // mobile->desktop時預設展開第一項
            if (!value) {
                $(this.$refs.accordion).find('h2').eq(0).addClass('active').next().slideDown()
                    .end().siblings('h2').removeClass('active').next().slideUp();
            }
        }
    },
    mounted: function () {
        if (typeof (NProgress) !== 'undefined') {
            NProgress.done();
        }
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
    methods: {
        slideToggle: function (event) {
            let $target = event.target.nodeName === 'H2' ? $(event.target) : $(event.target).parents('h2');
            $target.toggleClass('active').next().slideToggle();
            if (!this.isMobile) {
                $target.siblings('h2').removeClass('active').next().slideUp();
            }
        },
    },
};
</script>