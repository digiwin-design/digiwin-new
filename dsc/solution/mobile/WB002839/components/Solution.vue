<template>
    <div class="solution">
        <div class="header">
            <div class="container">
                <h1 class="mainTitle">鼎新SmartERP符合中小企業快速彈性
                    <br>且多樣化的經營模式
                </h1>
                <h2>能真正滿足其對資訊系統在不同管理特性需求的全方位解決方案。而它更符合管理「八大循環」的作業流程，針對「內稽內控」在中小企業內部各環節的流程規定，更展現出Smart的精湛特色，開發周延彈性的管控與稽核功能。其可在事前主動要求流程與確保品質，並提供完整的管控稽核報表，以利日後做好內部管控。</h2>
            </div>
        </div>

        <article class="section1">
            <div class="container">
                <h1 class="sectionTitle">Smart ERP架構圖</h1>
                <p class="sectionDesc">SmartERP擁有完整的解決方案與彈性運用方式，採用多層式主從分散處理架構，可提昇運算效率，降低維護成本。</p>
                <img src="images/solution/section1-illust.png">
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <h1 class="sectionTitle">Smart ERP特色介紹</h1>
                <My-swiper :slides="slides.section2"></My-swiper>
            </div>
        </article>

        <article class="section3">
            <h1 class="sectionTitle">條碼方案介紹</h1>
            <h2>M化=Mobilization=行動化</h2>
            <img src="images/solution/section3-illust.png" alt>
            <My-swiper :slides="slides.section3[0]"></My-swiper>
            <section>
                <h1>
                    <span>條碼應用介紹</span>
                </h1>
                <My-swiper :slides="slides.section3[1]"></My-swiper>

                <My-swiper :slides="slides.section3[2]" :pagination="true"></My-swiper>
                <p class="slider-figcaption">{{slides.section3[2][0].caption}}</p>
                
                <My-swiper :slides="slides.section3[3]" :pagination="true"></My-swiper>
                <p class="slider-figcaption">{{slides.section3[3][0].caption}}</p>
            </section>
            <p class="section3-add container">還有還有....固資盤點、庫存異動、製令單領料、超收超交管理、批號管理、序號管理領料單領料、銷貨單銷貨、託外進貨、採購進貨……</p>
            <a href="#contact" class="moreBtn js-nav">了解更多</a>
        </article>

        <article class="section4">
            <div class="container">
                <section>
                    <h1 class="sectionTitle">製造業方案介紹</h1>
                    <ul class="section4-introduces">
                        <li v-for="(introduce, idx) in introduces[0]" :key="introduce.url">
                            <router-link :to="`/manufacture/2?anchor=${introduce.query}&active=${idx}`">
                                <figure>
                                    <img :src="'images/solution/section4-icon1-' + (idx + 1) +'.png'" alt="">
                                    <figcaption>{{introduce.text}}</figcaption>
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1 class="sectionTitle">買賣業方案介紹</h1>
                    <ul class="section4-introduces">
                        <li v-for="(introduce, idx) in introduces[1]" :key="introduce.url">
                            <router-link :to="`/merchandise/3?anchor=${introduce.query}&active=${idx}`">
                                <figure>
                                    <img :src="'images/solution/section4-icon2-' + (idx + 1) +'.png'" alt="">
                                    <figcaption>{{introduce.text}}</figcaption>
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </section>
            </div>
        </article>
    </div>
</template>

<script>
let slides = {
    section2: [
        {
            image: "solution/section2-slide1.png",
            caption: "資料延續與串接，減少重工作業"
        },
        {
            image: "solution/section2-slide2.png",
            caption: "落實審查機制、內稽內控，流程標準化"
        },
        {
            image: "solution/section2-slide3.jpg",
            caption: "多公司別帳務處理"
        },
        {
            image: "solution/section2-slide4.jpg",
            caption: "嚴謹的權限管理"
        },
        {
            image: "solution/section2-slide5.jpg",
            caption: "欄位彈性調整"
        },
        {
            image: "solution/section2-slide6.jpg",
            caption: "表單憑證自行彈性調整"
        },
        {
            image: "solution/section2-slide7.jpg",
            caption: "報表格式調性&轉Excel"
        },
        {
            image: "solution/section2-slide8.jpg",
            caption: "多維度的查詢"
        },
        {
            image: "solution/section2-slide9.jpg",
            caption: "客戶接單統計表"
        },
        {
            image: "solution/section2-slide10.jpg",
            caption: "報表應用功能"
        }
    ],
    section3: [
        [
            {
                image: "solution/section3-slide1.png",
                caption: "條碼系統特色介紹"
            },
            {
                image: "solution/section3-slide2.jpg",
                caption: "導入條碼格式範例"
            }
        ],
        [
            {
                image: "solution/section3-slide3.jpg",
                caption: "儲位管理"
            },
            {
                image: "solution/section3-slide4.jpg",
                caption: "儲位管理"
            }
        ],
        [
            {
                image: "solution/section3-slide5.jpg",
                caption: "庫存盤點"
            },
            {
                image: "solution/section3-slide6.jpg",
                caption: "庫存盤點"
            },
            {
                image: "solution/section3-slide7.jpg",
                caption: "庫存盤點"
            }
        ],
        [
            {
                image: "solution/section3-slide8.jpg",
                caption: "生產入庫"
            },
            {
                image: "solution/section3-slide9.jpg",
                caption: "生產入庫"
            },
            {
                image: "solution/section3-slide10.jpg",
                caption: "生產入庫"
            }
        ],
    ]
};
let introduces = [
    [
        {
            query: 'finance',
            text: '財務管理'
        },
        {
            query: 'stock',
            text: '庫存管理'
        },
        {
            query: 'buy',
            text: '請採購管理'
        },
        {
            query: 'sales',
            text: '銷售管理'
        },
        {
            query: 'material',
            text: '物料需求計算'
        },
        {
            query: 'produce',
            text: '生產管理'
        },
        {
            query: 'manufacture',
            text: '製造現場管理'
        }
    ],
    [
        {
            query: 'sales',
            text: '銷售管理'
        },
        {
            query: 'buy',
            text: '請採購管理'
        },
        {
            query: 'stock',
            text: '庫存管理'
        },
        {
            query: 'finance',
            text: '財務管理'
        },
        {
            query: 'maintain',
            text: '維修管理'
        }
    ]
];
module.exports = {
    data() {
        return {
            mySwiper: null
        };
    },
    computed: {
        slides() {
            return slides;
        },
        introduces() {
            return introduces;
        }
    },
    methods: {
        swiperInit() {
            new Swiper('.swiper-container', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    disableOnInteraction: false,
                    delay: 5000
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },
            });
            this.mySwiper = document.querySelector('.swiper-container').swiper;
        },
        swiperDestroy() {
            this.mySwiper.destroy();
        },
    },
    mounted() {
        this.swiperInit();
    },
    beforeDestroy() {
        this.swiperDestroy();
    },
}
</script>
