<template>
    <div class="desktop">
        <ul class="desktop-nav">
            <li><a href="#section1" class="js-nav icon7" data-text="經銷代理"></a></li>
            <li><a href="#section2" class="js-nav icon8" data-text="連鎖賣場"></a></li>
            <li><a href="#section3" class="js-nav icon9" data-text="門市專櫃"></a></li>
            <li><a href="#section4" class="js-nav icon10" data-text="網購生意"></a></li>
            <li><a href="#section5" class="js-nav icon11" data-text="觀光工廠"></a></li>
            <li><a href="/tw/dsc/solution/WB002972/index.html" class="icon15" data-text="新零售" target="_blank"></a></li>
        </ul>

        <section id="section1">
            <h1 class="sectionTitle">經銷代理</h1>
            <slider id="t1" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作經銷批發生意，管理重點有那些？通路管理、應收帳款、信用額度、業務巡補</h2>
                        <div>中壢與青埔的客戶銷售量跟規模都有差異….這價格要怎麼訂阿?大連假又到了，中壢的銷量一直很不錯，這次支援作促銷，要作買一送一還有不定期的小驚喜活動，但青埔那邊的客戶說他們也要一樣的折扣......</div>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="blue icon7">
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
                            <hover-box custom-class="brown icon1">
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
                </template >

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
                        <img src="images/WB00255301_channel/slide-illust1.png" alt="">
                    </div>
                    <a href="/tw/dsc/solution/WB002675/WB00267501_1.html" class="slider-more" target="_blank">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section2">
            <h1 class="sectionTitle">連鎖賣場</h1>
            <slider id="t2" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t2-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作連鎖賣場KA生意，管理重點有那些？允收‧效期、促銷管理、通路合約</h2>
                        <div>COSTCO說這批貨過了允收期，不收了.....家福樂也不要這批貨....每家量販店效期規範都不同，這批貨到底要出給誰阿....每天一直出貨都沒有注意到哪些快過期，報廢傷利潤，還得賠錢耶！</div>
                    </div>
                </template>
                <template slot="t2-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="salmon icon8">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        怎麼又出短效期商品給我，害我沒東西賣...下次不跟你們公司進貨了...
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="blue icon11">
                                <template slot="content">
                                    <p class="hoverBox-title">業務</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        倉庫人員怎麼常常出到效期不對的商品，老是被客戶退貨。我又要去跟客戶賠罪了...
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template >

                <!-- 解決方案 -->
                <template slot="t2-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作連鎖通路KA生意，其實您可以這樣管</h2>
                        <div>
                            <strong>善用批號管理、進而降低報廢成本</strong>
                            <ul>
                                <li>可按客戶商品允收期條件建立於系統中</li>
                                <li>出貨時由系統依照該客戶的商品允收期條件自動帶出出貨[批號]，倉庫人員僅需按系統建議的批號指示去倉庫撿貨即可。</li>
                                <li>若有短效期品，系統能夠提早警示及提醒，讓同仁能盡早將[即期品]在未過期前充分被利用，降低報廢成本。</li>
                                <li>避免出錯的批號導致被客戶退貨或罰款。</li>
                            </ul>
                        </div>
                    </div> 
                </template>
                <template slot="t2-1">
                    <div class="slider-illust">
                        <img src="images/WB00255301_channel/slide-illust2.png" alt="">
                    </div>
                    <a href="/tw/dsc/solution/WB002675/WB00267501_2.html" class="slider-more" target="_blank">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section3">
            <h1 class="sectionTitle">門市專櫃</h1>
            <slider id="t3" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t3-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">做門市專櫃生意，管理重點有那些？預購活動、滿額活動、會員專屬、促銷活動、門市要貨</h2>
                        <div>門市要推預購的促銷活動了...預購原味牛軋糖就送布丁一個... 預購滿5盒打9折......滿10盒打8折......滿15盒打8.5折，客戶又打來說要換焦糖口味的，而且再加5盒堅果口味與5盒鳳梨酥，可是之前訂金只收5盒的錢.....扣掉訂金與折扣後，這樣總共還要收多少錢?</div>
                    </div>
                </template>
                <template slot="t3-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="salmon icon8">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        我之前預購的鳳梨酥口味不喜歡，幫我換蔓越梅的，牛軋糖可以換雞蛋布丁禮盒嗎？<br>
                                        另外現在加購還有二件9折的優惠嗎？你用計算機算會不會算錯阿?
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="purple icon9">
                                <template slot="content">
                                    <p class="hoverBox-title">門市人員</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        雞蛋布丁禮盒258元，380元加258元打9折是574元，加購二盒原味鳳梨酥，280元加280元打9折504元，總共1078元，扣掉上次已收的訂金100元，還要收978元，這樣到底對不對啊？
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template >

                <!-- 解決方案 -->
                <template slot="t3-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">經營門市專櫃其實您可以這樣管</h2>
                        <div>
                            <strong>預購活動用心做、檔期營收穩達標</strong>
                            <ul>
                                <li>預購明細隨時掌握，訂金及沖銷歷程統一控管。</li>
                                <li>付款取貨確保顧客及公司權益。</li>
                            </ul>
                        </div>
                    </div> 
                </template>
                <template slot="t3-1">
                    <div class="slider-illust">
                        <img src="images/WB00255301_channel/slide-illust3.png" alt="">
                    </div>
                    <a href="/tw/dsc/solution/WB002675/WB00267501_3.html" class="slider-more" target="_blank">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section4">
            <h1 class="sectionTitle">網購生意</h1>
            <slider id="t4" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t4-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">作網購生意，管理重點有那些？接單、出貨、對帳、退換貨</h2>
                        <div>YA平台有267張單、PC平台有234張單、樂平台有189張單…. 哇！每天訂單這麼多，這季獎金可以領到手軟，但平台格式都不同打單打到眼睛花，就算加班也打不完吧？訂單從四面八方一直來！</div>
                    </div>
                </template>
                <template slot="t4-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="salmon icon8">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        我10/20訂了二盒鳳梨酥，現在都11/3怎麼還沒收到？
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="gold icon10">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        我明明是訂10盒魚酥，怎麼來10盒蝦酥？
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="sea icon7">
                                <template slot="content">
                                    <p class="hoverBox-title">客戶</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">
                                        昨天收到10罐蛤蠣醬，今天又收到10罐蛤蠣醬，是買一送一促銷活動嗎？
                                    </div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template >

                <!-- 解決方案 -->
                <template slot="t4-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">網購生意其實您可以這樣管</h2>
                        <div class="slider-listCols">
                            <ul>
                                <li>接單零誤差、出貨搶時效</li>
                                <li>自動產生對應的物流貨運</li>
                            </ul>
                            <ul>
                                <li>平台訂單自動轉入、確認即可</li>
                                <li>降低平台扣款及缺貨罰款</li>
                            </ul>
                            <ul>
                                <li>隨時掌握準確的商品庫存 </li>
                            </ul>
                        </div>
                    </div> 
                </template>
                <template slot="t4-1">
                    <div class="slider-illust">
                        <img src="images/WB00255301_channel/slide-illust4.png" alt="">
                    </div>
                    <a href="/tw/dsc/solution/WB002595/WB00259501.html" class="slider-more" target="_blank">了解更多</a>
                </template>
            </slider>
        </section>

        <section id="section5">
            <h1 class="sectionTitle">觀光工廠</h1>
            <slider id="t5" :nav="nav">
                <!-- 常見困擾 -->
                <template slot="t5-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">經營觀光工廠，管理重點有那些？接團前、接團中、接團後</h2>
                        <div>控團沒做好影響有多大？哪一團什麼時候進來，不容易掌握，花時間做聯繫，需要做臨時應變。團控沒控好，引起團和團碰撞，造成館內壅擠，客人參觀意願降低。</div>
                    </div>
                </template>
                <template slot="t5-0">
                    <hover-box custom-class="green icon13" height="250">
                        <template slot="content">
                            <p class="hoverBox-title"></p>
                        </template>
                        <template slot="hover">
                            <div class="hoverBox-hoverText">
                                <img src="images/WB00255301_channel/slide-illust5.png" alt="">
                            </div>
                        </template>
                    </hover-box>
                </template >

                <!-- 解決方案 -->
                <template slot="t5-1-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">觀光工廠其實您可以這樣管</h2>
                        <div>
                            <strong>資源有限，事先安排不忙亂！</strong>
                            <ul>
                                <li>團務資料預先建立，預先安排接待人力與有限資源。</li>
                                <li>掌握準確商品庫存，即時補貨，架上不缺貨。</li>
                            </ul>
                        </div>
                    </div> 
                </template>
                <template slot="t5-1">
                    <div class="slider-illust">
                        <img src="images/WB00255301_channel/slide-illust6.png" alt="">
                    </div>
                    <a href="/tw/dsc/solution/WB002675/WB00267501_4.html" class="slider-more" target="_blank">了解更多</a>
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