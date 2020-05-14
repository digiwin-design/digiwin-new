<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">接單時</h2>
            <div class="accordion-content">
                <div class="container">
                    <p class="accordion-desc">
                        YA平台有267張單、PC平台有234張單、樂平台有189張單。
                        <br>哇!每天訂單這麼多，這季獎金可以領到手軟，但平台格式都不同打單打到眼睛花。就算加班也打不完吧?訂單從四面八方一直來!
                    </p>
                    <div class="hoverBoxs">
                        <hover-box custom-class="hoverBox1">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>我10/20訂了2盒鳳梨酥，現在都11/3怎麼還沒收到呢?</p>
                            </template>
                        </hover-box>
                        <hover-box custom-class="hoverBox2">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>我明明是訂10盒魚酥，怎麼來10盒蝦酥?</p>
                            </template>
                        </hover-box>
                        <hover-box custom-class="hoverBox3">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>昨天收到10罐蛤蠣醬，今天又收到10罐蛤蠣醬，是買一送一的活動嗎?</p>
                            </template>
                        </hover-box>
                    </div>
                    <p class="accordion-desc">我希望...訂單越來越多，但也不想增加人力來跟想業績，難道沒有工具能幫我打單，可以又快又正確!</p>
                </div>
            </div>
            <h2 v-on:click="slideToggle">出貨時</h2>
            <div class="accordion-content">
                <div class="container">
                    <p class="accordion-desc">
                        今日未處理包裹267個...未包裝商品數738個...貨運公司未收走 包裹還有166個...
                        <br>庫存還夠不夠?必須在24小時內把貨送給客戶，不然會被平台罰錢耶!
                        <br>我得張大眼睛，仔細裝箱，若是送錯的商品，不只賠錢還會被客訴...。
                    </p>
                    <div class="hoverBoxs">
                        <hover-box custom-class="hoverBox4">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>我10/20就打電話說你們送錯商品請你們來回收，10/25還不來收，保管期限過了我可不管!</p>
                            </template>
                        </hover-box>
                        <hover-box custom-class="hoverBox5">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>咦？我明明訂10罐蛤蠣醬，竟然收到10罐干貝醬，是幫我免費升級嗎?</p>
                            </template>
                        </hover-box>
                    </div>
                    <p class="accordion-desc">希望...庫存不夠會出現警示、裝錯商品也會出現警示...難道沒有工具能幫我整理出貨資料給貨運公司嗎?</p>
                </div>
            </div>
            <h2 v-on:click="slideToggle">對帳時</h2>
            <div class="accordion-content">
                <div class="container">
                    <p class="accordion-desc">
                        這個月的上架費、DM廣告費、活動贊助費、資訊處理費...還未付的費用家總是806,888元；
                        <br>平台還未撥款金額加總有2,766,000元，YA平台是1,232,700元、PC平台是1,047,800元、樂平台是448,800元...
                    </p>
                    <div class="hoverBoxs">
                        <hover-box custom-class="hoverBox6">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>上平台要計算費用種類這麼多，計算方式又都不一樣，不時又有贊助費；平台給的對帳單也是密密麻麻...</p>
                                <p>應收扣掉應付，總共可以收回多少錢啊?YA平台怎麼只給198,800元?短缺2萬元是啥原因?倆出問題?</p>
                            </template>
                        </hover-box>
                    </div>
                    <p class="accordion-desc">
                        我希望...有工具能幫我計算要給個平台的費用，
                        <br>可以又快又正確；幫我自動核對帳款，精準告訴我哪裡有問題!
                    </p>
                </div>
            </div>
            <h2 v-on:click="slideToggle">退換貨時</h2>
            <div class="accordion-content">
                <div class="container">
                    <p class="accordion-desc">
                        今日未處理退貨申請18件...未處理患或申請39件...已派車未取回27件...還有8通客戶問題未回覆
                        <br>拜託，「麥擱卡」了啦!已經在處理了。又要接電話，又要請填單處理退換貨、要不補差額，又要通知貨運估斯取回顧客要退回的商品，永遠都是極、忙、快，能不能喘口氣阿!
                    </p>
                    <div class="hoverBoxs">
                        <hover-box custom-class="hoverBox7">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>之前你們送錯商品，害我錯過送禮時機，我才退貨的，也不會送個小禮物賠罪。</p>
                            </template>
                        </hover-box>
                        <hover-box custom-class="hoverBox8">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <p>換貨退回補差價，退貨來一次、送貨又來一次，難道不能一次處理完嗎?</p>
                            </template>
                        </hover-box>
                    </div>
                    <p class="accordion-desc">我希望...有工具能提醒我還有哪些客戶問題要處理、處理進度到哪裡；還能進行問題會整的統計分析，在報告時能有數據統計。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
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
