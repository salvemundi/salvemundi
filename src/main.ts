import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import { LayoutPlugin, NavbarPlugin, ButtonPlugin } from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(Vuex)
Vue.use(Toasted);
Vue.use(LayoutPlugin);
Vue.use(ButtonPlugin);
Vue.use(NavbarPlugin);
Vue.use(VueI18n);
Vue.use(VueCookies);

const i18n = new VueI18n({
  locale: 'nl',
  fallbackLocale: 'en',
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
