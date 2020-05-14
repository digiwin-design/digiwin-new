<template>
    <div class="desktop">
        <ul class="desktop-nav">
            <li>
                <a href="#section1" class="js-nav icon5" data-text="通路合約"></a>
            </li>
            <li>
                <a href="#section2" class="js-nav icon6" data-text="促銷管理"></a>
            </li>
            <li>
                <a href="#section3" class="js-nav icon7" data-text="允收．效期"></a>
            </li>
        </ul>

        <section id="section1">
            <section-title title="通路合約" padding="1em"></section-title>
            <slider id="t1" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h2
                            class="slider-desc-title"
                        >今天要出貨到家樂福xx分店三十箱、大潤發要請款了還沒出對帳單、全家跟7-11的電子發票還沒上傳…</h2>
                        <div>公司產品鋪貨到各個通路販售，合約內容費用都不同，每月只要遇到請款對帳結帳就想離職...老闆說我是今年第八個找進來的會計了...</div>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon10" color="#4bbdc3">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            各通路的費用種類這麼多，
                                            <br />計算方式又都不同，
                                            <br />怎麼搞得清楚？
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg2">
                            <hover-box custom-class="icon11" color="#ed4535">
                                <template slot="content">
                                    <p class="hoverBox-title">財務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>通路對帳金額都對不起來，也不確定費用算的對不對？</p>
                                        <p>出貨到各分店，請款跟總店請，每個月對帳、結帳要人工彙總，好累！又怕弄錯、漏掉！</p>
                                        <p>需配合各通路，電子發票要上傳到金財通、關貿、財政部、汎宇….難道不能一次搞定嗎？</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />自動按合約依實際業績算出通路費用，並產生通路對帳單快速跟客戶請款，並按各客戶配合的電子發票平台上傳電子發票。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t1-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作經銷批發生意，其實您可以這樣管</h2>
                        <div>
                            <strong>通路合約控管好、加快結帳與對帳</strong>
                            <ul>
                                <li>通路合約條件可建立在系統內，月初、月中可試算，預估業績多少時，未來這個通路可能會有多少的通路費用，預先試算哪個通路賺錢？哪個通路不賺錢？</li>
                                <li>讓營業單位可按市場策略性考量，針對通路特性做差異化處理。</li>
                                <li>月底財務對帳時，可自動按合約依實際業績算出通路費用，並產生通路對帳單快速跟客戶請款，並按各客戶配合的電子發票平台上傳電子發票。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template slot="t1-1">
                    <div class="slider-illust">
                        <img src="images/WB00267501_2/slide-illust1.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section2">
            <section-title title="促銷管理" padding="1em"></section-title>
            <slider id="t2" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t2-0-t">
                    <div class="slider-desc">
                        <h2
                            class="slider-desc-title"
                        >配合家樂福促銷的組合品庫存還有多少?...COSTCO的促銷組合還沒包裝...條碼要怎麼印?...</h2>
                        <div>商品種類多，怎麼搭配組合才能增加營收、降低庫存？每個通路多個檔期同時進行，常常搞錯價格！我不想被扣獎金阿...</div>
                    </div>
                </template>
                <template slot="t2-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon12" color="#be973c">
                                <template slot="content">
                                    <p class="hoverBox-title">錢老闆</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>檔期忙完了，促銷到底有沒有達到當初預期？哪個通路的組合最賺錢？我要看各通路的銷售分析與促銷利潤分析，快作報表給我...</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon13" color="#ec1849">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            這東西是快過期了嗎？
                                            <br />還是標錯價？
                                            <br />怎麼這麼便宜？
                                            <br />賺到了....ya.....
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon14" color="#f9430b">
                                <template slot="content">
                                    <p class="hoverBox-title">業務主管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>這個檔期的促銷都過一半了，到底賣得怎樣?還要備多少貨?業績目標能達成嗎?還能作什麼補求措施?</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />打單時可以自動判斷促銷期間優惠價，不用擔心價格打錯。
                        <br />可以配合量販通路之商品包裝規格、商品組合，印出商品條碼標。
                        <br />隨時掌握活動業績狀況，分析此檔促銷是否有效、帶給公司多少利潤。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t2-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作連鎖通路生意，其實您可以這樣管</h2>
                        <div class="section2-cols">
                            <div class="section2-col">
                                <img src="images/WB00267501_2/slide-illust2.png" alt />
                            </div>
                            <div class="section2-col">
                                <div>
                                    <strong>促銷很複雜? 數據幫助你</strong>
                                    <ul>
                                        <li>促銷提報時，可以參考呆滯品、短效期品分析表、產品成本/毛利分析…等，充分掌握促銷可利用資源。</li>
                                        <li>促銷優惠價、產品組合可設定於系統中，業助打單時可自動判斷促銷期間優惠價，不用擔心價格打錯。</li>
                                        <li>配合量販通路之商品包裝規格、商品組合，可由系統印出商品條碼標，以因應客戶出貨所需。</li>
                                        <li>促銷中，可隨時掌握活動業績狀況，可配合活動狀況機動應變。</li>
                                        <li>促銷活動結束後，可做促銷成效檢討，分析此檔促銷是否有效、帶給公司多少利潤。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template slot="t2-1">
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section3">
            <section-title title="允收．效期" padding="1em"></section-title>
            <slider id="t3" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t3-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">COSTCO說這批貨過了允收期，不收了...家福樂也不要這批貨...</h3>
                        <div>
                            商每家量販店效期規範都不同，這批貨到底要出給誰阿...
                            <br />每天一直出貨都沒有注意到哪些快過期，報廢傷利潤，還得賠錢耶！
                        </div>
                    </div>
                </template>
                <template slot="t3-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon15" color="#6a80af">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            怎麼又出短效期商品給我，害我沒東西賣.....
                                            <br />下次不跟你們公司進貨了..
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon16" color="#4bbdc3">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            倉庫人員怎麼常常出到效期不對的商品，老是被客戶退貨。
                                            <br />我又要去跟客戶賠罪了....
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />出貨時有工具幫我依照客戶的商品允收期條件自動帶出出貨[批號]；
                        <br />有神器能夠提早警示及提醒我有短效期品，可以盡早讓[即期品]在未過期前充分被利用。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t3-1-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">作連鎖通路KA生意，其實您可以這樣管</h3>
                        <div>
                            <strong>善用批號管理、進而降低報廢成本</strong>
                            <ul>
                                <li>可按客戶商品允收期條件建立於系統中。</li>
                                <li>出貨時由系統依照該客戶的商品允收期條件自動帶出出貨[批號]，倉庫人員僅需按系統建議的批號指示去倉庫撿貨即可。</li>
                                <li>若有短效期品，系統能夠提早警示及提醒，讓同仁能盡早將[即期品]在未過期前充分被利用，降低報廢成本。</li>
                                <li>避免出錯的批號導致被客戶退貨或罰款。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template slot="t3-1">
                    <div class="slider-illust">
                        <img src="images/WB00267501_2/slide-illust3.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function () {
            return ['常見困擾', '解決方案'];
        }
    },
}
</script>