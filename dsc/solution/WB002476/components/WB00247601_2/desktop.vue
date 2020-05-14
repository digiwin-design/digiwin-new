<template>
    <div class="desktop">
        <section id="section1">
            <section-title title="找客戶" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t1" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            客製機訂單零零散散，未來的市場商機到底是好還是不好?
                            <br />當訂單預測出現困難，除了業務主管?受影響的單位還有那些
                        </h2>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon1" color="#5bbf8c">
                                <template slot="content">
                                    <p class="hoverBox-title">業務主管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>商機無限好，市場無限大，真正能簽下來的到底有幾家?</p>
                                        <p>每次花力氣經營的客戶，最後簽下來的訂單卻不如預期…</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon2" color="#81bf5b">
                                <template slot="content">
                                    <p class="hoverBox-title">採購</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>業務做的銷售預測每次都是打船中飛機，我的關鍵料要怎麼備?</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon3" color="#b7bb54">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>訂單能見度不佳，做與不做都是痛苦的抉擇，導致產能安排都要變來變去。</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我…
                        <br />建立通路分析模型，以產品、通路、客戶為分析視角，及時提供銷售強弱資訊，做為決策參考依據
                        <br />佈署企業營收地圖，快速審視營收版塊消長狀態，讓決策者按圖索驥即時下逹關鍵決策
                        <br />
                        <strong>因為….接訂單很重要，讓商機如何做到接二連三更重要…</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t1-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【找客戶】結合年度預算，從營收地圖找尋高機會市場</strong>
                            <p>若我們能建構營收地圖，告訴業務市場開發的方向與重點區域，並隨時呈現市場營收與預算達成狀況? 讓管理者能按圖索驥及時掌控市場機會，下達關鍵決策。</p>
                        </div>
                    </div>
                </template>
                <template slot="t1-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust1.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section2">
            <section-title title="搶訂單" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t2" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t2-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            客戶說：我們打算開發這個產品，請幫我評估一下怎麼加工比較好，
                            <br />你們建議用哪一個機型?預算大概多少?
                            <br />光是估報價就要三天? 如果機台估報價能夠又快又準該多好!
                        </h2>
                    </div>
                </template>
                <template slot="t2-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon4" color="#009c9f">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            這麼多規格的搭配到底對不對，還是要再改哪一個模組?
                                            <br />那客製怎麼估?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon5" color="#548fc6">
                                <template slot="content">
                                    <p class="hoverBox-title">研發</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            規格上次講過，又再問~
                                            <br />哇賽！發那科機器手臂沒做過，怎麼弄?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon6" color="#b7bb54">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            規格改這麼多！怎麼做?!
                                            <br />機器手臂沒做過，時間怎麼估?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我…
                        <br />建構以產品關鍵特徵為基礎的選配模式，可以加快機台的報價速度與提高正確性
                        <br />建立以多種成本處理模式，來支援機台估報價之成本估算需求，簡化繁瑣的成本計算作業
                        <br />
                        <strong>因為…機台選配怎麼選不重要，重點是報價怎麼快、BOM怎麼出來</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t2-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【搶訂單】回覆客戶詢價的速度要快更要準確</strong>
                            <p>
                                客戶的訂單多是急短單，很快就要依規格做估報價，如何才做到"quick response"！
                                <br />工具機如何透過特徵碼協助快速估報價；專案機要如何透過客製模組化快速估報價。
                            </p>
                        </div>
                    </div>
                </template>
                <template slot="t2-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust2.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section3">
            <section-title title="立中樞" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t3" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t3-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            BOM都不準!每次都叫研發要改，結果發下來還是舊的!
                            <br />客製一多，就不知道用哪一版的才對!
                        </h2>
                    </div>
                </template>
                <template slot="t3-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon7" color="#548fc6">
                                <template slot="content">
                                    <p class="hoverBox-title">研發</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            規格選配！
                                            <br />上次不是講過了，還再問～
                                            <br />圖都發了，為什麼版本都不是最新的
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon8" color="#81bf5b">
                                <template slot="content">
                                    <p class="hoverBox-title">採購</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            到底買的東西對不對
                                            <br />那一個版本才是對的
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon9" color="#009c9f">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>都說選配有標準，每次要報價還是要找研發再確認，我都已照著研發講的做，研發還說我做錯@#$%....</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我….
                        <br />建構研發人員設計過程中，同步進行建料、架BOM，以降低人員作業重工與失誤風險
                        <br />建立研發EBOM與製造MBOM資料同步機制，縮短協同溝通時間。
                        <br />
                        <strong>因為…研發圖面什麼時候出來不重要，重點是客戶要的機台什麼時候可以出</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t3-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【立中樞】從圖面出料BOM要快，採購跟生產單位才能跟著打仗</strong>
                            <p>
                                料號、BOM表能夠快速產出，採購跟生產單位才能盡快往下作業有所依循，
                                <br />立中樞就是協助研發人員如何快速由圖面產出料號、BOM表，同時又能作圖面版本版次控管。
                            </p>
                        </div>
                    </div>
                </template>
                <template slot="t3-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust3.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section4">
            <section-title title="重應變" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t4" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t4-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            客戶需求：皮帶式銑床換成直結式，加裝發那科機器手臂
                            <br />研發大叫...發那科機器手臂沒做過，怎麼弄?!
                            <br />圖面要重畫，建料架BOM要重來
                        </h2>
                    </div>
                </template>
                <template slot="t4-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon10" color="#b7bb54">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            花了半天才整理好ECN、
                                            <br />比料、換料，又來一批。
                                            <br />每次開發件總是三催四請，都還進不來
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon11" color="#81bf5b">
                                <template slot="content">
                                    <p class="hoverBox-title">採購</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            不是開發件沒去買，是因為圖面還未下來
                                            <br />ECN變更總是來匆匆，一堆繁鎖作業要處理，不知如何去衝衝
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon12" color="#d98754">
                                <template slot="content">
                                    <p class="hoverBox-title">現場</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            為什麼缺料總在機臺上線後
                                            才開始…
                                            <br />又要變了，到底那些要退？
                                            <br />那些要領?
                                            <br />機器手臂!!圖在那?BOM在那?變更流程走到那?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我….
                        <br />CAD 2 BOM自動比對自動產生 ERP ECN
                        <br />製令用料差異，自動比對並變更。解析用料差異，自動退料
                        <br />
                        <strong>因為…設計變更怎麼變不重要，重點是變更打哪裡來、到哪裡去</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t4-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【重應變】ECN流程自動化，讓研發人員的時間專注在更美好的設計上</strong>
                            <p>
                                設計與生產製造併行情況常發生，但狀況往往是ECN後還有採購發包、物料調整、模組換料等…要面對，
                                <br />重應變能協助圖面的審查及控管並自動產生ECN單，後續自動產生相關製令進行變更與料況的調整。
                            </p>
                        </div>
                    </div>
                </template>
                <template slot="t4-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust4.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section5">
            <section-title title="順產能" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t5" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t5-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            明明產能都還有剩，為什麼機台做不出來？每次問交期都要問個老半天！
                            <br />何時能擺脫月初缺料，月底趕工的宿命..
                        </h2>
                    </div>
                </template>
                <template slot="t5-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon13" color="#b7bb54">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>老闆說現場機台抽兩台，王董要的3台擺進來，這樣排程要怎麼排?</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon14" color="#81bf5b">
                                <template slot="content">
                                    <p class="hoverBox-title">採購</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>排程不明確，到底這批貨什麼時候要?排程不知在哪裡，交期只好押”25”</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon15" color="#d98754">
                                <template slot="content">
                                    <p class="hoverBox-title">現場</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            排程變來變去，
                                            <br />到底哪一台要先上？料在哪裡？
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我….
                        <br />建立節拍化機台組裝排程，正確標定物料進廠時間，以改善現場多餘料與缺料問題
                        <br />建構訂單可承諾量查詢機制，並規劃關鍵料與排程協作機制
                        <br />
                        <strong>因為…機台排程怎麼排不重要，重點是想要怎麼排就要能怎麼做出來</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t5-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【順產能】回覆交期前先作訂單模擬，讓現有資源作到最大運用</strong>
                            <p>
                                當市場狀況的急短單多時，若我們能在既有產能下將抽差單狀況做模擬即能承諾具體交期。
                                <br />即能正確標定物料進廠時間，亦能改善現場多餘料與缺料問題。
                            </p>
                        </div>
                    </div>
                </template>
                <template slot="t5-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust5.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section6">
            <section-title title="削庫存" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t6" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t6-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            庫存不是一堆了嗎？為什麼客戶要的那台就是沒有？
                            <br />什麼都來不及，不然你告訴我現在哪個機型可以賣？
                        </h2>
                    </div>
                </template>
                <template slot="t6-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon16" color="#b7bb54">
                                <template slot="content">
                                    <p class="hoverBox-title">生管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            一個月出機60、70台，
                                            <br />廠外庫存也備200多台了，不夠還能怎麼樣?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon17" color="#81bf5b">
                                <template slot="content">
                                    <p class="hoverBox-title">採購</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>到底有哪些東西在廠商那邊?</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon18" color="#d98754">
                                <template slot="content">
                                    <p class="hoverBox-title">現場</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>到底有料的先做，還是有單先做?</p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我….
                        <br />建立機台共用料件、選配料件預測規劃模式，以滿足成套採購、成套庫存的管理模式
                        <br />建立主件採購流程、政策性採購流程之多段式發包機制，以降低因客戶需求變動後所產生之多餘庫存
                        <br />
                        <strong>因為…機台備庫多少不重要，重點是機台要能出，庫存不能多</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t6-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【削庫存】要降庫存就得先作預測，達到最小量與最大週轉就是降低庫存</strong>
                            <p>
                                降低庫存很重要但降了常導致現場停工待料影響生產，若我們能從銷售預測最適化做起，
                                <br />即能將共用件與選配件的模組規劃搭配銷售預測進行庫存的最小量與最大週轉。
                            </p>
                        </div>
                    </div>
                </template>
                <template slot="t6-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust6.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section7">
            <section-title title="固忠誠" padding-top="50px" padding-bottom="1em"></section-title>
            <slider id="t7" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t7-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            機台功能越來越多，技術門檻越來越高。人怎麼教？
                            <br />任務怎麼調度？經驗怎麼傳承？
                        </h2>
                    </div>
                </template>
                <template slot="t7-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon19" color="#009c9f">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            客戶問什麼時候維修師傅可以到場維修?
                                            <br />這台機器上個月才修過，怎麼現在又壞了，到底有沒有修好，換了什麼東西?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon20" color="#5e66d1">
                                <template slot="content">
                                    <p class="hoverBox-title">維修主管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            維修師傅老是在外，安排工作最痛苦的是，人在哪？機器修到哪？
                                            <br />維修案件最怕問過去？過去的點點都落在紀錄裡行間，而記錄卻不知道落在哪一個櫃子。
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="icon21" color="#7d54bb">
                                <template slot="content">
                                    <p class="hoverBox-title">維修師傅</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        <p>
                                            人在外面跑，電話在後面跑，CASE狀況不清楚，怎麼知道能不能修。
                                            <br />這台機器之前誰修過，換過什麼零件？程式用哪個版本?
                                        </p>
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                    <p class="slider-wish">
                        《我希望》
                        <br />有工具可以幫我….
                        <br />透過故障原因分類建立維修知識庫、經由即時任務指派與日程管理優化客戶叫修流程、落實維修履歷記錄做好技術傳承準備，藉由故障原因分析來改善產品品質與提高商譽。
                        <br />
                        <strong>因為......機台能修多快不重要，重點是維修效率怎麼提昇，經驗怎麼傳</strong>
                    </p>
                </template>

                <!-- 解決方案 -->
                <template slot="t7-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">客製化接單，其實您可以這樣管理？</h2>
                        <div>
                            <strong>【固忠誠】維修服務滿意，始於銷售、終於至善</strong>
                            <p>在機台維修技術日益複雜的情形下，我們不得不思考如何建立機台的維修履歷系統，以滿足維修人員在面對客戶維修案件時，能快速查詢以往的維修紀錄，以及透過故障原因來查詢相關的維修資料，達成維修案件快速完修的目的。</p>
                        </div>
                    </div>
                </template>
                <template slot="t7-1">
                    <div class="slider-illust">
                        <img src="images/WB00247601_2/slide-illust7.png" alt />
                    </div>
                    <a href="#contact" class="slider-more js-nav">了解更多</a>
                </template>
            </slider>
        </section>
    </div>
</template>

<script>
module.exports = {
    components: {
        'section-title': httpVueLoader('../section-title.vue'),
        'slider': httpVueLoader('./slider.vue'),
    },
    computed: {
        nav: function () {
            return ['常見困擾', '解決方案'];
        }
    },
}
</script>