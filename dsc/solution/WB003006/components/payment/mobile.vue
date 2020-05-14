<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle"><i>消費<strong>前</strong></i></h2>
            <div class="accordion-content">
                <tabs id="t1" :nav="['消費者想的','企業需要的']">
                    <template slot="t1-0-t">
                        <h3>消費者可以選擇的支付方式要夠多，同時還要搭配紅利或回饋，而且也要線上線下通用。</h3>
                    </template>
                    <template slot="t1-0">
                        <img src="images/payment/section1-left-illust-s.png" alt="">
                    </template>

                    <template slot="t1-1-t">
                        <h3>消費者在實體店面常用哪些支付方式？線上商城常用哪些支付方式？<br>企業該評估使用合適的支付在合適的通路上。</h3>
                    </template>
                    <template slot="t1-1">
                        <img src="images/payment/section1-right-illust-s.png" alt="">
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle"><i>結帳<strong>中</strong></i></h2>
            <div class="accordion-content">
                <tabs id="t2" :nav="['消費者想的','企業需要的']">
                    <template slot="t2-0-t">
                        <h3>支付方式的安全感與便利感，都是消費者結帳付款過程中最重要的體驗</h3>
                    </template>
                    <template slot="t2-0">
                        <img src="images/payment/section2-left-illust-s.png" alt="">
                    </template>

                    <template slot="t2-1-t">
                        <h3>各種支付的所付出的成本有所不同，<br>每筆交易的資料安全性都要受到最高層級的保護</h3>
                    </template>
                    <template slot="t2-1">
                        <checklist :lists="result.payment.checklist.section2"></checklist>
                    </template>
                </tabs>
            </div>
            
            <h2 v-on:click="slideToggle"><i>消費<strong>後</strong></i></h2>
            <div class="accordion-content">
                <tabs id="t3" :nav="['消費者想的','企業需要的']">
                    <template slot="t3-0">
                        <img src="images/payment/section3-left-illust-s.png" alt="">
                    </template>

                    <template slot="t3-1-t">
                        <h3>交易成功後，後續的工作才更重要，如何整合資訊，接續行銷，增加回購，才是企業最應該重視環節。</h3>
                    </template>
                    <template slot="t3-1">
                        <checklist :lists="result.payment.checklist.section3"></checklist>
                    </template>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        },
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
