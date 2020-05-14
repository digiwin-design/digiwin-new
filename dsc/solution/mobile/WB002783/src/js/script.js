httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, '/tw/dsc/assets/industry-list-v2/industry.vue');
httpVueLoader.register(Vue, 'components/case/accordion.vue');
httpVueLoader.register(Vue, 'components/case.vue');
httpVueLoader.register(Vue, 'components/customized/customized-case.vue');
httpVueLoader.register(Vue, 'components/customized/customized-swiper.vue');
httpVueLoader.register(Vue, 'components/solution/solution-section.vue');
httpVueLoader.register(Vue, 'components/loading.vue');
Vue.use(VueAwesomeSwiper);

NProgress.configure({ showSpinner: false });

const store = new Vuex.Store({
    state: {
        result: null,
        loading: false,
    },
    mutations: {
        setData(state, payload) {
            state.result = payload;
        },
        updateLoadingState(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
            });
        },
    },
});

const router = new VueRouter({
    routes: [
        {
            path: '/solution/:tab?',
            component: httpVueLoader('views/solution.vue')
        },
        {
            path: '/order/:tab?',
            component: httpVueLoader('views/order.vue')
        },
        {
            path: '/factoryManage/:tab?',
            component: httpVueLoader('views/factoryManage.vue')
        },
        {
            path: '/factoryLogistics/:tab?',
            component: httpVueLoader('views/factoryLogistics.vue')
        },
        {
            path: '/customized/:tab?',
            component: httpVueLoader('views/customized.vue')
        },
        {
            path: '/channelArrange/:tab?',
            component: httpVueLoader('views/channelArrange.vue')
        },
        {
            path: '/case/:tab?',
            component: httpVueLoader('views/case.vue')
        },
        {
            path: '/:tab?',
            component: httpVueLoader('views/index.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
    if (!to.hash) return;

    // 當切換的頁面中有錨點時，待圖片載入完成後再捲動至該處
    store.commit('updateLoadingState', true);
    setTimeout(() => {
        let loaded = 0;
        let images = [];
        switch (to.hash) {
            case '#ekb':
            case '#replyWork':
            case '#esop':
            case '#availability':
            case '#machineIntegration':
            case '#productionSchedule':
            case '#productRecall':
            case '#outsourcing':
                images = [
                    'images/factoryManage/section1-illust.png',
                    'images/factoryManage/section2-illust.jpg',
                    'images/factoryManage/section3-illust.png',
                    'images/factoryManage/section4-illust.png',
                    'images/factoryManage/section5-illust.png',
                    'images/factoryManage/section5-no1.png',
                    'images/factoryManage/section5-no2.png',
                    'images/factoryManage/section5-no3.png',
                    'images/factoryManage/section6-illust.jpg',
                    'images/factoryManage/section7-illust.png',
                    'images/factoryManage/section8-illust.jpg',
                    'images/factoryManage/section9-illust1.jpg',
                    'images/factoryManage/section9-illust2.jpg',
                    'images/factoryManage/section10-illust1.png',
                    'images/factoryManage/section10-illust2.png',
                    'images/factoryManage/section11-illust.png',
                ];
                break;
            default:
                break;
        }
        images.forEach(img => {
            let image = document.createElement('IMG');
            image.onload = () => {
                loaded++;
                if (loaded === images.length) {
                    store.commit('updateLoadingState', false);
                    let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    let targetPos = document.querySelector(to.hash).offsetTop;
                    let finalPos = offset ? targetPos - offset : targetPos;
                    window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
                }
            };
            image.src = img;
        });
    }, 1000); // delay for ios
});
router.afterEach((to, from) => {
    let submenu = document.querySelector('.page-submenu');
    if (to.params.tab) {
        let tab = parseInt(to.params.tab, 10);
        $(submenu).addClass('active').find(`li:nth-child(${tab})`).addClass('active').siblings().removeClass('active');
    }
    else {
        $(submenu).removeClass('active').find('li').removeClass('active');
    }
    if (to.path !== '/seminar') {
        NProgress.done();
        $('.page-submenu-list > li').removeClass('is-open');
    }
});

new Vue({
    el: 'main',
    router,
    computed: {
        result() {
            return store.state.result;
        }
    },
    created() {
        store.dispatch('getData');
    },
});