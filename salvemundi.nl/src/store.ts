import Vue from 'vue';
import Vuex from 'vuex';

import language from './lib/language';
import authentication from './lib/authentication';
import permission from './lib/permission';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    language,
    authentication,
    permission,
  },
});
