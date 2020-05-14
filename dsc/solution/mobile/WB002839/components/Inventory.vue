<template>
    <div class="inventory">
        <div class="header">
            <div class="container">
                <h1 class="mainTitle">超過八成的中小企業<br>都有庫存不準的困擾</h1>
                <h2>
                    庫存不準帶來多少困擾?<br>
                    對公司而言，庫存管理永遠是個重要議題
                </h2>
            </div>
        </div>

        <article class="section1">
            <div class="container">
                <h1 class="sectionTitle">庫存不只是倉管的事<br>即時的庫存狀況為各單位帶來什麼好處?</h1>
                <Inventory-list :list="list1"></Inventory-list>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <h1 class="sectionTitle">鼎新Smart ERP 庫存管理特色介紹</h1>
                <Inventory-list :list="list2"></Inventory-list>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="slide in slides" :key="slide.imgSrc">
                            <h1>{{slide.title}}</h1>
                            <img :src="'images/' + slide.imgSrc">
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <a href="#contact" class="section3-btn js-nav">我要了解更多庫存管理的好方法</a>
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <h1 class="sectionTitle">鼎新懂我們這行在作什麼嗎?</h1>
                <a href="/tw/list.html" target="_blank">各行各業解決方案</a>
                <a href="/tw/dsc/solution/WB002839/manufacture.html" target="_blank">製造業方案</a>
                <a href="/tw/dsc/solution/WB002839/merchandise.html" target="_blank">買賣業方案</a>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    components: {
        'InventoryList': httpVueLoader('components/Inventory-list.vue'),
    },
    data() {
        return {
            mySwiper: null
        };
    },
    computed: {
        list1() {
            return [
                {
                    title: '庫存',
                    detail: '查詢現有庫存 與產線狀況，回應客戶交期超快的。'
                },
                {
                    title: '倉管',
                    detail: '掌握未來料件的未來異動量，就可即時備料 ，並提供存放位置，避免料件堆積。'
                },
                {
                    title: '採購',
                    detail: '現有庫存狀況 & 預計進貨時點，都在我的掌握之中，再也不怕缺料了!'
                },
                {
                    title: '生管',
                    detail: '即時瞭解訂單交期 & 料件進程，就可以作好生產排程了!'
                },
            ]
        },
        list2() {
            return [
                {
                    title: '多廠別庫別管理',
                    detail: '多廠別、多庫別、多儲位、雙單位、多單位換算'
                },
                {
                    title: '多存貨策略',
                    detail: 'Re-Order Point再訂購點、MRP、安全庫存、安全期間、接單採購'
                },
                {
                    title: '盤點管理',
                    detail: '週期盤點、實地盤點、在製品盤點'
                },
                {
                    title: '庫存異動管理',
                    detail: '異常庫存異動處理、報廢流程、倉儲間移動調撥、同業間借料'
                },
                {
                    title: '即時動態查詢',
                    detail: '即時現況、未來供需、歷史異動查詢'
                },
                {
                    title: '其他',
                    detail: '庫存呆滯管理、有效期限管理、存貨周轉率警示管理、序號紀錄'
                },
            ]
        },
        slides() {
            return [
                {
                    title: '庫存狀況查詢',
                    imgSrc: 'inventory/slide1.png'
                },
                {
                    title: '庫存明細表',
                    imgSrc: 'inventory/slide2.png'
                },
                {
                    title: '品號建立作業',
                    imgSrc: 'inventory/slide3.png'
                },
                {
                    title: '條碼應用',
                    imgSrc: 'inventory/slide4.png'
                },
            ];
        },
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

