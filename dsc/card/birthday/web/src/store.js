import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        device: null,
        isMobile: false,
        showMask: false,
        showPopup: false,
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
        togglePopup(state, payload) {
            state.showPopup = payload;
        },
    },
    actions: {

    }
})
