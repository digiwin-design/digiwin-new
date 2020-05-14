<template>
    <div class="mobile">
        <div ref="accordion" class="accordion">
            <div class="accordion-title js-title" v-on:click="slideToggle">促銷活動</div>
            <div class="accordion-content">
                <tabs id="t1" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t1-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">總公司通知門市要作促銷...草莓蛋糕買一送一...手工餅乾加一元多一件...生乳捲第二件打七折...</h2>
                            <div>今天結帳又要自己賠錢了...每次作促銷，最怕的就是記錯折扣結錯帳...每件商品的促銷折扣都不一樣...常常算錯...<br>客人一直問多少錢?都要查過才能告訴他...有人因此不耐煩不買了...算錯錢也常常被客訴...</div>
                        </div>
                    </template>
                    <template slot="t1-0">
                        <hover-box custom-class="icon17" color="#f66e13">
                            <template slot="content">
                                <p class="hoverBox-title">門市人員</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>
                                        促銷活動也太多了！<br>
                                        每個檔期都不一樣，<br>
                                        要怎麼記得住？<br>
                                        售價要怎麼算才能又快又正確？
                                    </p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon18" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>
                                        這草莓塔不是第二件八折嗎？<br>
                                        你怎麼跟我收原價的錢？<br>
                                        你們作生意很不老實哦....
                                    </p>
                                    <p>手工餅乾二包就可以打五折，為什麼我結帳時不會主動跟我說可以買二件比較便宜?</p>
                                </div>
                            </template>
                        </hover-box>
                        <p class="slider-wish">
                            《我希望》<br>只要刷品號就會自動算出促銷價；<br>只要刷一個品號就會主動提醒可以搭配哪個品號並提醒要送贈品或可加價購買其他商品
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t1-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">經營門市專櫃其實您可以這樣管</h2>
                            <div>
                                <strong>結帳零錯誤、消費免糾紛</strong>
                                <ul>
                                    <li>算錯錢不但會引來客訴也會提高離職率(如果都要店員賠)，減少人工作業以降低人為錯誤造成的損失。</li>
                                    <li>進行貢獻度與毛利率的分析，匹配出高貢獻度與高毛利產品的促銷組合方案。</li>
                                    <li>善用促銷組合提高客單價、擴大銷售量。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t1-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_3/slide-illust1.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>
            
            <div class="accordion-title js-title" v-on:click="slideToggle">滿額活動</div>
            <div class="accordion-content">
                <tabs id="t2" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t2-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">週年慶又到了...今年是滿2000送200...促銷的商品不能列入滿額贈...新品與買一送一的也不能列入...</h2>
                            <div>有位常客買了一堆，因為沒幫客人算好滿額贈的金額...才差一點點就達到...但客戶生氣全部不買了...</div>
                        </div>
                    </template>
                    <template slot="t2-0">
                        <hover-box custom-class="icon19" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>請問還差多少可以達到滿額門檻??</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon20" color="#4bbdc3">
                            <template slot="content">
                                <p class="hoverBox-title">銷售人員</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>請稍等，還差28元即可～<br>等等..剛算錯了已經特價的商品不能算，還差535元</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon21" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>究竟是差多少？<br>又沒講清楚!!</p>
                                </div>
                            </template>
                        </hover-box>
                        <p class="slider-wish">
                            《我希望》<br>打單時可以自動判斷促銷期間優惠價，不用擔心價格打錯。<br>隨時掌握最新活動業績狀況，分析此檔促銷是否有效、帶給公司多少利潤。
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t2-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">經營門市專櫃其實您可以這樣管</h2>
                            <div>
                                <strong>人潮提昇有難度、提昇客單價勢在必行</strong>
                                <ul>
                                    <li>消費金額快達滿額門檻時可以主動提醒。</li>
                                    <li>透過滿額贈送回購券，提升回購率。</li>
                                    <li>藉由滿額活動帶來的效益分析，作為下一次活動策略擬定參考數據。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t2-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_3/slide-illust2.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>
            
            <div class="accordion-title js-title" v-on:click="slideToggle">會員專屬</div>
            <div class="accordion-content">
                <tabs id="t3" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t3-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">一位白金卡會員要用點數抵消費...但他買了新品還有促銷商品...剛好他生日月又點數加倍...買5000可以再換贈品...</h2>
                            <div>上想要舉辦會員活動促銷，會員商品組合價、紅利積點、會員來店禮、會員生日禮、點數兌換...，但這無法人工做。<br>自己都記不住規則了，如何叫客人再多累積一點...</div>
                        </div>
                    </template>
                    <template slot="t3-0">
                        <hover-box custom-class="icon22" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>請幫我查一下我還要累積多少消費才能升級成金卡會員？</p>
                                    <p>怎麼還是原價，<br>會員不是8折嗎？</p>
                                    <p>聽說生日可以打75折，怎麼沒有通知我？<br>我可是VIP耶！</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon23" color="#b76ff6">
                            <template slot="content">
                                <p class="hoverBox-title">店長</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>想要知道哪些活動對會員最有吸引力?</p>
                                    <p>想要知道哪些會員最有貢獻?目前沒辦法做到精準行銷。</p>
                                </div>
                            </template>
                        </hover-box>
                        <p class="slider-wish">
                            《我希望》<br>下單或出貨時，有工具可以告訴我這個客戶的信用額度還剩多少，主動提醒我該不該出貨。<br>信用額度可以管控好，避免倒帳風險。
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t3-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">經營門市專櫃其實您可以這樣管</h2>
                            <div>
                                <strong>VIP會員擁專屬禮、自然常來增營收</strong>
                                <ul>
                                    <li>您需要找到消費活絡的會員，提供專屬他們的尊寵活動。</li>
                                    <li>也要想想如何喚醒沉寂會員。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t3-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_3/slide-illust3.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>
            
            <div class="accordion-title js-title" v-on:click="slideToggle">預購活動</div>
            <div class="accordion-content">
                <tabs id="t4" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t4-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">門市要推預購的促銷活動了...預購原味牛軋糖就送布丁一個...預購滿5盒打9折...滿10盒打8折...滿15盒打8.5折</h2>
                            <div>公客戶又打來說要換焦糖口味的，而且再加5盒堅果口味與5盒鳳梨酥，可是之前訂金只收5盒的錢...<br>扣掉訂金與折扣後，這樣總共還要收多少錢?</div>
                        </div>
                    </template>
                    <template slot="t4-0">
                        <hover-box custom-class="icon24" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>我之前預購的鳳梨酥口味不喜歡，幫我換蔓越梅的，牛軋糖可以換雞蛋布丁禮盒嗎？<br>另外現在加購還有二件9折的優惠嗎？你用計算機算會不會算錯阿?</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon25" color="#f66e13">
                            <template slot="content">
                                <p class="hoverBox-title">店長</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>
                                        雞蛋布丁禮盒258元，380元加258元打9折是574元，<br>
                                        加購二盒原味鳳梨酥，280元加280元打9折504元，<br>
                                        總共1078元，扣掉上次已收的訂金100元，<br>
                                        還要收978元，這樣到底對不對啊？
                                    </p>
                                </div>
                            </template>
                        </hover-box>
                        <p class="slider-wish">
                            《我希望》<br>有工具可以直接告訴我有多少錢要收、剩多少錢沒收就好。
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t4-1-t">
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
                    <template slot="t4-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_3/slide-illust4.png" alt />
                        </div>
                        <a href="#contact" class="slider-more js-nav">了解更多</a>
                    </template>
                </tabs>
            </div>
            
            <div class="accordion-title js-title" v-on:click="slideToggle">門市要貨</div>
            <div class="accordion-content">
                <tabs id="t5" :nav="nav">
                    <!-- 常見困擾 -->
                    <template slot="t5-0-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">最近草莓千層賣的特別好...架上常常被拿光...明天要不要跟總店多叫一點?但又怕賣不完要報廢...</h2>
                            <div>幫王小姐調貨的千層怎麼還沒送來？客人等下就要過來拿了，她好幾次沒買到，已經不高興了...一直要我們多備點現貨...</div>
                        </div>
                    </template>
                    <template slot="t5-0">
                        <hover-box custom-class="icon26" color="#f25090">
                            <template slot="content">
                                <p class="hoverBox-title">客戶</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>請問還差多少可以達到滿額門檻??</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon27" color="#4bbdc3">
                            <template slot="content">
                                <p class="hoverBox-title">門市人員</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>請稍等，還差28元即可～<br>等等..剛算錯了已經特價的商品不能算，還差535元</p>
                                </div>
                            </template>
                        </hover-box>
                        <hover-box custom-class="icon28" color="#b76ff6">
                            <template slot="content">
                                <p class="hoverBox-title">店長</p>
                            </template>
                            <template slot="hover">
                                <div class="hoverBox-hoverText">
                                    <p>究竟是差多少？<br>又沒講清楚!!</p>
                                </div>
                            </template>
                        </hover-box>
                        <p class="slider-wish">
                            《我希望》<br>可以有工具告訴我現在庫存還剩多少，最好還可以建議我要補多少；<br>可以記錄調貨的狀況，告訴我在途的商品有哪些。
                        </p>
                    </template>

                    <!-- 解決方案 -->
                    <template slot="t5-1-t">
                        <div class="slider-desc">
                            <h2 class="slider-desc-title">經營門市專櫃其實您可以這樣管</h2>
                            <div>
                                <strong>要貨補貨靠數據、架上永遠不缺貨</strong>
                                <ul>
                                    <li>透過歷史銷售進行門市補貨、避免熱銷品缺貨、地雷商品積壓、報廢。</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <template slot="t5-1">
                        <div class="slider-illust">
                            <img src="images/WB00267501_3/slide-illust5.png" alt />
                        </div>
                        <a href="/tw/software/710.html" class="slider-more" target="_blank">POS系統介紹</a>
                    </template>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function () {
            return ['常見困擾', '解決方案'];
        }
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
        $(this.$refs.accordion).find('.js-title').eq(0).addClass('active');
    },
};
</script>
