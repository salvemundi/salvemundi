import 'reflect-metadata';
import Vue from 'vue';
import App from '@/app.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import { LayoutPlugin } from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false;

Vue.use(Toasted);
Vue.use(LayoutPlugin);
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
