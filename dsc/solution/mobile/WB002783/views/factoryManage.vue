<template>
    <div class="factoryManage">
        <main-header>
            <template slot="content">
                <h1>工廠管理的第一步：<br><strong>現場透明化</strong></h1>
                <p>工廠每天都有突發狀況要處理，就算到現場也解決不了問題，唯有讓<strong>全貌呈現</strong>才能看出問題。</p>
            </template>
        </main-header>

        <div class="section1">
            <div class="container">
                <ul>
                    <li v-for="item in result.factoryManage.section1" :key="item">{{item}}</li>
                </ul>
                <img src="images/factoryManage/section1-illust.png" alt="">
            </div>
        </div>

        <article class="section2">
            <div class="container">
                <section-title
                    title="億威電子"
                    desc="在辦公桌前落實目視<br>管理掌握即時生產狀況"
                    padding="1em"
                ></section-title>
                <p class="section2-content">從軍用市場到商用市場的接單型態改變，以ERP為基礎資訊平台後，為了因應插差單的複雜性，必須更精準的掌控工單生產的狀況？製程的進度？良率的狀況？缺料的資訊？產線工序如何調度及安排？2012年導入SFT廠區生產追蹤系統，輔以電子看板呈現，落實目視管理及走動式管理，生產資訊可透明化的被掌控，2013年再思考針對多批量的製程移轉報工如何可以更主動及快速，進而<strong>導入運用RFID的科技成熟技術，在製程移轉及人員報工上經過RFID的Reader感應器上即可快速同步取得人員及工單及進站或出站的資訊，瞭解生產狀況。</strong></p>
                <div class="section2-illusts">
                    <section>
                        <h1 class="caption">億威採用RFID於SFT報工示意圖</h1>
                        <img src="images/factoryManage/section2-illust.jpg" alt="">
                    </section>
                    <section>
                        <h1 class="caption">【e-KB &amp; SFT】只要在辦公桌前就能掌握工廠生產狀況</h1>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/Rfu0Sla56dE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </section>
                </div>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="工廠管理有法寶"
                    padding="1em"
                ></section-title>
                <p>您再也不需要把巡視工廠當作健身運動</p>
                <img src="images/factoryManage/section3-illust.png" alt="">
            </div>
        </article>

        <article id="productionSchedule" class="section4">
            <div class="container">
                <section-title
                    title="生產排程"
                    desc="透過排程規劃可精準掌控生產及物控的平衡，降低存貨與呆滯料的發生，又可如期達交提升顧客滿意度。"
                    padding="1em"
                ></section-title>
                <img src="images/factoryManage/section4-illust.png" alt="">
                <a href="/tw/software/723.html" target="_blank">更多生產排程說明</a>
            </div>
        </article>

        <article id="esop" class="section5">
            <div class="container">
                <section-title
                    title="電子作業指導書(eSOP)"
                    padding="1em"
                ></section-title>
                
                <h2>eSOP可解決以下問題</h2>
                <ol class="section5-list">
                    <li>
                        <p>維護管理不易<br>紙本SOP會有存放、找尋問題，導致時間浪費。或因時間關係會有缺頁或顯示不清的問題，導致生產動作遺漏以至於生產異常。</p>
                    </li>
                    <li>
                        <p>拿錯SOP的風險<br>導致產生不良品</p>
                    </li>
                    <li>
                        <p>SOP翻頁時間長<br>若SOP內容較多，要花較長時間翻頁，延長加工時間。</p>
                    </li>
                </ol>
                
                <figure>
                    <figcaption>將SOP設定的頁數派送至不同螢幕</figcaption>
                    <img src="images/factoryManage/section5-illust.png" alt="">
                </figure>

                <p class="section5-quote">
                    eSOP可設定依人數、頁數<strong class="highlight">自動</strong>派送至不同螢幕。<br>
                    EX:製程為組裝，設定加工人數為四人，系統<strong class="highlight">自動派送四份不同的SOP文件，到工作站點的平板或螢幕上。</strong>
                </p>
            </div>
        </article>

        <article id="ekb" class="section6">
            <div class="container">
                <section-title
                    title="電子看板"
                    padding="1em"
                ></section-title>
                <p class="section6-desc">提供多種電子看板，如查詢製令在各製程的生產狀態，是否有缺料？生產看板、派工看板、預計加工看板、逾交製令看板、閒置製令看板、機台狀態查詢，配合燈號提供即時摘要資訊，亦可展開至細部資訊，使各級使用人員能輕易掌握現場及即時針對異常狀況應變處理。</p>
                <div class="section6-lists">
                    <ul class="section6-list">
                        <li>生產看板 (批量)</li>
                        <li>派工看板</li>
                        <li>逾交製令看板</li>
                    </ul>
                    <ul class="section6-list">
                        <li>生產看板 (製令)</li>
                        <li>預計加工看板</li>
                        <li>閒置製令看板</li>
                    </ul>
                </div>
                <img src="images/factoryManage/section6-illust.jpg" alt="">
                
                <p class="caption">eKB電子看板導入效益</p>
                <table v-for="tableItem in result.factoryManage.section6" :key="tableItem.thead">
                    <thead>
                        <tr>
                            <th>{{tableItem.thead}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tbodyItem in tableItem.tbody" :key="tbodyItem">
                            <td>{{tbodyItem}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <article id="replyWork" class="section7">
            <div class="container">
                <section-title
                    title="現場報工"
                    padding="1em"
                ></section-title>
                <p class="section7-desc">報工的成功關鍵就在「操作簡便」，讓外藉勞工與資深老員工也能輕鬆上手，更可以結合RFID，同時完成掃描(報工)作業，讓資料準確度變高並減少輸入作業時間，達到生產進度與工時透明化。</p>
                <img src="images/factoryManage/section7-illust.png" alt="">
            </div>
        </article>

        <article id="outsourcing" class="section8">
            <div class="container">
                <section-title
                    title="外包商管理"
                    padding="1em"
                ></section-title>
                <p class="section8-desc">提供製令發放、在製品進出站追從蹤、外包追蹤、拆併批、不良品及檢驗分級登錄，至訂單完工結案，使用者可彈性設定追的詳細度與在特定作業設定需要收集的資料。</p>
                <ul class="section8-list">
                    <li>Web平台，可依權限讓外包商登錄(外包商系統不需安裝軟體，可上網即可)</li>
                    <li>操作畫面單純只有進出站相關作業</li>
                    <li>外包商也可知預計加工的製令有那些方便產能安排</li>
                </ul>
                <img src="images/factoryManage/section8-illust.jpg" alt="">
            </div>
        </article>

        <article id="availability" class="section9">
            <div class="container">
                <section-title
                    title="稼動管理"
                    padding="1em"
                ></section-title>
                <p class="section9-desc">稼動率顯示產能已經滿載，<br>但真的不能再提升了嗎？</p>
                <p class="section9-desc">設備花大錢買進總是希望能發揮最大產能，但產能已經發揮最大效率了嗎？如何知道設備的產能損失發揮在那裡？看稼動率已經產能滿載，但真的不能再提升了嗎？你清楚設備浪費多少產能在等待、換線？效率是否合理非經驗說了算，提出有效的數據佐證才是最佳利器。</p>
                <figure>
                    <figcaption class="caption white">機台每日稼動表</figcaption>
                    <img src="images/factoryManage/section9-illust1.jpg" alt="">
                </figure>
                <figure>
                    <figcaption class="caption white">OEE分析柏拉圖</figcaption>
                    <img src="images/factoryManage/section9-illust2.jpg" alt="">
                </figure>
            </div>
        </article>

        <article id="machineIntegration" class="section10">
            <div class="container">
                <section-title
                    title="機台整合"
                    padding="1em"
                ></section-title>
                <p class="section10-desc">製造業在進行設備數據收集與製程管制時，在上料前需確保用料正確，製造中每二小時巡檢與定期檢查，最後再蒐集不良檢測原因作分析....，這一切人為管制的過程，是否常有疏忽發生？未來您可選擇透由系統的管控，把離線改成在線，不即時改成即時，提高管理效率。</p>
                <figure>
                    <figcaption class="caption">進站的人、機、料記錄與管制</figcaption>
                    <img src="images/factoryManage/section10-illust1.png" alt="">
                </figure>
                <figure>
                    <figcaption class="caption">出站與品質管制</figcaption>
                    <img src="images/factoryManage/section10-illust2.png" alt="">
                </figure>
            </div>
        </article>

        <article id="productRecall" class="section11">
            <div class="container">
                <section-title
                    title="產品回溯"
                    padding="1em"
                ></section-title>
                <p class="section9-desc">「有能力回溯」<br>將是廠商接單基本條件</p>
                <p class="section9-desc">退貨與客訴是企業最不願意面對的現實，退貨發生當下，除了追出有瑕疵的半成品或成品？來自於哪幾個批號？進一步聚焦產品來源以及賣給了哪些對象？最重要是避免客訴問題再度發生，與減少賠償風險降低損失。近年來客戶稽核的需求愈來愈高，「有能力回溯」已經是廠商接單基本條件之一，產品溯源及品質監控將是提升客戶滿意度，建立品牌競爭力的最佳途徑。</p>
                <img src="images/factoryManage/section11-illust.png" alt="">
            </div>
        </article>

        <article class="section12">
            <div class="container">
                <section-title
                    title="工廠管理案例介紹"
                    desc="從精密鑄造、粉末治金、手工具、機械業......等，各行各業都有成功案例！"
                ></section-title>
                <router-link to="/case/4">立即前往</router-link>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        }
    },
}
</script>