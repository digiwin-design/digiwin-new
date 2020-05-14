<template>
    <div class="merchandise">
        <div class="header">
            <div class="container">
                <h1 class="mainTitle">買賣業重視的管理維度
                    <br>您清楚您企業的管理重點嗎？
                </h1>
                <h2>
                    買賣業經營模式概分內外銷、品牌代理、買賣維修....等型態，管理重點也因銷售行為有所差異，從
                    <strong>銷售通路管理、庫存準確度、銷售預測、成本分析、維修保固、帳款帳齡</strong>各項指標，均是買賣業重視的管理維度，您清楚您企業的管理重點嗎？
                </h2>
            </div>
        </div>

        <article class="section1">
            <div class="container">
                <h1 class="sectionTitle">買賣業，經營困擾知多少？</h1>
                <p
                    class="sectionDesc"
                >商品從買進到賣出，生產到出貨，後續產生服務與維修的需求，原以為營收成長獲利入袋，一切看似順利之餘，竟也發生這麼多意想不到的經營困擾？</p>
                <Cards/>
            </div>
        </article>

        <article class="section2">
            <h1 class="sectionTitle">買賣業方案介紹</h1>
            <div id="accordion" class="section2-accordion">
                <h2 id="sales">{{accordion[0].title}}</h2>
                <div class="section2-content">
                    <div class="container">
                        <Title-list :context="accordion[0].list"/>
                    </div>
                    <My-swiper :slides="accordion[0].slides"></My-swiper>
                    <a href="#contact" class="moreBtn js-nav">了解更多</a>
                </div>
                <h2 id="buy">{{accordion[1].title}}</h2>
                <div class="section2-content">
                    <div class="container">
                        <p class="section2-desc">廠商管理、供應商評核、價格差異管理＞</p>
                        <Title-list :context="accordion[1].list"/>
                    </div>
                    <My-swiper :slides="accordion[1].slides"></My-swiper>
                    <a href="#contact" class="moreBtn js-nav">了解更多</a>
                </div>
                <h2 id="stock">{{accordion[2].title}}</h2>
                <div class="section2-content">
                    <div class="container">
                        <Title-list :context="accordion[2].list"/>
                    </div>
                    <My-swiper :slides="accordion[2].slides"></My-swiper>
                    <a href="#contact" class="moreBtn js-nav">了解更多</a>
                </div>
                <h2 id="finance">{{accordion[3].title}}</h2>
                <div class="section2-content">
                    <div class="container">
                        <List :context="accordion[3].list"/>
                    </div>
                    <My-swiper :slides="accordion[3].slides"></My-swiper>
                    <a href="#contact" class="moreBtn js-nav">了解更多</a>
                </div>
                <h2 id="maintain">{{accordion[4].title}}</h2>
                <div class="section2-content">
                    <div class="container">
                        <Images :src="accordion[4].imageSrc"/>
                    </div>
                    <My-swiper :slides="accordion[4].slides"></My-swiper>
                    <a href="#contact" class="moreBtn js-nav">了解更多</a>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
