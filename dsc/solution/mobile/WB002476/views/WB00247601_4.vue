<template>
    <div class="WB00247601_4">
        <div class="header">
            <div class="container">
                <div class="header-text">
                    <h1>{{result.title}}</h1>
                    <p>訂單客製化系列研討會，挑戰多樣少量的生產衝擊</p>
                </div>
            </div>
        </div>

        <article class="section1">
            <div class="container">
                <h1>{{result.section1Title}}</h1>
                <p v-html="result.section1Desc" class="section1-desc"></p>
            </div>
            <ul class="section1-nav">
                <li><a href="#content1" v-on:click.prevent="clickHandlerOnMobile">2014年</a></li>
                <li><a href="#content2" v-on:click.prevent="clickHandlerOnMobile">2015年</a></li>
                <li><a href="#content3" v-on:click.prevent="clickHandlerOnMobile">2016年</a></li>
                <li><a href="#content4" v-on:click.prevent="clickHandlerOnMobile">2018年</a></li>
            </ul>
            <div ref="accordion" class="accordion">
                <h2 v-on:click="slideToggle" id="content1" class="content1">
                    <ul>
                        <li>2014年</li>
                        <li>建構機械業未來市場競爭力 客製化如果是您需要面對的挑戰，那現在您就不得不開始了</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/sessPic1.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002467/WB00246703.html" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>2014年機械業景氣大好，當業界還在享受大量生產的甜蜜果實，<br>鼎新就提醒機械業重視 趨勢…</h4>
                            <p>在「製造業回流美國」的議題催化下，已對台灣工具機、產業機械、自動化設備有明顯的訂單需求，這是一個很好的市場契機。但面對未來市場競爭，台灣機械業的機會很大，但競爭壓力更大。整個產業策略發展是以「高階客製化」最為急迫，除了在技術研發上的挑戰外，整合研發設計與生產製造之協同作業，更是機械產業在「訂單客製化」管理上的一大課題。</p>
                            <h5>活動議程</h5>
                            <h6>STEP 0：面對反覆遇到的問題，到底該怎麼做？</h6>
                            <ul>
                                <li>•業務接到訂單客製需求，要等多久？</li>
                                <li>•客戶抽、插、砍單，研發與生產如何因應？</li>
                                <li>•機台料多、設變多、非標準組裝多，那機台BOM該如何規劃？</li>
                                <li>•ECN後，機台用料重算、改工單、改採購、改委外、重發包…等，生管採購該怎麼變?</li>
                                <li>•機台生產工序易變且生產時間長，進度該怎麼來看?</li>
                            </ul>
                            <h6>STEP 1：訂單客製化的六大關鍵要素</h6>
                            <ul>
                                <li>•模組化開發設計</li>
                                <li>•提高E Bom到M Bom的速度</li>
                                <li>•機台工單如何因應100多次訂單ECN</li>
                                <li>•提高訂單客製化模組開發時程掌握度</li>
                                <li>•持續維繫機台Bom的完整性</li>
                            </ul>
                            <h6>STEP 2：化繁為簡的管理模式</h6>
                            <ul>
                                <li>•同時滿足選配與預測的機台Plan Bom架構</li>
                                <li>•改善BOM斷階之網狀製程模式</li>
                                <li>•機台模組領料規劃，快速比料、換料、退料模式</li>
                                <li>•ECN後採購、工單用料變更與退料模式</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" id="content2" class="content2">
                    <ul>
                        <li>2015年</li>
                        <li>機械業在「工業4.0」浪潮下，穩步實現大量客製模式</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/sessPic2.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002552/WB00255201.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>2015上半年，鼎新領先業界提早帶您進入工業4.0的世界…</h4>
                            <p>正因為機械業要面對的市場需求挑戰是而非，就現況的趨勢，在工具機業有些企業已經面臨80%以上訂單為客製生產；在產業機業也有些企業面臨單一訂單需要進行超過百次的設計變更才能滿足客戶的需求。而我們都知道機械業的BOM是生產的基本源頭，在經歷多次的設計變更後這些調整的訊息如何正確地從研發單位傳遞到其他單位？而相關單位接到設計變更的訊息後，又如何進行快速地因應？而這些能力如果可以提升，將有助於我們在這競爭逆境中取得先機。</p>
                            <h5>活動議程</h5>
                            <h6>一、從工業4.0來看機械業客製化的市場挑戰</h6>
                            <ul>
                                <li>．從產業趨勢「高階客製化」所衍生的議題。</li>
                                <li>．客製化對機械業內部管理所產生的問題。</li>
                            </ul>
                            <h6>二、訂單客製化的六大關鍵要素</h6>
                            <ul>
                                <li>．模組化開發設計</li>
                                <li>．提高E Bom到M Bom的速度</li>
                                <li>．Bom的要求是掌握度</li>
                                <li>．機台工單如何因應100多次訂單ECN</li>
                                <li>．提高訂單客製化模組開發時程掌握度</li>
                                <li>．持續維繫機台Bom的完整性</li>
                            </ul>
                            <h6>三、因應客製化議題之化繁為簡的管理模式</h6>
                            <ul>
                                <li>1.客製化BOM應有之姿</li>
                                <li>
                                    2.研發設計因應的管理模式
                                    <ul>
                                        <li>．共用模組規劃之路</li>
                                        <li>．圖、料、BOM連動整合(CAD2E BOM2M BOM)</li>
                                        <li>．機械業ECR/ECN這條路該怎麼走</li>
                                    </ul>
                                </li>
                                <li>
                                    3.生產製造因應管理模式
                                    <ul>
                                        <li>．同時滿足選配與預測的機台Plan Bom架構</li>
                                        <li>．改善BOM斷階之網狀製程模式</li>
                                        <li>．機台模組領料規劃</li>
                                        <li>．機台模組快速比料、換料、退料模式</li>
                                        <li>．ECN後採購、工單用料變更與退料模式</li>
                                    </ul>
                                </li>
                                <li>4.持續維護機械業BOM完整度之三大流程</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content2">
                    <ul>
                        <li>2015年</li>
                        <li>機械設備產品未來之路-您改變的是產品「賣相」，還是「賣價」？</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/sessPic3.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002593/WB00259301.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>2015年中，我們邀請東海大學 工業設計學系 郭炳宏 副教授來談<br>「從新產品研發設計看工業4.0提升企業價值鏈」</h4>
                            <p>機械產業面臨的市場挑戰越來越艱鉅，為了滿足顧客需求與快速縮短的商品生命週期，如何偕同「產品研發」與「生產製造」從競爭中勝出，勢必成為機械產業的新課業。</p>
                            <h6>郭教授要提醒機械業幾個重點：</h6>
                            <ul>
                                <li>•改變是創新的開始</li>
                                <li>•密切注意「工業4.0」與「物聯網」的發展</li>
                                <li>•全方位的創新思考才能將創新發揮到極新的效益</li>
                                <li>•企業主要真正了解「創新」的意義與價值</li>
                                <li>•產業環境的變革，是傳統產業的契機</li>
                            </ul>
                            <h5>講師經歷</h5>
                            <h6>東海大學 工業設計學系 郭炳宏 副教授</h6>
                            <p>東海大學工業設計學系副教授，日本千葉大學設計計畫博士。曾任雲林科技大學視覺傳達所副教授、中央標準局外部審查委員、遠東工業公司設計部。 專長產品設計管理與方法應用、產品策略與品牌規劃設計等，曾參與國科會計畫有K-16深耕4E研究計畫- 子計畫四綠能環境下具節能減碳之生活產品概念性設計、協同設計鏈之產品開發資源整合之研究、台灣產業創新協同價值鍊發展工程–以台中精密機械業為研究對象，並與多家企業有產學合作案（乃興企業、大銀微系統、仂邁、金利豐、利慶工業等） 對於傳統產業的產品設計開發有獨到見解與思維，如何從設計來提升產品價值，提升企業獲利的關鍵競爭力！</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content2">
                    <ul>
                        <li>2015年</li>
                        <li>機械業未來的製造情境：把"1"的客製做到最大生產彈性</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/sessPic4.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002617/WB00261701.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>回顧2015，機械業面臨險峻的一年，我們不得不面對現實的市況是…</h4>
                            <ul>
                                <li>•標準機種市場沒得做，客製機種市場困難做</li>
                                <li>•多樣少量，成本一樣</li>
                                <li>•原來是少量多樣，現在是每台都不一樣</li>
                                <li>•產品研發需在「有限的時間」滿足客戶近乎「無限的需求」</li>
                            </ul>
                            <p>客製化談了二年 我們規劃的議題逐步擴大到從「尋找高機會市場」開始，我們也談智慧估報價、成本估算、客製重用、圖料BOM整合、產銷計劃與採購發包如何能降低庫存並規避缺料、排程智能化，從估報價到研發生產排程，每一個議題都有配套解決方案，滿足機械業擴展事業版圖每一階段的需求。</p>
                            <h5>活動議程</h5>
                            <h6>一、 機械業客製化的市場趨勢</h6>
                            <ul>
                                <li>•工業4.0簇擁下的機械業市場動態</li>
                                <li>•機械業不得不面對的客製化挑戰</li>
                            </ul>
                            <h6>二、 機械業客製化生產彈性改變的關鍵</h6>
                            <ul>
                                <li>•客製化的思考點</li>
                                <li>•機械業客製化接單流程應有之姿</li>
                            </ul>
                            <h6>三、機械業因應客製化的關鍵流程</h6>
                            <ul>
                                <li>•【找客戶】標準機種市場沒得做，客製機種市場困難做</li>
                                <li>•【搶訂單】滿足客戶多樣化選擇需求，如何在成本與速度間取得平衡</li>
                                <li>•【立中樞】解決模組化與研發人力問題，從每一次的客製重用開始</li>
                                <li>•【重應變】將設計變更的挑戰轉化成研發能量的一次大躍進</li>
                                <li>•【順產能】機台產出大起大落，交期無法承諾</li>
                                <li>•【削庫存】串聯生產孤島，剷平存貨小山丘</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content2">
                    <ul>
                        <li>2015年</li>
                        <li>設計不需從零開始-展開接單後跨部門協同作業，達到Time to Market提升企業競爭力</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/sessPic5.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002629/WB00262901.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>在迎接2016前，我們邀請東毓油壓陳協理來分享…</h4>
                            <p>設計不需從零開始-展開接單後跨部門協同作業，達到Time to Market提升企業競爭力 協理曾說"頭對了，身體就對了"，指的是那一段環節您知道嗎? 90%的訂單客製化，內部如何因應? 產品在客戶高度客製化的情境之下，相似度越來越高，設計有時候也只是小修改而已卻須要耗掉2-3天的時間進行資料比對，才能開始設計工作。圖面與BOM表的正確性如果沒有辦法具體掌握好，又會導致生產時程延誤，公司成本浪費、料件報廢的問題隨之而來…來看看東毓油壓如何快速串聯CAD、料、BOM、ERP，讓資料即時又正確的密訣。 東毓油壓機械楊董事長語錄「惟有不斷地追求研發創新，才能領先同業」 同為機械業的您，下一步選擇什麼讓您傲視群雄呢?</p>
                            <h5>講師陣容</h5>
                            <div id="box_t">
                                <p class="leftimg"><img src="images/WB00247601_4/tc01.jpg" width="104" height="103"></p>
                                <div class="rightP">東毓油壓 陳淑婷 協理</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" id="content3" class="content3">
                    <ul>
                        <li>2016年</li>
                        <li>工業4.0實務案例研討會-擁抱智慧製造 勾勒最佳路徑</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/sessPic6.jpg" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="http://industry4.digiwin.com/WB00269301.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>2016年，行政院生產力4.0 計劃直指工業4.0 時代已經來臨</h4>
                            <p>工業4.0 除了應關注自動化生產設備，更擴及整合企業間價值網絡的智慧製造、消費和服務互聯網。 課程內容以工業4.0 的根源「研發」為首，由智慧工廠整體效率改善、生產效能精進，呈現智慧製造實踐路徑。 由鼎新電腦專家透析產業趨勢、精實管理策略，東毓油壓董事長楊楨彬分享轉型智慧工廠實務經驗，如何「改變腦袋，錢進口袋」！ 現場實機展示，呈現即時訂單動態、智慧排程到營運資訊掌控，帶您走入智慧工廠，一窺工業4.0 實務樣貌。</p>
                            <h5>講師陣容</h5>
                            <div id="box_t">
                                <p class="leftimg"><img src="images/WB00247601_4/tc02.jpg" width="104" height="103"></p>
                                <div class="rightP">東毓油壓 楊楨彬 董事長</div>
                                <p>「工業4.0是必須要走的路，企業邁向工業4.0，首要就是設定目標！只要改變腦袋，錢就會進口袋！」楊楨彬董事長分享，因市場競爭壓力及客製化需求提高，客戶要求的出貨時間越來越短等困境，讓他積極從事創新轉型，才能夠延續昔日利多時光，以及保有永續成長和獲利的動力。</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" id="content4" class="content4">
                    <ul>
                        <li>2018年</li>
                        <li>啟動智慧製造精實之路：虛實融通、降本增效</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/activePic4.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002848/WB00284801.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>啟動智慧製造精實之路虛實融通、降本增效</h4>
                            <p>物聯網、大數據、工業4.0、AI人工智慧席捲全球，如何在以速度取勝的智慧時代下，展現強大的影響力，提高競爭優勢，進而決勝出自身企業價值！企業目前所面臨的挑戰是如何實現智慧製造，並透過IOT等相關智慧產品或服務取得高績效的智慧模式。</p>
                            <p>邁向智慧製造轉型第一步，由東海大學劉仁傑教授探討精實智慧製造最前線，透過分享精實的概念，輔以機械大廠應用案例(如崴立機電、高聖精密機電、友嘉集團等)，探討如何以精實智慧製造打造新的企業競爭策略，其中包含：精實製造、精實產品開發、精實客戶化管理等策略要素。</p>
                            <p>而智慧製造轉型升級上希望帶給企業最大的利基是「虛實融通、降本增效」，從企業智慧智造轉型升級的內修一線(自動化、數字化、智慧化)開始，探討企業在轉型上的關鍵能力，以及最適的轉型路徑。</p>
                            <p>在工業4.0的影響下，智慧工廠已蔚然成為趨勢議題，在實作規劃上須考慮如何兼顧IOT與管理議題，本活動將透過以景喻實來描述機械設備業智慧工廠全場景，探討OT的運用、IT的支持以及管理議題的結合，協助企業展開未來資訊藍圖，邁向智慧製造精實之路。</p>
                            <h5>活動介紹</h5>
                            <h6>一、精實智慧製造最前線</h6>
                            <p>東海大學 精實系統團隊 負責人 劉仁傑教授</p>
                            <h6>二、以管理本質為核心的智能製造路徑</h6>
                            <p>鼎新電腦 智能製造中心 蘇景峯 專家</p>
                            <h6>三、機械設備業智慧工廠全場景</h6>
                            <p>鼎新電腦 智能製造中心 李育民 總監</p>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle" class="content4">
                    <ul>
                        <li>2018年</li>
                        <li>機械業精實創新之路：突破產品開發與市場推出的「超短週期」競爭</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/activePic5.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="http://tw.digiwin.biz/tw/dsc/activity/WB002868/WB00286801.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>突破機械業精實創新之路-產品開發與市場推出的「超短週期」競爭</h4>
                            <p>
                                為何需要「精實創新」?
                                <ol>
                                    <li>1.了解為什麼客戶願意掏錢買你的產品</li>
                                    <li>2.把設計概念有效地轉化成為可以量產的圖紙</li>
                                    <li>3.把產品開發流程中挖掘出來的知識保存下來，使之成為企業的智慧資產</li>
                                </ol>
                            </p>
                            <p>現代管理學之父彼得‧杜拉克曾說「不創新，就等死」(Innovate or die)，現今企業面臨各種趨勢科技和大環境快速轉變的挑戰下，「創新」勢在必行。「精實創新」是由密西根大學艾倫‧沃德博士帶領的團隊，參考豐田汽車的開發手法研發而成，應用精實創新來翻轉公司的創新流程與效率。然而，近年企業所關注的工業4.0和智能製造，為企業打開了一扇窗，政府推動產業創新、數位轉型升級，企業運用精實的管理手法，讓智能製造戰略真正逐步推進、實施落地，鼎新助力企業實現智能工廠，從管理診斷到構築智能製造方案的實施路徑，協助企業提升營運核心的各項競爭力！</p>
                            <p>因此，邁向智慧製造轉型第二步，由中衛發展中心羅吉吾技術總監探討企業運用「精實創新-精實產品與流程開發」，以快速且輕鬆地把滿足客戶需求的產品推向市場，輔以機械大廠應用案例，協助企業提升創新能量；再透過智能製造應用精實創新手法，來說明如何展開接單後跨部門協同作業，實現企業設計生產協同目標。</p>
                            <h5>活動介紹</h5>
                            <h6>一、實創新-精實產品與流程開發：更快速地、更輕鬆地把滿足客戶需求的產品推向市場</h6>
                            <p>中衛發展中心企業輔導部 羅吉吾 技術總監</p>
                            <h6>二、精實創新應用案例：以中部某機械大廠為例</h6>
                            <p>中衛發展中心企業輔導部 羅吉吾 技術總監</p>
                            <h6>三、應用精實創新手法，提升企業設計生產協同工作效率</h6>
                            <p>鼎新電腦 PLM事業部 黃資淳 經理</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content4">
                    <ul>
                        <li>2018年</li>
                        <li>隱形經驗數位轉型，擦亮品牌新樣貌-大井泵浦案例分享</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/activePic6.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002885/WB00288502.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>隱形經驗數位轉型 擦亮品牌新樣貌 大井泵浦案例分享</h4>
                            <p>過往五年的投資，奠定未來五年的優勢，陽光、空氣跟水是人類生活三大必需品，50餘年來可說是「依水而生」的大井泵浦，深耕水泵領導品牌，生產家用及工/商業用泵浦，以七成內銷，三成外銷的模式傲視全台。2011年，大井泵浦開始致力品牌行銷，「WALRUS」品牌成功建立品質優良，價格合理的品牌形象。</p>
                            <p>堅持MIT品質的大井泵浦，隨著市場及法令變動，產品成本不斷提高，利潤因此大幅壓縮，如何順暢產線、提升生產效率將更為重要。透過資訊化導入串聯「銷售」、「資材」、「生產」及「管理」四大關鍵程序，持續累積研發能量，確保資訊即時準確，全面提升生產效率，作為立足台灣，行銷全世界的台灣水泵品牌。</p>
                            <h5>活動介紹</h5>
                            <h6>一、邁向全世界，成就願景的關鍵每一步</h6>
                            <p>大井泵浦 黃錦雲 總經理</p>
                            <h6>二、看得見數據，讓每個溝通更有效率</h6>
                            <p>大井泵浦 沈建華 副總經理</p>
                            <h6>三、建構匹配品牌形象的智造工廠</h6>
                            <p>大井泵浦 羅啟宏 台北廠專案擔當、黃韋翔 高雄廠專案擔當</p>
                            <h6>四、打造數位營運平台，遇見未來</h6>
                            <p>鼎新電腦 智能製造中心 楊瑞德 專案顧問經理</p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle" class="content4">
                    <ul>
                        <li>2018年</li>
                        <li>從市場參賽者到規則制定者，重塑產業競爭邊界－東野精機案例分享</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00247601_4/activePic7.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002901/WB00290101.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>從市場參賽者到規則制定者，重塑產業競爭邊界－東野精機案例分享</h4>
                            <p><strong>注入職人精隨、科技樣貌，成就30%跳躍的成長</strong></p>
                            <p>成立超過二十年的東野精機，於「鋁擠型」產業中深耕技術與服務，逐漸累積業界知名度。面臨近年市場的激烈競爭，如何不落於紅海成為東野下一步策略佈局的重要關鍵，以優化產品與重整形象著手，東野精機展現蛻變決心，更結合從設計、加工、組裝到技術的「一條龍」服務機制，從鋁擠加工商轉向OEM、ODM生產的專案設備解決方案，再創公司營收新高！</p>
                            <p>東野精機擁有從加工至專案設備的各類訂單，如何有效生產並達成與客戶的承諾「如期、如質」成為重要課題。透過資訊化建立創新「減法」管理，運用數據串聯做到有效監控，並打造出與傳產廠房有明顯差異的精緻生產模式，由內而外讓客戶見證東野獨到的生產樣貌。東野精機有了高效運營支持，未來便能挑戰更高營收動能，持續締造產業佳話。</p>
                            <h5>活動介紹</h5>
                            <h6>一、專注細節、追求卓越，讓專家變贏家</h6>
                            <p>東野精機 宋博維 總經理</p>
                            <h6>二、從人的調控到系統掌控，管理化繁為簡</h6>
                            <p>東野精機 曾琡珺 副總經理</p>
                            <h6>三、從思維翻轉管理軸線，用工具創造營運價值</h6>
                            <p>鼎新電腦 楊瑞德 專案顧問經理</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'WB00247601_4',
    computed: {
        result() {
            return store.state.result.WB00247601_4;
        }
    },
    methods: {
        slideToggle(event) {
            let $target = event.target.nodeName === 'H2' ? $(event.target) : $(event.target).parents('h2');
            $target.toggleClass('active').next().slideToggle();
        },
        clickHandler(event) {
            let delay = $(event.target).data('delay');
            this.scrollHandler(event, delay);
        },
        clickHandlerOnMobile(event) {
            this.scrollHandler(event);
        },
        scrollHandler(event, delay = 0) {
            // 展開/收合
            $(event.target.hash).addClass('active').next().slideDown();

            // 滾動頁面
            let $target = $(event.target);
            let target = $target.attr('href') || $target.data('target');
            setTimeout(() => {
                let offset = $('.page-submenu').outerHeight();
                let targetPos = $(target).offset().top;
                let finalPos = offset ? targetPos - offset : targetPos;
                $('html, body').animate({ scrollTop: finalPos });
            }, delay);
        }
    },
    mounted() {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
}
</script>
