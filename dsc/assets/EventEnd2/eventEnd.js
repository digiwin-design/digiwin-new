(function () {
    new Vue({
        el: '#endBanner',
        components: {
            'EventEnd': httpVueLoader('/tw/dsc/assets/EventEnd2/EventEnd.vue'),
        },
    });
}());