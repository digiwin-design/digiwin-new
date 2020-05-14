httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, 'components/vue-text-dot.vue');
httpVueLoader.register(Vue, 'components/pain.vue');
httpVueLoader.register(Vue, 'components/tabs.vue');
Vue.use(VueAwesomeSwiper);

NProgress.configure({ showSpinner: false });

const store = new Vuex.Store({
    state: {
        result: null,
        isMobile: false,
    },
    mutations: {
        setData(state, payload) {
            state.result = payload;
        },
        updateDevice(state, payload) {
            state.isMobile = payload;
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
            path: '/demand/:tab?',
            name: 'demand',
            component: httpVueLoader('views/demand.vue')
        },
        {
            path: '/issue/:tab?',
            name: 'issue',
            component: httpVueLoader('views/issue.vue')
        },
        {
            path: '/orders/:tab?',
            name: 'orders',
            component: httpVueLoader('views/orders.vue')
        },
        {
            path: '/cost/:tab?',
            name: 'cost',
            component: httpVueLoader('views/cost.vue')
        },
        {
            path: '/quality/:tab?',
            name: 'quality',
            component: httpVueLoader('views/quality.vue')
        },
        {
            path: '/smartFactory/:tab?',
            name: 'smartFactory',
            component: httpVueLoader('views/smartFactory.vue')
        },
        {
            path: '/seminar/:tab?',
            name: 'seminar',
            component: httpVueLoader('views/seminar.vue')
        },
        {
            path: '/case/:tab?',
            name: 'case',
            component: httpVueLoader('views/case.vue')
        },
        {
            path: '/control/:tab?',
            name: 'control',
            component: httpVueLoader('views/control.vue')
        },
        {
            path: '/:tab?',
            name: 'index',
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

let app = new Vue({
    el: 'main',
    router,
    computed: {
        result() {
            return store.state.result;
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
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});