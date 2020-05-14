<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <h2 v-on:click="slideToggle">進貨檢驗</h2>
            <div class="accordion-content">
                <tabs id="t1">
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【進貨採購沒管好】影響有多大？</h3>
                            <div>我們的廠商大都是業界知名、推薦的，價格雖不是最低但也不便宜，又有國家SGS的認證， 應該沒有問題吧？</div>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <hover-box custom-class="main icon12" height="260">
                            <template slot="content">
                                <p class="hoverBox-title">採購</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>廠商提供的商品常常多批混雜，每批的效期又不盡相同，有什麼方法可以做好批號管理？</p>
                                    <p>要怎麼樣才能快速地掌握廠商交貨的狀況？對於品質常出問題的廠商可以做些管控反要求。</p>
                                    <p>原料常以量大議價方式進行採購，但效期管理不易導致過期報廢品太多，要如何降低報廢呢？</p>
                                </div>
                            </template>
                        </hover-box>
                    </template>
                </tabs>
            </div>

            <h2 v-on:click="slideToggle">生產管理</h2>
            <div class="accordion-content">
                <tabs id="t2">
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【生產過程沒控好】影響有多大？</h3>
                            <div>生產從領料、在製到成品入庫除料做到先進先出也要透過批號來管控，報廢品的處理也要注意，不然政府或客戶來查廠時就會有問題影響公司的聲譽…</div>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <hover-box custom-class="darkOrange icon4">
                            <template slot="content">
                                <p class="hoverBox-title">生管</p>
                            </template>
                            <template slot="hover">
                                <div
                                    class="hoverBox-hoverText"
                                >原物料有哪些即將過期要先領出來使用？哪些已經過期要避免誤用？如何落實先進先出啊？</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="forest icon2">
                            <template slot="content">
                                <p class="hoverBox-title">倉管</p>
                            </template>
                            <template slot="hover">
                                <div
                                    class="hoverBox-hoverText"
                                >過期的產品累積多一點再一起銷毀，但被查到貯存過期食品會被罰，現在倉庫裡有哪些已過期？</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="tomato icon5">
                            <template slot="content">
                                <p class="hoverBox-title">廠長</p>
                            </template>
                            <template slot="hover">
                                <div
                                    class="hoverBox-hoverText"
                                >產線人員針對每一批號商品，皆應輸入其對應之物料批號、添加物、製程資訊及相關檢驗報告這樣工作做得完嗎？</div>
                            </template>
                        </hover-box>
                    </template>
                </tabs>
            </div>

            <h2 v-on:click="slideToggle">成品銷售</h2>
            <div class="accordion-content">
                <tabs id="t3">
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h3 class="slider-desc-title">【銷售追蹤沒做好】影響有多大？</h3>
                            <div>政府規定業者要建立追溯追蹤制度、通路進貨驗收也會要求，這樣勢必要推行批次管理，但這樣對作業上loading會額外加重！</div>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="tomato icon5">
                            <template slot="content">
                                <p class="hoverBox-title">廠長</p>
                            </template>
                            <template slot="hover">
                                <div
                                    class="hoverBox-hoverText"
                                >要逐批記錄原料來源資訊、製程過程資訊與產品流向資訊，還需要可以相互關連勾稽，這不是人工記錄或是用Excel就可以辦到的啊！</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="forest icon2">
                            <template slot="content">
                                <p class="hoverBox-title">倉管</p>
                            </template>
                            <template slot="hover">
                                <div
                                    class="hoverBox-hoverText"
                                >入庫要給予批號，出庫要拿對批號，這樣大家都會覺得我在找他們麻煩吧！</div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="darkYellow icon7">
                            <template slot="content">
                                <p class="hoverBox-title">業務</p>
                            </template>
                            <template slot="hover">
                                <div
                                    class="hoverBox-hoverText"
                                >廠商進貨驗收要看批號效期，出錯被退貨還要被罰錢！可不可以給我對的商品不出錯阿！</div>
                            </template>
                        </hover-box>
                    </template>
                </tabs>
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
