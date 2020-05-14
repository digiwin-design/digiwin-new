<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">商品上架</h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <template slot="t1-0">
                        <hover-box custom-class="hoverBox1">
                            <template slot="content">
                                <p class="hoverBox-title">商品上架</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>多個天貓、淘寶平台難道商品上架平又要到後台一個個輸入！到時會不會又上錯？</p>
                                    <p>平台限制可以上傳的圖片大小、張數是多少？匯率波動太快，售價可以整批調整嗎？</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>
                    <template slot="t1-1">
                        <img src="images/02/section1-illust1-s.png" alt="">
                    </template>
                </tabs>
            </div>
            <h2 v-on:click="slideToggle">接單</h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <template slot="t2-0">
                        <hover-box custom-class="hoverBox2">
                            <template slot="content">
                                <p class="hoverBox-title">接單</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>天貓、淘寶的訂單是簡體...，要怎麼轉換？重打花時間？打錯還得了？</p>
                                    <p>訂單成立後還要人工逐一核對庫存狀況，或是常常要等到倉庫實際撿貨時才發現沒有貨</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>
                    <template slot="t2-1">
                        <img src="images/02/section1-illust2-s.png" alt="">
                    </template>
                </tabs>
            </div>
            <h2 v-on:click="slideToggle">出貨</h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <template slot="t3-0">
                        <hover-box custom-class="hoverBox3">
                            <template slot="content">
                                <p class="hoverBox-title">出貨</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>出貨單看錯、拿錯、包錯、甚至寄錯，一來一回增加好多物流成本..</p>
                                    <p>要精算運費才有利潤空間，天貓的用順豐、淘寶的用...出貨後還要回單給平台，全靠人工！</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>
                    <template slot="t3-1">
                        <img src="images/02/section1-illust3-s.png" alt="">
                    </template>
                </tabs>
            </div>
            <h2 v-on:click="slideToggle">退貨</h2>
            <div class="accordion-content">
                <tabs id="t4" :nav="nav">
                    <template slot="t4-0">
                        <hover-box custom-class="hoverBox4">
                            <template slot="content">
                                <p class="hoverBox-title">退貨</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>這個月光是在天貓被退的貨就好幾十件，又要跟平台對帳，還要記清楚有那些銷退金額?</p>
                                    <p>最近的退貨變多，是出了什麼問題?</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>
                    <template slot="t4-1">
                        <img src="images/02/section1-illust4-s.png" alt="">
                    </template>
                </tabs>
            </div>
            <h2 v-on:click="slideToggle">對帳</h2>
            <div class="accordion-content">
                <tabs id="t5" :nav="nav">
                    <template slot="t5-0">
                        <hover-box custom-class="hoverBox5">
                            <template slot="content">
                                <p class="hoverBox-title">對帳</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>每月要對這麼多的帳：物流業者、郵局、報關行、銀行、支付寶、電商平台...，費用項目、款項更是多，有的是應付、有的是應收、有的應收扣掉應付給淨額，難道真只能人工一筆一筆對嗎？</p>
                                    <p>對帳單用人工核對，常常無法判斷哪些已請款？哪些未請款？如果有短缺，也不知道是哪些訂單出問題</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>
                    <template slot="t5-1">
                        <img src="images/02/section1-illust5-s.png" alt="">
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