let $accordion, mySwiper;
let accordion = [
    {
        title: "銷售管理",
        list: [
            {
                title: "估/報價管理",
                content: "客戶報價管理"
            },
            {
                title: "訂單管理",
                content: "合約訂單、一般訂單、計價單位、多期收款、利潤預估、訂單選配、贈備品、訂單變更管理"
            },
            {
                title: "出貨通知",
                content: "出貨文件、VMI出貨"
            },
            {
                title: "報關文件",
                content: "Packing List、Invoice產生"
            },
            {
                title: "出貨管理",
                content: "出貨資訊匯出、批號管理、超限放行"
            }
        ],
        slides: [
            {
                image: "merchandise/section2-slide1.jpg",
                caption: "銷售循環-估報價資料"
            },
            {
                image: "merchandise/section2-slide2.jpg",
                caption: "銷售循環-訂單資料"
            },
            {
                image: "merchandise/section2-slide3.jpg",
                caption: "客戶需求Forcase管理"
            }
        ]
    },
    {
        title: "請採購管理",
        list: [
            {
                title: "詢/核價管理",
                content: "詢價管理、分量計價"
            },
            {
                title: "請購管理",
                content: "請購預算控管、部門費用管理、請購批量建議、原料/事務性請購"
            },
            {
                title: "採購管理",
                content: "一般採購、計價單位、變更管理"
            },
            {
                title: "收貨管理",
                content: "收貨/IQC/入庫/勾稽管理、分批/分量/分次收貨、發票管理"
            },
            {
                title: "退貨管理",
                content: "出貨資訊匯出、批號管理、超限放行"
            }
        ],
        slides: [
            {
                image: "merchandise/section2-slide4.jpg",
                caption: "廠商價格管理"
            },
            {
                image: "merchandise/section2-slide5.jpg",
                caption: "採購循環-進貨資料"
            },
            {
                image: "merchandise/section2-slide6.jpg",
                caption: "採購循環-掌握採購進度"
            }
        ]
    },
    {
        title: "庫存管理",
        list: [
            {
                title: "多廠別庫別管理",
                content: "多廠別、 多庫別、多儲位、雙單位、多單位換算"
            },
            {
                title: "多存貨策略",
                content: "Re-Order Point再訂購點、MRP、安全庫存、安全期間、接單採購"
            },
            {
                title: "盤點管理",
                content: "週期盤點、實地盤點、在製品盤點"
            },
            {
                title: "庫存異動管理",
                content: "異常庫存異動處理、報廢流程、倉儲間移轉調撥、同業間借料"
            },
            {
                title: "即時動態查詢",
                content: "即時現況、未來供需、歷史異動查詢"
            },
            {
                title: "其它",
                content: "出庫存呆滯管理、有效期限管理、存貨週轉率警示管理、序號紀錄"
            },
        ],
        slides: [
            {
                image: "merchandise/section2-slide7.jpg",
                caption: "庫存狀況查詢"
            },
            {
                image: "merchandise/section2-slide8.jpg",
                caption: "庫存明細表"
            },
            {
                image: "merchandise/section2-slide9.jpg",
                caption: "品號資料建立"
            }
        ]
    },
    {
        title: "財務管理",
        list: [
            "提供立沖帳目之管理，可減輕會計人工作業。",
            "可同時處理多家公司或多套會計帳務。",
            "落實預算與利潤中心管理，協助企業進行控管。",
            "可符合中小企業IFRS規範。",
            "完整財務相關報表。",
            "專案管理。",
            "票據管理。",
            "營業稅申報管理。",
        ],
        slides: [
            {
                image: "merchandise/section2-slide10.jpg",
                caption: "自動分錄系統"
            },
            {
                image: "merchandise/section2-slide11.jpg",
                caption: "立沖功能"
            },
            {
                image: "merchandise/section2-slide12.jpg",
                caption: "預算管理"
            }
        ]
    },
    {
        title: "維修管理",
        imageSrc: "merchandise/section2-illust",
        slides: [
            {
                image: "merchandise/section2-slide13.jpg",
                caption: "批號(序號)說明"
            },
            {
                image: "merchandise/section2-slide14.jpg",
                caption: "批號效期管理"
            },
            {
                image: "merchandise/section2-slide15.jpg",
                caption: "做好「追蹤追溯」管理"
            }
        ]
    },
];
module.exports = {
    components: {
        'Cards': httpVueLoader('components/Merchandise-cards/Index.vue'),
    },
    data() {
        return {
            mySwiper: null
        };
    },
    computed: {
        accordion() {
            return accordion;
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
        accordionInit(active) {
            $accordion = $('#accordion');
            $accordion.accordion({
                collapsible: true,
                heightStyle: 'content',
                active: active ? parseInt(this.$route.query.active, 10) : 0,
                activate(event, ui) {
                    if (ui.newHeader.length) {
                        let target = $(ui.newHeader).position().top;
                        let header = document.querySelector('header');
                        let submenu = document.querySelector('.page-submenu');
                        $('html, body').animate({ scrollTop: target - submenu.offsetHeight }, () => {
                            header.classList.remove('fixed-block');
                            submenu.style.top = 0;
                        });
                    }
                }
            });
        },
        accordionDestroy() {
            $accordion.accordion('destroy');
        },
        anchorHandler() {
            let anchor = this.$route.query.anchor;
            if (anchor) {
                setTimeout(() => {
                    let target = $(`#${anchor}`).position().top;
                    let submenu = document.querySelector('.page-submenu');
                    $('html, body').animate({ scrollTop: target - submenu.offsetHeight });
                }, 1000); // setTimeout for ios bug
            }
        },
    },
    mounted() {
        this.swiperInit();
        this.accordionInit(this.$route.query.active);
        this.anchorHandler();
    },
    beforeDestroy() {
        this.swiperDestroy();
        this.accordionDestroy();
    },
}
</script>