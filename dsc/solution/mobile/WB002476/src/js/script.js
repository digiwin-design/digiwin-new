Vue.use(VueAwesomeSwiper);
httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, 'components/slider-banner-s.vue');
httpVueLoader.register(Vue, 'components/slider.vue');
httpVueLoader.register(Vue, 'components/collapse.vue');
httpVueLoader.register(Vue, 'components/loading.vue');

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
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                });
            });
        },
    },
});

const router = new VueRouter({
    routes: [
        {
            path: '/industry/:tab?',
            component: httpVueLoader('views/industry.vue')
        },
        {
            path: '/WB00247601_Industry01/:tab?',
            component: httpVueLoader('views/WB00247601_Industry01.vue')
        },
        {
            path: '/WB00247601_Industry02/:tab?',
            component: httpVueLoader('views/WB00247601_Industry02.vue')
        },
        {
            path: '/WB00247601_Industry03/:tab?',
            component: httpVueLoader('views/WB00247601_Industry03.vue')
        },
        {
            path: '/WB00247601_Industry04/:tab?',
            component: httpVueLoader('views/WB00247601_Industry04.vue')
        },
        {
            path: '/WB00247601_Industry05/:tab?',
            component: httpVueLoader('views/WB00247601_Industry05.vue')
        },
        {
            path: '/WB00247601_Industry06/:tab?',
            component: httpVueLoader('views/WB00247601_Industry06.vue')
        },
        {
            path: '/WB00247601_Industry07/:tab?',
            component: httpVueLoader('views/WB00247601_Industry07.vue')
        },
        {
            path: '/WB00247601_Industry08/:tab?',
            component: httpVueLoader('views/WB00247601_Industry08.vue')
        },
        {
            path: '/WB00247601_2/:tab?',
            component: httpVueLoader('views/WB00247601_2.vue')
        },
        {
            path: '/WB00247601_manufacture/:tab?',
            component: httpVueLoader('views/WB00247601_manufacture.vue')
        },
        {
            path: '/WB00247601_3/:tab?',
            component: httpVueLoader('views/WB00247601_3.vue')
        },
        {
            path: '/WB00247601_case/:tab?',
            component: httpVueLoader('views/WB00247601_case.vue')
        },
        {
            path: '/WB00247601_4/:tab?',
            component: httpVueLoader('views/WB00247601_4.vue')
        },
        {
            path: '/WB00247601_repair/:tab?',
            component: httpVueLoader('views/WB00247601_repair.vue')
        },
        {
            path: '/:tab?',
            component: httpVueLoader('views/index.vue')
        }
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
        let images = [
            'images/industry/section1-illust.png',
            'images/industry/section1-2-illust.png',
            'images/industry/section2-illust.png',
        ];
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
    }
});

const app = new Vue({
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