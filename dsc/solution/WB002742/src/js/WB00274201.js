new Vue({
    el: '#industry',
    components: {
        industry: httpVueLoader('/tw/dsc/assets/industry-list-v2/industry.vue')
    }
});