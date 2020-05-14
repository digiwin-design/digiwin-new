import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        device: null,
        isMobile: false,
        isMediumWidth: false,
        showMask: false,
        result: null,
        loading: false,
    },
    getters: {
        viewData(state) {
            return state.result && state.result[state.route.name];
        }
    },
    mutations: {
        setDevice(state, payload) {
            state.device = payload;
        },
        setDeviceType(state, payload) {
            state.isMobile = payload;
        },
        setDeviceType2(state, payload) {
            state.isMediumWidth = payload;
        },
        setMask(state, payload) {
            state.showMask = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        getData({ commit }) {
            axios.get('db.json').then(res => commit('setData', res.data));
        },
    }
})
