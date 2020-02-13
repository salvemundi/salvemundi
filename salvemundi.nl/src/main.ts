import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import BootstrapVue from 'bootstrap-vue';
import VueCookies from 'vue-cookies';
import Vuex from 'vuex';
import { i18n } from './lib/language';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Toasted);
Vue.use(BootstrapVue);
Vue.use(VueCookies);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
