<template>
    <div class="desktop">
        <ul class="desktop-nav container">
            <li><a href="#section1" class="js-nav" data-text="商品上架"></a></li>
            <li><a href="#section2" class="js-nav" data-text="接單"></a></li>
            <li><a href="#section3" class="js-nav" data-text="出貨"></a></li>
            <li><a href="#section4" class="js-nav" data-text="退貨"></a></li>
            <li><a href="#section5" class="js-nav" data-text="對帳"></a></li>
        </ul>

        <section id="section1">
            <a href="#section1" class="desktop-next js-nav"></a>
            <h1 class="sectionTitle">商品上架</h1>
            <slider id="s1" :nav="nav">
                <template slot="s1-0">
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
                <template slot="s1-1">
                    <div class="slider-illust">
                        <img src="images/02/section1-illust1.png" alt="">
                    </div>
                </template>
            </slider>
        </section>
        
        <section id="section2">
            <h1 class="sectionTitle">接單</h1>
            <slider id="s2" :nav="nav">
                <template slot="s2-0">
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
                <template slot="s2-1">
                    <div class="slider-illust">
                        <img src="images/02/section1-illust2.png" alt="">
                    </div>
                </template>
            </slider>
        </section>
        
        <section id="section3">
            <h1 class="sectionTitle">出貨</h1>
            <slider id="s3" :nav="nav">
                <template slot="s3-0">
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
                <template slot="s3-1">
                    <div class="slider-illust">
                        <img src="images/02/section1-illust3.png" alt="">
                    </div>
                </template>
            </slider>
        </section>

        <section id="section4">
            <h1 class="sectionTitle">退貨</h1>
            <slider id="s4" :nav="nav">
                <template slot="s4-0">
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
                <template slot="s4-1">
                    <div class="slider-illust">
                        <img src="images/02/section1-illust4.png" alt="">
                    </div>
                </template>
            </slider>
        </section>
        
        <section id="section5">
            <h1 class="sectionTitle">對帳</h1>
            <slider id="s5" :nav="nav">
                <template slot="s5-0">
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
                <template slot="s5-1">
                    <div class="slider-illust">
                        <img src="images/02/section1-illust5.png" alt="">
                    </div>
                </template>
            </slider>
        </section>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function() {
            return ['常見困擾', '解決方案'];
        }
    },
}
</script>