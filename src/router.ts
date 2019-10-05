import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index.vue';
import Privacy from '@/views/privacy.vue';
import NotFound from '@/views/errorHandling/notFound.vue';
import PreLogon from '@/views/preLogon.vue';
import Register from '@/views/register.vue';
import Login from '@/views/login.vue';

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
      path: '/callback',
      redirect: '/register',
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
      path: '/login',
      component: Login,
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
