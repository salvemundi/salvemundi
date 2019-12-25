import Vue from 'vue';
import Vuex from 'vuex';

import language from './lib/modules/language';
import authentication from './lib/modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    language,
    authentication,
  },
});
