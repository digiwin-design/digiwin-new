httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, '/tw/dsc/assets/industry-list-v2/industry.vue');
Vue.use(VueAwesomeSwiper);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                });
            });
        },
    }
});

let app = new Vue({
    el: 'main',
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data: {
        swiperOptionA: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        result() {
            return store.state.result;
        },
        swiperA() {
            return this.$refs.awesomeSwiperA.swiper;
        },
        slides() {
            return [
                {
                    title: '一指掌握關鍵資訊，管理更SMART',
                    content: '當現代人看著手機的時間超越電腦螢幕，行動辦公就註定成為未來趨勢，日理萬機的老闆若透過行動簽核，更可即時處理決策，跟上瞬息萬變的市場變動。對企業主來說，如果能在手機上掌握公司銷售資訊，加速業務開發流程，就成為企業運營生產力躍昇的重要關鍵！',
                    url: 'https://www.digiwin.com/tw/dsc/activity/MFT/WB002997/WB00299701.html'
                },
                {
                    title: '因應少量多樣生產挑戰 打造產銷透明平台，提高企業競爭力',
                    content: '「數位化轉型」是台灣中小企業重要的課題！鼎新電腦能建立完善企業SOP，分析大量即時的現場生產資訊，讓企業能夠快速掌握「物料」和「產能」供給狀況，快速反應並能促使每張訂單準時達交！有了良好的基底，才能助力中小企業達到提質增效的核心競爭力！',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002943/WB00294301.html'
                },
                {
                    title: '掌握最適庫存管理，抓住營收翻倍成長秘訣',
                    content: '「速度」是中小企業致勝關鍵，「庫存」更是掌握營收的重要關鍵！庫存等同公司資金，有問題的庫存管理將造成公司資金無法有效運用，庫內原料積存、呆滯，進而衍生大量管理及庫存成本，將直接造成公司損失。因此，良好庫存管理將打通企業任督二脈，掌握企業營運之鑰。',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002932/WB00293201.html'
                },
                {
                    title: '運用資訊系統，提升企業財務管理能力',
                    content: '中小企業是台灣經濟前進的動力，占全台企業比例超過九成，而多數中小企業主如何在營運過程中建立長久發展的基礎？要從競爭激烈的中小企業戰場中脫穎而出，內部的營運管理是重要關鍵。從起步、經營、到擴張，做好財務管理的基礎才能創造長久營運。',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002927/WB00292701.html'
                },
                {
                    title: '嗶！自動搞定採購進貨、訂單銷貨、庫存異動與盤點',
                    content: '中小企業是台灣經濟發展的主力，而「速度」也將成為致勝關鍵。利用條碼的精準辨識和手持式智慧裝置的移動特性，簡化作業流程、新進人員可以達成跟熟手一樣的作業水平，讓物料精準供應、庫存即時正確、出貨準確快速，並搭配警訊報表通知，打好營收翻倍的基礎。',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002980/WB00298001.html'
                },
            ];
        }
    },
    methods: {
        mediaSensor() {
            let mm = window.matchMedia('(min-width: 769px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
        },
        scrollTo(target) {
            let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
            let targetPos = document.querySelector(target).offsetTop;
            let finalPos = offset ? targetPos - offset : targetPos;
            window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
        }
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});