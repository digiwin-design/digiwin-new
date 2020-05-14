NProgress.configure({ showSpinner: false });

const store = new Vuex.Store({
    state: {
        isMobile: false,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
    }
});

const router = new VueRouter({
    routes: [
        {
            path: '/law/:tab?',
            component: httpVueLoader('components/Law.vue')
        },
        {
            path: '/seminar/:tab?',
            component: httpVueLoader('components/Seminar.vue')
        },
        {
            path: '/solution/:tab?',
            component: httpVueLoader('components/Solution.vue')
        },
        {
            path: '/:tab?',
            component: httpVueLoader('components/Index.vue')
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

Vue.component('headerComponent', {
    props: ['title', 'lists'],
    template: `
        <div class="header">
            <div class="container">
                <div class="header-text">
                    <h1 class="mainTitle" v-html="title"></h1>
                    <ul class="header-list">
                        <li v-for="list in lists" :key="list">{{list}}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
});

new Vue({
    el: 'main',
    router,
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
    mounted() {
        this.mediaSensor();
    },
});

// preload icons
const images = [];
for (let i = 1; i <= 20; i++) {
    if (i < 10) {
        images.push(`/tw/dsc/images/index/home-icon0${i}h.png`);
    }
    else {
        images.push(`/tw/dsc/images/index/home-icon${i}h.png`);
    }
}
$.preload(images);
