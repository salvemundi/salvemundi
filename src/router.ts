import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Privacy from './views/Privacy.vue';
import NotFound from './views/errorHandling/NotFound.vue';
import PreLogon from './views/PreLogon.vue';
import Register from '@/views/Register.vue';

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
      path: '/preLogon',
      component: PreLogon,
    },
    {
      path: '/register',
      component: Register,
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
