// httpVueLoader scss
(function () {
    var sass = new Sass();
    httpVueLoader.langProcessor.scss = function (scssText) {
        return new Promise(function (resolve, reject) {
            sass.compile(scssText, function (result) {
                if (result.status === 0)
                    resolve(result.text);
                else
                    reject(result);
            });
        });
    };
}());

// components
Vue.use(window.VueAwesomeSwiper);
Vue.component('List', {
    props: ['context'],
    template: `
        <ul class="list">
            <li v-for="item in context">{{item}}</li>
        </ul>
    `
});
Vue.component('TitleList', {
    props: ['context'],
    template: `
        <ul class="titleList">
            <li v-for="item in context">
                <p class="titleList-title">{{item.title}}</p>
                <p>{{item.content}}</p>
            </li>
        </ul>
    `
});
Vue.component('Images', {
    props: ['src'],
    template: `
        <img :src="'images/' + src + '.png'" :srcset="'images/' + src + '@2x.png 2x, images/' + src + '@3x.png 3x'">
    `
});
Vue.component('MySwiper', {
    props: ['slides', 'pagination'],
    template: `
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide in slides" :key="slide.image">
                    <figure>
                        <img :src="'images/' + slide.image">
                        <figcaption v-if="!pagination" class="slider-figcaption">{{slide.caption}}</figcaption>
                    </figure>
                </div>
            </div>
            <div class="swiper-button-prev" :class="{'is-offset':!pagination}"></div>
            <div class="swiper-button-next" :class="{'is-offset':!pagination}"></div>
            <div v-show="pagination" class="swiper-pagination"></div>
        </div>
    `
});

// router
const router = new VueRouter({
    routes: [
        {
            path: '/manufacture/:tab?',
            component: httpVueLoader('components/Manufacture.vue')
        },
        {
            path: '/merchandise/:tab?',
            component: httpVueLoader('components/Merchandise.vue')
        },
        {
            path: '/solution/:tab?',
            component: httpVueLoader('components/Solution.vue')
        },
        {
            path: '/case/:tab?',
            component: httpVueLoader('components/Case.vue')
        },
        {
            path: '/online/:tab?',
            component: httpVueLoader('components/Online.vue')
        },
        {
            path: '/iso/:tab?',
            component: httpVueLoader('components/Iso.vue')
        },
        {
            path: '/eform/:tab?',
            component: httpVueLoader('components/Eform.vue')
        },
        {
            path: '/inventory/:tab?',
            component: httpVueLoader('components/Inventory.vue')
        },
        {
            path: '/:tab?',
            component: httpVueLoader('components/WB00283901.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
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
});

// init
new Vue({
    el: 'main',
    router,
});