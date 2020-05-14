<template>
    <div class="desktop">
        <ul class="desktop-nav">
            <li>
                <a href="#section1" class="js-nav icon1" data-text="通路管理"></a>
            </li>
            <li>
                <a href="#section2" class="js-nav icon2" data-text="應收帳款"></a>
            </li>
            <li>
                <a href="#section3" class="js-nav icon3" data-text="信用額度"></a>
            </li>
            <li>
                <a href="#section4" class="js-nav icon4" data-text="業務巡補"></a>
            </li>
        </ul>

        <section id="section1">
            <section-title
                title="通路管理"
                padding="1em"
            ></section-title>
            <slider id="t1" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">中壢與青埔的客戶銷售量跟規模都有差異…這價格要怎麼訂阿?</h2>
                        <div>大連假又到了，中壢的銷量一直很不錯，這次支援作促銷，要作買一送一還有不定期的小驚喜活動，但青埔那邊的客戶說他們也要一樣的折扣...</div>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon1" color="#4bbdc3">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>feedback條件是贈送商品還是折抵貨款？</p>
                                        <p>哪個經銷商的合約快要到期了？可不可以主動通知我？</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon2" color="#be973c">
                                <template slot="content">
                                    <p class="hoverBox-title">錢老闆</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>每個經銷商的feedback條件都不同，哪些已經達到合約目標了，要來跟我要回饋？怎麼核算到底做到了沒？銷退有沒有扣掉？</p>
                                        <p>如何監控經銷商有沒有跑掉？(多久沒有叫貨，或越訂越少)</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有神器可以幫忙管理經銷商合約條件與各種折扣項目，並記錄經銷商的進貨資訊，分析貢獻度。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t1-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作經銷批發生意，其實您可以這樣管</h2>
                        <div>
                            <strong>通路合約控管好、加快結帳與對帳</strong>
                            <ul>
                                <li>系統建立各通路商談定的合約費用計算方式與條件記錄，並自動產出費用金額與通路合約費用明細表，可指定日期產出銷/ 退單據。</li>
                                <li>通路合約費用可依金額自動拋轉產生應付憑單，依贈品產生訂單。</li>
                                <li>自動依採購合約條件設定滾算採購費用，可指定資料日期，篩選進/退貨單單據。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template slot="t1-1">
                    <div class="slider-illust">
                        <img src="images/WB00267501_1/slide-illust1.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section2">
            <section-title
                title="應收帳款"
                padding="1em"
            ></section-title>
            <slider id="t2" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t2-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">收完款就可以領獎金了...ya...但A客戶還有多少錢要收阿?又有一家客戶要列呆帳了...</h2>
                        <div>客戶這麼多，常搞不清楚那家該收款了，要收多少？還有多少沒收？今年要提列多少呆帳？提列多少比例？用帳齡分析法還是銷貨百分比法？</div>
                    </div>
                </template>
                <template slot="t2-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon3" color="#be973c">
                                <template slot="content">
                                    <p class="hoverBox-title">錢老闆</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        有辦法降低應收帳款無法收回的風險嗎？
                                        <br />帳款天數也太長了吧！
                                        <br />錢到底收不收的回來？
                                        <br />現金嘎不嘎的過來啊！
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon4" color="#4bbdc3">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">手邊這麼多客戶，不知道帳款收回的狀況如何，要不要去催一下啊？</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon5" color="#f25090">
                                <template slot="content">
                                    <p class="hoverBox-title">會計</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">各筆應收帳款各自已多久還沒收回？<br>今年不知道要預估多少呆帳？</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />可以一目瞭然清楚知道各個客戶的帳款收回狀況，並提醒我哪些客戶必須用力催一下。
                        <br />可以自動計算應收帳款餘額有多少、已經逾期幾天了。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t2-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作經銷批發生意，其實您可以這樣管</h2>
                        <div>
                            <strong>未收帳款系統出、發票電子化正流行</strong>
                            <ul>
                                <li>後續由系統自動推算應收帳款的「預計收款日期」或是票據的「預計兌現日期」。</li>
                                <li>可設定「提前付款」或是「縮短票期」可以取得多少折扣。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template slot="t2-1">
                    <div class="slider-illust">
                        <img src="images/WB00267501_1/slide-illust2.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section3">
            <section-title
                title="信用額度"
                padding="1em"
            ></section-title>
            <slider id="t3" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t3-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">有家客戶應收帳款掛一堆，又來叫貨了，而且要的量很大，到底要不要出貨阿...</h3>
                        <div>上個月叫很多貨的客戶居然退票了...這下怎麼跟老闆交代?</div>
                    </div>
                </template>
                <template slot="t3-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon6" color="#2e55ef">
                                <template slot="content">
                                    <p class="hoverBox-title">老闆</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>給客戶總公司的信用額度，能不能連同客戶分公司一起管控？</p>
                                        <p>業務人員一直出貨，若超過客戶信用額度，能不能有警訊提醒？</p>
                                        <p>寄倉或借貨的商品，能不能納入信用額度管控？</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon7" color="#4bbdc3">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>這家客戶應收帳款居高不下，那家客戶有退票記錄，訂單該不該接啊？</p>
                                        <p>哎！我怎麼會知道這家客戶信用這麼差。</p>
                                        <p>接獲緊急訂單，卻付款異常，怎麼這麼倒楣。</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />下單或出貨時，有工具可以告訴我這個客戶的信用額度還剩多少，主動提醒我該不該出貨。
                        <br />信用額度可以管控好，避免倒帳風險。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t3-1-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">作經銷批發生意，其實您可以這樣管</h3>
                        <div>
                            <strong>信用額度管控好，老闆收款沒煩惱</strong>
                            <ul>
                                <li>總公司信用額度自動納入分公司耗用的信用額度</li>
                                <li>系統可參數設定如交易金額超過信用額度，提供警告功能。</li>
                                <li>可依客戶別各自設定信用額度與允許超出信用額度比率，避免人工記憶引起的失誤。</li>
                                <li>系統提供查詢客戶信用額度的餘額，依訂單/銷貨單查核比率控管相關項目金額。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template slot="t3-1">
                    <div class="slider-illust">
                        <img src="images/WB00267501_1/slide-illust3.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section4">
            <section-title
                title="業務巡補"
                padding="1em"
            ></section-title>
            <slider id="t4" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t4-0-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">客戶說架上快沒貨了，最近又在作促銷，賣得很不錯，叫我趕快補貨...</h3>
                        <div>公司居然沒庫存貨可以出了...產線就算加班也趕不及明天出貨...</div>
                    </div>
                </template>
                <template slot="t4-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon8" color="#4bbdc3">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            這家客戶還有多少訂單還沒出貨？
                                            <br />何時會到貨？
                                            <br />我怎麼建議客戶要再下多少量？
                                        </p>
                                        <p>年節期間好多商品在做促銷，這個客戶到底要報哪種價格才對呢？</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon9" color="#be973c">
                                <template slot="content">
                                    <p class="hoverBox-title">錢老闆</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            我的貨到底有沒有擺在最醒目的地方？
                                            <br />促銷期間正好賣，客戶竟然缺貨，搞什麼啊！
                                        </p>
                                        <p>業務回來才打單，包裝都做到半夜才能應付明天出貨。</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />可以隨時隨地查詢商品的庫存量、客戶已訂貨數量、 配送中數量、促銷活動、未收款。還可以隨時隨地下單、回傳收款記錄。
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t4-1-t">
                    <div class="slider-desc">
                        <h3 class="slider-desc-title">作經銷批發生意，其實您可以這樣管</h3>
                        <div>
                            <strong>業務巡補任務須注意：業績、競品管理要兼顧</strong>
                            <ul>
                                <li>業務人員在外直接透過手機平版，即時幫客戶查庫存、報價、打訂單傳回公司。</li>
                                <li>運用路順管理，協助業務人員快速擬出拜訪路線。</li>
                                <li>將拜訪客戶的時程連結至行事曆並將客戶地址連結google map規劃出路線，方便業務人員掌控拜訪路線與停留時間。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template slot="t4-1">
                    <div class="slider-illust">
                        <img src="images/WB00267501_1/slide-illust4.png" alt />
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