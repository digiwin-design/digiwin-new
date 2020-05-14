import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import smoothscroll from 'smoothscroll-polyfill';
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
smoothscroll.polyfill();
sync(store, router);
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
