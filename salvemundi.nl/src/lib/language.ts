import VueI18n from 'vue-i18n';
import Vue from 'vue';

const storageConst = 'language';

export const supportedLanguages = ['nl', 'en'];

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: localStorage.getItem(storageConst) || 'en',
    fallbackLocale: 'en',
  });

export default {
    namespaced: false,
    state: {
        language: localStorage.getItem(storageConst),
    },
    mutations: {
        SET_LANGUAGE(state: any, lang: string) {
            localStorage.setItem(storageConst, lang);
            state.language = lang;
            i18n.locale = lang;
        },
    },
    actions: {
        setLanguage({ commit }: any, language: string) {
            commit('SET_LANGUAGE', language);
        },
    },
};
