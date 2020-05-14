<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="header-text">
                    <h1>{{content.title}}</h1>
                    <p>{{content.desc}}</p>
                </div>
            </div>
        </div>
        <article class="section1">
            <div class="container">
                <h1>{{content.section1Title}}</h1>
                <p v-html="content.section1Desc" class="section1-desc"></p>
            </div>
            <div ref="accordion" id="accordion" class="accordion">
                <h2 v-on:click="slideToggle">
                    <ul>
                        <li>產業起飛轉型系列</li>
                        <li>跨入高值化產業，穩健邁出轉型第一步跨過醫材法規新挑戰 擁抱全球無限商機</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00278501_seminar/accordion-illust1.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002749/WB00274904.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>跨入高值化產業，穩健邁出轉型第一步跨過醫材法規</h4>
                            <p>隨著智慧科技快速發展，各種結合電子產品、紡織產品甚至是最新科技的VR技術的醫療器材產品，不斷推陳出新，不論是現有的醫療器材廠商亦或者是跨足醫療器材體系的廠商，無不卯足全力以期能搶佔先機。</p>
                            <h5>講師陣容與議程</h5>
                            <h6>一、以實際案例深入了解ISO13485 : 2016品質標準與舊版之差異</h6>
                            <p class="rightPart1_left">講師 : BSI企業服務部 莊佳憲 副理</p>
                            <h6>二、運用資訊工具輕鬆面對ISO13485 : 2016之衝擊</h6>
                            <p class="rightPart1_left">講師:原創網路服務 鐘馨原 總經理</p>
                            <h6>三、新版標準之電影化確效要求與做法</h6>
                            <p class="rightPart1_left">講師:鼎新電腦 樊耀華 資深顧問</p>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle">
                    <ul>
                        <li>產業起飛轉型系列</li>
                        <li>2015 醫材產業 迎戰國際市場新趨勢</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00278501_seminar/accordion-illust2.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002586/WB00258604.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>與國際接軌 單一辨識系統UDI 之規範與要點</h4>
                            <p>在全球經濟的趨勢下，一致性的編碼進行追溯儼然已為重要的議題，食品藥物管理署(TFDA)於2013年起即著手進行國內UDI規範與國際協和之研究；2014年起聚焦於導入UDI規範於醫材產業，並提出國內UDI管理平台的建構藍圖。由此可見UDI規範所涵蓋的範圍及規模，正逐步影響全球市場發展。</p>
                            <h5>課程重點</h5>
                            <h6>一、UDI與藥品國際法規最新動態</h6>
                            <p class="rightPart1_left">
                                ‧UDI國際法規趨勢<br>
                                ‧國際UDI標識與系統要求(FDA UDI規範、IMDRF UDI指引說明及其他主要競爭國家UDI規劃)<br>
                                ‧藥品標識國際法規動態
                            </p>
                            <h6>二、導入UDI及藥品標識相關技術與注意事項</h6>
                            <p class="rightPart1_left">
                                ‧國內UDI與藥品規範草案說明<br>
                                ‧導入UDI及藥品標識之相關技術與成本<br>
                                ‧UDI識別碼與藥品條碼說明
                            </p>
                            <h6>三、導入UDI強化企業競爭力</h6>
                            <p class="rightPart1_left">
                                ‧條碼設備與ERP之有效整合<br>
                                ‧產品全面追溯管理，提升產品品質
                            </p>
                        </div>
                    </div>
                </div>
                
                <h2 v-on:click="slideToggle">
                    <ul>
                        <li>產業起飛轉型系列</li>
                        <li>2016轉換倒數一年-品質系統深化流程，轉換驗證密技公開</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00278501_seminar/accordion-illust3.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002843/WB00284301.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>2016轉換倒數一年-品質系統深化流程，轉換驗證密技公開</h4>
                            <p>2016年醫療器材法規ISO13485發布了新版，至今轉換期已悄悄僅剩不到一年的時間，全球醫療器材廠商也在積極準備轉換中，新版內容中針對了整個品質系統中以風險管理為基礎，從設計、開發、生產、儲存、銷售、安裝、服務、最終處置與銷毀等程序中，規範了更為細緻化的處理與管控流程，並於設計管制提出更清楚的要求及強化供應鏈的管制，此管制要求已從醫療器材業者本身擴及客戶端及供應商端。</p>
                            <h5>課程重點</h5>
                            <h6>一、ISO 13485:2016 新版實務經驗分享</h6>
                            <p class="rightPart1_left">●講師：財團法人金屬工業研究發展中心</p>
                            <h6>二、運用資訊工具建立ISO13485:2016之管理平台</h6>
                            <p class="rightPart1_left">●講師：鼎新電腦 行業經營中心 欒耀華 資深顧問</p>
                            <h6>三、電腦化確效之要求與做法</h6>
                            <p class="rightPart1_left">●講師：鼎新電腦 行業經營中心 欒耀華 資深顧問</p>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle">
                    <ul>
                        <li>產業起飛轉型系列</li>
                        <li>洞悉數據思變，驅動轉型佈局 春雨生醫營收翻倍成長</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00278501_seminar/accordion-illust4.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002807/WB00280702.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>洞悉數據思變，驅動轉型佈局 春雨生醫營收翻倍成長</h4>
                            <p>營收成長四大決勝關鍵 增利潤 檢討生產浪費，降低成本，以提高營運利潤 推高值 掌握關鍵製程，提升技術，以創造產品加值 控關鍵 監控供需現況，持續追蹤，以突顯達交效益 強管理 釐清問題方向，掌握根源，以持續改善進步</p>
                            <h5>課程重點</h5>
                            <h6>一、成長關鍵：策略凝聚共識，持續改善帶來經營成長</h6>
                            <h6>二、數據決勝：打造數位腦，用資訊獲得營運最佳效益</h6>
                            <h6>三、資訊支持：想法如何落實做法，思維立即轉換行動</h6>
                        </div>
                    </div>
                </div>

                <h2 v-on:click="slideToggle">
                    <ul>
                        <li>產業起飛轉型系列</li>
                        <li>峻法時代來臨，撼動醫材供應鏈生態(建立ISO134852016及GMP採購管制之應變力</li>
                    </ul>
                    <span>
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img src="images/WB00278501_seminar/accordion-illust5.png" alt>
                            </div>
                            <div class="accordion-btns">
                                <a href="/tw/dsc/activity/WB002787/WB00278701.htm" target="_blank">了解更多</a>
                                <a href="#contact" class="js-nav">索取資料</a>
                            </div>
                        </div>
                        <div class="accordion-col changeDIV rightPart1">
                            <h4>峻法時代來臨，撼動醫材供應鏈生態(建立ISO134852016及GMP採購管制之應變力</h4>
                            <p>是補考還是重考？考前猜題大全，稽核單位怎麼想？<br>根據研究機構BMI統計資料顯示，2015~2018年醫療器材產業之複合年成長率約5.7%。醫療器材製造廠、經銷代理商甚至於其他塑膠產業、金屬產業、設備產業及電子產業..等為了提升產品的高值化，紛紛加入了醫療器材供應的行列。2016年發布的新版醫療器材法規ISO13485，內容中針對了整個品質系統中以風險管理為基礎，從設計、開發、生產、儲存、銷售、安裝、服務、最終處置與銷毀等程序中，規範了更為細緻化的處理與管控流程。其中，尤以供應鏈管理涵蓋了眾多程序中，協同設計、零件開模、供應商資格審核、製程外包、產品品質管控到後續不良品的追蹤與回收，在在考驗了醫療器材廠商的供應商管理能力及應變力。</p>
                            <h5>課程重點</h5>
                            <h6>一、符合ISO 13485:2016新版驗證下，探討醫療器材業對採購管制之作法</h6>
                            <p class="rightPart1_left">●講師：塑膠中心 品質環境安全部 劉守宣 顧問師</p>
                            <h6>二、運用資訊工具建立ISO13485:2016之供應鏈管理平台</h6>
                            <p class="rightPart1_left">●鼎新電腦 行業經營中心 欒耀華 資深顧問</p>
                            <h6>三、電腦化確效之具體要求與作法</h6>
                            <p class="rightPart1_left">●鼎新電腦 行業經營中心 欒耀華 資深顧問</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    props: ['content', 'isMobile'],
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
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>