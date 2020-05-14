import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        device: null,
        isMobile: false,
        showMask: false,
        result: null,
        adData: null,
        loading: true,
    },
    mutations: {
        setDevice(state, payload) {
            state.device = payload;
        },
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        toggleMask(state, payload) {
            state.showMask = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
        setAdData(state, payload) {
            state.adData = payload;
        },
        updateLoading(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        getData({commit}) {
            axios.get('db.json').then(res => commit('setData', res.data));
        },
        getAdData({commit}) {
            let apiHost = location.hostname === 'www.digiwin.com' ? '' : 'http://localhost:8083';
            axios.get(`${apiHost}/tw/dsc/assets/ad/db.json`).then(res => {
                let result = res.data.filter(value => location.pathname === value.url);
                commit('setAdData', result[0]);
            });
        },
    }
})
