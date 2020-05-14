Vue.use(VueAwesomeSwiper);
httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/slider-banner-s.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, 'components/pain.vue');
httpVueLoader.register(Vue, 'components/case-list.vue');
httpVueLoader.register(Vue, 'components/loading.vue');

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
            path: '/issue01',
            component: httpVueLoader('views/issue01.vue')
        },
        {
            path: '/issue02',
            component: httpVueLoader('views/issue02.vue')
        },
        {
            path: '/issue03',
            component: httpVueLoader('views/issue03.vue')
        },
        {
            path: '/manufacture',
            component: httpVueLoader('views/manufacture.vue')
        },
        {
            path: '/seminar',
            component: httpVueLoader('views/seminar.vue')
        },
        {
            path: '/mis01',
            component: httpVueLoader('views/mis01.vue')
        },
        {
            path: '/mis02',
            component: httpVueLoader('views/mis02.vue')
        },
        {
            path: '/mis03',
            component: httpVueLoader('views/mis03.vue')
        },
        {
            path: '/solution',
            component: httpVueLoader('views/solution/main.vue'),
            children: [
                {
                    path: '',
                    name: 'solution01',
                    component: httpVueLoader('views/solution/solution01.vue'),
                },
                {
                    path: '02',
                    name: 'solution02',
                    component: httpVueLoader('views/solution/solution02.vue'),
                },
                {
                    path: '03',
                    name: 'solution03',
                    component: httpVueLoader('views/solution/solution03.vue'),
                },
                {
                    path: '04',
                    name: 'solution04',
                    component: httpVueLoader('views/solution/solution04.vue'),
                },
                {
                    path: '05',
                    name: 'solution05',
                    component: httpVueLoader('views/solution/solution05.vue'),
                },
                {
                    path: '06',
                    name: 'solution06',
                    component: httpVueLoader('views/solution/solution06.vue'),
                },
                {
                    path: '07',
                    name: 'solution07',
                    component: httpVueLoader('views/solution/solution07.vue'),
                },
                {
                    path: '08',
                    name: 'solution08',
                    component: httpVueLoader('views/solution/solution08.vue'),
                },
            ]
        },
        {
            path: '/wall',
            component: httpVueLoader('views/wall.vue')
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