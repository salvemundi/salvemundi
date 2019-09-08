import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Privacy from './views/Privacy.vue';
import NotFound from './views/errorHandling/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/notFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
    },
    {
      path: '*',
      redirect: '/notFound',
    },
  ],
});
