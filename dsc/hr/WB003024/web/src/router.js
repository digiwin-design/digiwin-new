import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import(/* webpackChunkName: "home" */ './views/Home/Home.vue')
    // },
    {
        path: '/MA',
        name: 'ma',
        component: () => import(/* webpackChunkName: "ma" */ './views/MA/MA.vue')
    },
    // {
    //     path: '/school',
    //     name: 'school',
    //     component: () => import(/* webpackChunkName: "school" */ './views/School/School.vue')
    // },
    {
        path: '*',
        redirect: '/MA'
    },
]

const router = new VueRouter({
    routes
})

export default router
