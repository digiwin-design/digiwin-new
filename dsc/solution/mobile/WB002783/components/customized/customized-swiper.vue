<template>
    <swiper ref="awesomeSwiperA" :options="swiperOptionA">
        <swiper-slide>
            <h2>1. 運用<strong>&lt;品號管理&gt;</strong>降低交易複雜</h2>
            <h3>強化品號管理制度</h3>
            <dl>
                <dt>方案</dt>
                <dd>
                    <ul>
                        <li>梳理少量多樣訂單，所產生的品號複雜度。</li>
                    </ul>
                </dd>
                <dt>步驟</dt>
                <dd>
                    <ul>
                        <li>建立標準的編碼原則規範，合理規劃物料分類，實現自動編碼的標準化。</li>
                        <li>利用品號特徵碼及組合管理因應</li>
                    </ul>
                </dd>
                <dt>改變</dt>
                <dd>
                    <ul>
                        <li>不再因為客製化產品，造成編列品號的繁瑣度</li>
                    </ul>
                </dd>
                <dt>影響</dt>
                <dd>
                    <ul>
                        <li>結構清楚，維護便利，減少出錯。</li>
                        <li>簡化大量品號的建置</li>
                    </ul>
                </dd>
            </dl>
            <img src="images/customized/section4-illust1.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <h2>2. 善用<strong>&lt;模組化設計&gt;</strong>提升產品配置彈性</h2>
            <h3>彈性化的模組規劃設計</h3>
            <dl>
                <dt>方案</dt>
                <dd>
                    <ul>
                        <li>少量多樣的訂單需求，利用模組化配置彈性，即時的回應。</li>
                    </ul>
                </dd>
                <dt>步驟</dt>
                <dd>
                    <ul>
                        <li>建立標準化設計小組，設置新產品專案管理的標準化準則</li>
                        <li>因應ATO (Assemble to Order) CTO (Configure to Order) 的接單模式，實現客戶需求BOM自動產生。</li>
                    </ul>
                </dd>
                <dt>改變</dt>
                <dd>
                    <ul>
                        <li>客製化BOM設計模式和步驟更為規範</li>
                    </ul>
                </dd>
                <dt>影響</dt>
                <dd>
                    <ul>
                        <li>釋放工程人員瓶頸，快速回應客戶，精準傳遞配置資訊。</li>
                        <li>加速BOM設計與製造的轉換時間</li>
                    </ul>
                </dd>
            </dl>
            <img src="images/customized/section4-illust2.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <h2>3. 強化即時製程掌控與進度管理</h2>
            <h2>4. 建置快速反應的計劃與排程能力</h2>
            <h2>5. 調整及修正採購策略及備貨模式</h2>
            <h2>6. 審視及建構合宜的存貨政策</h2>
            <h2>7. 重新思考製造現場的績效追求</h2>
            <h2>8. 精細化的成本歸屬及產品利潤管理</h2>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
module.exports = {
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        }
    },
}
</script>