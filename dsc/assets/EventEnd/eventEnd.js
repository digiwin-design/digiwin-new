(function () {
    new Vue({
        el: '#endBanner',
        components: {
            'EventEnd': httpVueLoader('/tw/dsc/assets/EventEnd/EventEnd.vue'),
        },
        data: function () {
            return {
                urlMap: [],
            };
        },
        mounted: function () {
            axios.get('/tw/dsc/assets/EventEnd/db.json')
                .then(function (res) {
                    this.urlMap = res.data.urlMap;
                }.bind(this));
        },
    });
}());