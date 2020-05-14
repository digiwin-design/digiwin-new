// Vue.use(VueAwesomeSwiper);
httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/slider-banner-s.vue');
httpVueLoader.register(Vue, 'components/loading.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, 'components/pain.vue');
httpVueLoader.register(Vue, 'components/case-card.vue');

NProgress.configure({ showSpinner: false });

const store = new Vuex.Store({
    state: {
        result: null,
        isReady: false,
        loading: false,
    },
    mutations: {
        setData(state, payload) {
            state.result = payload;
        },
        setReady(state, payload) {
            state.isReady = payload;
        },
        setLoading(state, payload) {
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
            path: '/',
            component: httpVueLoader('views/index.vue')
        },
        {
            path: '/business',
            component: httpVueLoader('views/business.vue')
        },
        {
            path: '/multichannel',
            component: httpVueLoader('views/multichannel.vue')
        },
        {
            path: '/case',
            component: httpVueLoader('views/case.vue')
        },
        {
            path: '*',
            redirect: '/'
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
        NProgress.start();
    }
    next();
});
router.afterEach((to, from) => {
    if (to.path !== from.path) {
        store.commit('setReady', false);
    }

    let submenu = document.querySelector('.page-submenu');
    if (to.query.tab) {
        let tab = parseInt(to.query.tab, 10);
        $(submenu).addClass('active').find(`li:nth-child(${tab})`).addClass('active').siblings().removeClass('active');
    }
    else {
        $(submenu).removeClass('active').find('li').removeClass('active');
    }

    if (!to.hash) return;

    store.commit('setLoading', true);
    
    let toHash = () => {
        let timer = setTimeout(() => {
            if (app.isReady) {
                clearTimeout(timer);
                setTimeout(() => {
                    let offset = location.hostname === 'www.digiwin.com' && document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    let targetPos = document.querySelector(to.hash).getBoundingClientRect().top + window.pageYOffset;
                    let top = offset ? targetPos - offset : targetPos;
                    window.scroll({ top, left: 0, behavior: 'smooth' });
                    
                    store.commit('setLoading', false);
                    NProgress.done();
                }, 1000);
            }
            else {
                toHash();
            }
        }, 100);
    };
    toHash();
});

const app = new Vue({
    el: 'main',
    router,
    computed: {
        result() {
            return store.state.result;
        },
        isReady() {
            return store.state.isReady;
        },
    },
    watch: {
        isReady(value) {
            if (value) {
                NProgress.done();
            }
        }
    },
    created() {
        store.dispatch('getData');
    },
});