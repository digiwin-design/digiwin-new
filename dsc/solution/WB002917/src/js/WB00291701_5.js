new Vue({
    el: '#app',
    components: {
        'IndustryList': httpVueLoader('components/industry-list/industry.vue')
    }
});