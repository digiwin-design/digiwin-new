<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="header-text">
                    <h1>{{content.title}}</h1>
                </div>
            </div>
        </div>
        <article class="section1">
            <div class="container">
                <h1>{{content.section1Title}}</h1>
                <p v-html="content.section1Desc" class="section1-desc"></p>
            </div>
            <ul class="section1-nav">
                <template v-if="isMobile">
                    <li><a href="#content1" v-on:click.prevent="clickHandlerOnMobile">【少量多樣】議題</a></li>
                    <li><a href="#content2" v-on:click.prevent="clickHandlerOnMobile">【電子業趨勢】議題</a></li>
                    <li><a href="#content3" v-on:click.prevent="clickHandlerOnMobile">同業分享</a></li>
                </template>
                <template v-else>
                    <li><a href="#content1" data-delay="450" v-on:click.prevent="clickHandler">【少量多樣】議題</a></li>
                    <li><a href="#content2" data-delay="450" v-on:click.prevent="clickHandler">【電子業趨勢】議題</a></li>
                    <li><a href="#content3" data-delay="450" v-on:click.prevent="clickHandler">同業分享</a></li>
                </template>
            </ul>
            <div ref="accordion" id="accordion" class="accordion">
                <h2 v-on:click="slideToggle" id="content1" class="content1">
                    <ul>
                        <li>【少量多樣】議題</li>
                        <li>如何因應客製化訂單少量多樣的營運策略變革與挑戰</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic1.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002598/WB00259801.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>如何因應客製化訂單少量多樣的營運策略變革與挑戰</h4>
                            <p>放眼全球，各工業國家為角逐工業強國摩拳擦掌，部署新一輪製造業革命計畫。除德國推出「工業4.0」，美國啟動「再工業化」，日、韓等國提出產業創新戰略，台灣「生產力4.0」計畫也應運而生。課程內容將協助電子業在工業4.0趨勢下的處境，面對少量多樣客製化的市場轉變，除了企業【接單模式】的修正外，隨著訂單結構比例的調整，其他諸如生產規劃/存貨政策/採購管理/產品開發等運作領域也將遭受衝擊。企業應該如何快速的全面因應與調整，避免營運績效受到嚴重侵蝕，將會是能否順利轉型的關鍵。</p>
                            <h5>活動議程</h5>

                            <h6>一、從工業4.0來看電子業客製化的市場挑戰</h6>
                            <p class="rightPart1_left">
                                •為什麼工業4.0的時代會是客製化的時代
                                <br>•少量多樣客製化不僅是【接單模式改變】更將牽動公司對於現行【營運策略模式】的全面審視及調整
                            </p>
                            <h6>二、因應客製化議題之精簡化與高速化的管</h6>
                            <p class="rightPart1_left">
                                •運用品號管理降低交易處理複雜度
                                <br>•調整及修正採購策略及備貨模式
                                <br>•善用模組化設計提升產品配置彈性
                                <br>•重新思考製造現場的績效追求
                                <br>•建置快速反應的計畫與排程能力
                                <br>•強化即時製程掌控與進度管理
                                <br>•審視及建構合宜的存貨政策
                                <br>•精細化的成本歸屬及產品利潤管理
                            </p>
                            <h6>三、持續提升企業經營績效的輔導模式與客戶案例分享</h6>
                            <p class="rightPart1_left">
                                •一體化輔導方法論
                                <br>•企業績效改善案例分享
                            </p>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" id="content2" class="content2">
                    <ul>
                        <li>【電子業趨勢】議題</li>
                        <li>智慧崛起！工業4.0浪潮揭開製造革命關鍵</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic2.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002562/WB00256201.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>智慧崛起！工業4.0浪潮揭開製造革命關鍵</h4>
                            <p>智慧工廠是製造業的發展趨勢，近幾年製造業面對席捲而來的工業4.0浪潮，課程內容將介紹工業4.0帶來的產業變革，製造業在面臨轉型創新的變革過程如何找到正確的方向，以及如何掌握大數據、物聯網、機器人、自動化設備等契機，讓台灣企業能夠迎頭趕上這波不得不面對的趨勢。鼎新特別安排的專業的講師團隊，東海大學劉仁傑教授與工研院戴熒美博士與熊治民博士，專家解析與專家看法將讓您更快速了解工業4.0與智慧製造。</p>
                            <h5>講師陣容與議程</h5>
                            <div id="box_t">
                                <h6>一、面對世界工廠移轉，揭開製造業關鍵的下一步</h6>
                                <p class="leftimg"><img src="images/seminar/pic_01.png" width="104" height="103"></p>
                                <div class="rightP">
                                    <p>
                                        <span class="P_Blod">劉仁傑</span> 教授
                                        <br>東海大學 工業工程與經營資訊學系
                                    </p>
                                </div>
                            </div>
                            <div id="box_t">
                                <h6>二、因應製造業轉型之智能工廠趨勢分析</h6>
                                <p
                                    class="leftimg"
                                ><img src="images/seminar/pic_02.png" width="104" height="103"></p>
                                <div class="rightP">
                                    <p>
                                        <span class="P_Blod">戴熒美</span> 博士/研究員
                                        <br>工研院 產業經濟與趨勢研究中心
                                    </p>
                                </div>
                            </div>
                            <div id="box_t">
                                <h6>三、物聯網、網宇實體系統及智慧工廠發展與應用趨勢</h6>
                                <p
                                    class="leftimg"
                                ><img src="images/seminar/pic_03.png" width="104" height="103" /></p>
                                <div class="rightP">
                                    <p>
                                        <span class="P_Blod">熊治民</span> 博士/經理
                                        <br>工研院 產業經濟與趨勢研究中心
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" class="content2">
                    <ul>
                        <li>【電子業趨勢】議題</li>
                        <li>工業4.0供應鏈互聯網之進料協作</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic3.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002624/WB00262401.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>
                                工業4.0供應鏈互聯網之進料協作
                            </h4>
                            <p>台灣企業一向充滿了韌性，總能在全球市場變局中殺出一條血路來，面對未來，逐步朝向市場的少量多樣客製特性，不只是影響了作業效率，更改變了企業交期政策、生產政策、採購政策等營運策略。在工業 4.0 催化了客製化的深度與廣度的趨勢下，企業除必須重新調理經營的 know-how 與自身作業流程外，更需要整合上游廠商交貨流程，共同面對嚴峻的少量多樣之市場挑戰。鼎新電腦本著服務台灣企業的責任，推出符合少量多樣客製化特性的解決方案，與台灣企業共同攜手面對工業4.0的挑戰。 </p>
                            <p align="center"><img src="images/seminar/pic.jpg" width="400" height="350" /></p>
                            <h5> 活動議程 </h5>
                            <h6> 一、工業 4.0 供應鏈互聯網</h6>
                            <p class="rightPart1_left">
                                • 工業 4.0 概述<br>
                                • 工業 4.0 供應鏈互聯網因應之道</p>
                            <h6>二、供應鏈互聯網實戰方案</h6>
                            <p class="rightPart1_left">
                                • 供應鏈互聯網之進料協作管理議題<br>
                                • 供應鏈互聯網之進料協作解決方案 </p>
                            <h6>三、案例分享</h6>
                            <p class="rightPart1_left">
                                • 客戶典範及實施效益
                            </p>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" class="content2">
                    <ul>
                        <li>【電子業趨勢】議題</li>
                        <li>智慧轉型，贏在應用力-電子組裝(PCBA)行業 實踐製造現場的智能化與智動化</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic7.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002770/WB00277001.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>智慧轉型，贏在應用力-電子組裝(PCBA)行業 實踐製造現場的智能化與智動化</h4>
                            <p>電子組裝代工，曾經是台灣最火紅的產業之一，如今卻成為毛3到4的產業。也因此，近幾年來大多往高品質、少量多樣的利基市場轉型，已有不少企業取得初步的戰果。然而，在工業4.0的大趨勢之下，大陸同業挾政府的資源得以快速升級，這讓我們好不容易站穩的腳步，再度面臨競爭的威脅。於是，如何加快腳步提升經營管理的能力，以及朝向智動化的智慧工廠升級，以因應未來更加嚴厲的挑戰，將是電子組裝相關企業的重要課題之一。本活動即是分享電子組裝企業業轉型升級的應用實例，讓您一窺智能化管理與智動化生產的變革歷程。</p>
                            <h5>活動介紹</h5>
                            <h6> 一、營運管理要點與案例分享</h6>
                            <p class="rightPart1_left">講師：鼎新電腦 李訓仁 行業總監</p>
                            <h6>二、齊料管理與Daily Plan案例分享</h6>
                            <p class="rightPart1_left">講師：鼎華系統 李文偉 資深顧問</p>
                            <h6>三、電子組裝智動化案例分享</h6>
                            <p class="rightPart1_left">講師：瑞傳科技 湯高文 經理</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content2">
                    <ul>
                        <li>【電子業趨勢】議題</li>
                        <li>預防資安災害 實現企業持續營運管理</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic8.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002836/WB00283601.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>防禦最前線！你我都必須要了解資訊安全管理 內行人才知道的撇步！</h4>
                            <p>即時洞察異常與威脅，從根本強化安全防護，近年資訊安全事件不斷發生，資安應變快速，尤其勒索病毒與惡意挖礦程式植入最為猖獗，企業也面臨許多看不見的威脅。關於外部威脅，我們發現勒索病毒與惡意植入於2017至2018年仍未停歇，當企業系統遭受攻擊，無法使用與讀取將造成企業營運中斷無法運作，或造成系統資料嚴重損害造成營運損失；針對內部威脅，近年也發生多起企業內部人員，故意或疏失造成企業營業資訊外洩、交易資料竄改不當得利事件，但企業無法舉證重要系統（如ERP）操作執行軌跡，導致無法追蹤舉證，以上種種因素增加了企業被攻擊的風險。</p>
                            <p>企業IT人員及營運主管應瞭解如何面對相關攻擊，以進行有效防範及管理。本次研討會，鼎新電腦的資深資訊安全顧問，將以行業相關國際標準、政府法規、近期主管機關要求現況，為您解析2018年最新企業資訊安全管理秘訣，並以永續營運管理角度，分享如何有效緩解與強化管制，避免內憂外患攻擊的威脅，讓企業能打造一個安全可信賴的資安環境，進而提升企業競爭力。</p>
                            <h5>活動介紹</h5>
                            <p>一、如何降低企業資訊安全風險威脅</p>
                            <p>二、提升企業核心系統安全檢核能力</p>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" id="content3" class="content3">
                    <ul>
                        <li>同業分享</li>
                        <li>透過製程控管提升品質及交期-微鑫電子案例分享</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic4.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002620/WB00262002.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>
                                透過製程控管提升品質及交期-微鑫電子案例分享
                            </h4>
                            <p>台灣產業面對少量多樣、交期縮短、庫存攀高逐漸蠶食獲利，原有成功模式已不再適用，企業須往工業4.0升級努力，打造智慧工廠強化生產力！從接單、報工、生產到交貨，打造一體化流程，有效運用人、機、物，進而提高產能。本活動邀請到微鑫電子分享產銷上情境，透過優化流程與自動化提升產品與管理質量，讓企業贏在決策速度，往智慧製造邁進！及 研華科技 陳志龍 副理 暢談如何邁向智慧製造工廠，另有 鼎新顧問總監 帶領探討智慧生產的核心能力。</p>
                            <h5>
                                講師陣容與議程
                            </h5>


                            <div id="box_t">
                                <h6> 一、「速度+效率」打造智慧生產的核心能力</h6>
                                <p class="leftimg"><img src="images/seminar/pic_04.png" width="104" height="103"></p>
                                <div class="rightP">
                                    <p>
                                        <span class="P_Blod">李訓仁</span> 顧問總監<br>
                                        鼎新電腦
                                    </p>
                                </div>
                            </div>
                            <div id="box_t">
                                <h6>二、微鑫電子生產運籌管理製造資源平台案例分享</h6>
                                <p class="leftimg"><img src="images/seminar/pic_05.png" width="104" height="103" /></p>
                                <div class="rightP">
                                    <p>
                                        <span class="P_Blod">周眾信</span> 協理<br />
                                        微鑫電子
                                    </p>
                                </div>
                            </div>
                            <div id="box_t">
                                <h6>三、電子業邁向智慧製造工廠應具備的能力</h6>
                                <p class="leftimg"><img src="images/seminar/pic_06.png" width="104" height="103"></p>
                                <div class="rightP">
                                    <p>
                                        <span class="P_Blod">陳志龍 </span>副理<br>
                                        研華電子
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" class="content3">
                    <ul>
                        <li>同業分享</li>
                        <li>寧茂企業精進管理案例分享-建構精準物料規劃及掌控生產脈動提升生產運籌管理</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic5.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="http://www.dsc.com.tw/event/WB002147/WB00214701.html" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>
                                寧茂企業精進管理案例分享-建構精準物料規劃及掌控生產脈動提升生產運籌管理
                            </h4>
                            <p>本研討會特別針對以電子組裝業設計，幫助企業快速回應市場變化，了解如何在有限的資源下規劃有效的進料及生產排程，探討產業現況與面臨之物料和產能規劃困境，並輔以案例研討方式，說明當初在產銷協調上所面臨問題與管理需求和導入APS系統後的具體效益，透過實例分享與研討作為改善與提昇產銷協調之借鏡參考。此外，本活動將以實機模擬廠內生管每日作業、訂單抽插單的變異、物料ECN採購狀況，APS應用到產線的實際生產狀況回饋後的變異等，讓您現場體驗APS快速的運算能力，依據需求、庫存的變化快速的提供調整對策，可以大幅降低人工查詢庫存料況、需求、生產計劃所耗費的時間。</p>


                            <p class="font_blackB">抽/插單已成常態，生館如何快速回應缺料/搶料狀況<br>
                                產品生命週期縮短，造成呆滯料風險與庫存成本增加?!<br>
                                後端產能負荷量不易掌控，提高訂單交期壓力?!</p>

                            <p> 你知道電子產業正面臨以下挑戰嗎? </p>
                            <p align="center"><img src="images/seminar/pic2.jpg" width="494" height="314" /></p>
                            <h5>
                                活動議程
                            </h5>
                            <div id="box_t">
                                <h6>一、寧茂生產運籌管理排程規劃平台案例分享</h6>
                                <p class="leftimg"><img src="images/seminar/pic_07.png" width="104" height="103"></p>

                                <div class="rightP">
                                    <div>
                                        <p class="righttopP">不景氣年代的挑戰與契機，深化運籌管理，創造企業價值<br>讓資訊部門成為創造競爭力的策略單位</p>
                                        <p><span class="P_Blod">陳志龍 </span>副理<br>研華電子</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" class="content3">
                    <ul>
                        <li>同業分享</li>
                        <li>台達電子案例分享-電子組裝業-打造毛利持續成長的關鍵利器</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic6.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="http://www.dsc.com.tw/event/WB002240/WB00224001.html%0D%0A" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>
                                台達電子案例分享-電子組裝業-打造毛利持續成長的關鍵利器
                            </h4>
                            <p>今天我們用不同的心態不同的角度，看看別人怎麼作。面對瞬息萬變的市場競爭，台達電子卻能履履創下歷史新高，其中材料成本降低正是重要關鍵因素之一，透過工廠營運管制系統，即時蒐集、儲存、整理與分析製造生產現場資料，讓組裝同業的物料訊息完整呈現，降低錯料比例。當『「快」速製造、「穩」定品質、「準」時交貨』已經成為企業成功的必要條件時，產品製造將在此扮演引領挑戰卓越的領航者，唯有透過全面掌握組裝同業的物料訊息，妥善運用關鍵製造資源，具備快、穩、準的生產效率，才能取得優勢，開創新局。</p>
                            <h5>
                                講師陣容與議程
                            </h5>
                            <h6>打造毛利持續成長的關鍵利器－台達電客戶案例分享 </h6>
                            <p>•台達電公司簡介行業特性描述
                                <br />
                                •台達電當初導入系統的狀況--面臨哪些管理重點與特別重視的地方<br />
                                •評估系統的過程及階段性的規劃內容
                                <br />
                                •導入後的效益分享
                                <br />
                                •給同產業的建議 </p>
                            <p class="font_blackB">講師：台達電子工業股份有限公司 孫聖坤 經理</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content3">
                    <ul>
                        <li>同業分享</li>
                        <li>跨越疆界與文化，管理在彈指之間達成目標－雅得電池案例分享</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic9.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="https://www.digiwin.com/tw/dsc/activity/WB002862/WB00286201.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>跨越疆界與文化，管理在彈指之間達成目標－雅得電池案例分享</h4>
                            <p>雅得電池南向佈建，發揮生產基地優勢創造利潤空間，營收破10%持續成長安全與舒適是當今的車子不間斷地要求，身為傳統二輪車用鉛酸電池大廠的雅得電池，成立於1989年，百分之百外銷的商業模式。在面臨環保議題以及科技的衝擊和挑戰，仍持續不斷堅守本質、發展電池技術。2011年南向佈局，將生產基地遷移至越南，形成台灣總部、全球銷售(主要在歐美)、越南生產的多國營運模式。面對市場激烈競爭下，雅得積極投入創新的技術、改善生產流程、降低成本減低風險，滿足經營策略下的管理機制，讓營收持續成長，奠定未來成功的基石。</p>
                            <h5>活動介紹</h5>
                            <p>一、傳產注入新管理模式，市場擴張與育才並進</p>
                            <p>二、市場擴張要徑之一，從數據中找機會</p>
                            <p>三、資訊佈局貫穿企業願景目標，正是成功關鍵</p>
                            <h5>講師介紹</h5>
                            <p>•李美宜 執行副總</p>
                            <p>•黃慧玲 財務長</p>
                            <p>•陳燕如 生管課長</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content3">
                    <ul>
                        <li>同業分享</li>
                        <li>微創新，在客戶想到之前做到-卡訊電子案例分享</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic10.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="https://www.digiwin.com/tw/dsc/activity/WB002894/WB00289401.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>提升獲利目標帶動全面改革，人均產值提升33%－BXB卡訊電子案例分享</h4>
                            <p>身為台灣專業研發公共廣播系統與會議系統的領導商卡訊電子，成立於1991年，從一家不到10個人的小公司，逐漸茁壯為擁有60名員工的國際企業。近年大陸供應鏈崛起，卡訊仍能保持產品的創新力與競爭力，透過自有品牌BXB，做出區隔及差異化，掌握成本費用與實質淨(毛)利，提升獲利目標，2013年起連續五年拿下台灣精品獎，在台灣市占率第一，更於2016年成功創櫃。透過資訊化導入串聯「報價毛利」、「庫存成本」及「資金管理」，確保營收成長後利潤共享，全面提升營運效能，奠定未來成功的基石。</p>
                            <h5>活動介紹</h5>
                            <h6>一、從代工到自有品牌，「Best X Best」行銷全世界</h6>
                            <p>卡訊電子 吳珮蓉 董事長</p>
                            <h6>二、化被動為主動，用數據推倒部門牆</h6>
                            <p>卡訊電子 李雅雯 財務部經理</p>
                            <h6>三、資訊通透關鍵流程，工具提升管理效度</h6>
                            <p>鼎新電腦 智能製造中心 曾秀珠 專案顧問經理</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content3">
                    <ul>
                        <li>同業分享</li>
                        <li>讓客戶主動找上門-建立高口碑與受信賴的製程能力-億威電子案例分享</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/seminar/activePic11.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="https://www.digiwin.com/tw/dsc/activity/WB002858/WB00285801.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>讓利基市場客戶找上門建立高口碑與受信賴的製程能力</h4>
                            <p>利基市場已經是台灣製造業最後的戰場，網通設備等電子組裝製程的行業也不例外，因此，建立高口碑與受信賴的製程能力，並且通過客戶的認證，成為企業生存必須具備的基本門檻，也是接單的必要條件。</p>
                            <p>「每個插件位置、接口、配件 都不能出錯」，高品質的製程能力，除了機台設備本身的精度之外，還需要高度的製程管制能力以及品質追溯與改善能力，因此，標準化、資訊化、自動化便成為必須導入的工具，甚至於在工業4.0的時代，逐步引進智能化也成為不可迴避的課題。</p>
                            <p>本活動將以實例說明SMT、DIP、組裝、測試、包裝等製程，在人、機、料、法、環的管制方法與即時記錄，以及品質的在線管制與快速追溯，並且邀請億威電子分享如何運用RFID管理最難管的組裝線，協助企業用最有效率的方式建立高質的製程能力，以取得在利基市場的經營能力。</p>
                            <h5>活動介紹</h5>
                            <h6>一、從成本競爭升級到品質信賴度競爭</h6>
                            <p>講師：鼎新電腦 李訓仁總監</p>
                            <h6>二、高效率的製程管制與快速追溯實務案例分享</h6>
                            <p>講師：翔威國際 周世杰副總經理</p>
                            <h6>三、運用RFID提高組裝線管理能力與生產效率實務案例分享</h6>
                            <p>講師：億威電子 黃貴賓</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    props: ['content'],
    computed: {
        isMobile: function () {
            return store.state.isMobile;
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
    methods: {
        slideToggle: function (event) {
            let $target = event.target.nodeName === 'H2' ? $(event.target) : $(event.target).parents('h2');
            $target.toggleClass('active').next().slideToggle();
            if (!this.isMobile) {
                $target.siblings('h2').removeClass('active').next().slideUp();
            }
        },
        clickHandler: function (event) {
            let delay = $(event.target).data('delay');
            this.scrollHandler(event, delay);
        },
        clickHandlerOnMobile: function (event) {
            this.scrollHandler(event);
        },
        scrollHandler: function (event, delay) {
            delay = delay || 0;
            // 展開/收合
            $(event.target.hash).addClass('active').next().slideDown();
            if (!this.isMobile) {
                $(event.target.hash).siblings('h2').removeClass('active').next().slideUp();
            }
            // 滾動頁面
            let $target = $(event.target);
            let target = $target.attr('href') || $target.data('target');
            setTimeout(function () {
                let offset = $('.page-submenu').outerHeight();
                let targetPos = $(target).offset().top;
                let finalPos = offset ? targetPos - offset : targetPos;
                $('html, body').animate({ scrollTop: finalPos });
            }, delay);
        }
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>