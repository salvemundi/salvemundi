import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import { LayoutPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false;

Vue.use(Toasted);
Vue.use(LayoutPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
