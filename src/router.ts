import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/home/index.vue';
import Privacy from '@/views/privacy.vue';
import NotFound from '@/views/error/notFound.vue';
import PreLogon from '@/views/home/preLogon.vue';
import Register from '@/views/home/register.vue';
import Login from '@/views/home/login.vue';
import MemberOverview from '@/views/administration/member/overview.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: Index,
      children: [
        {
          path: '',
          component: Index,
        },
        {
          path: 'preLogon',
          component: PreLogon,
        },
        {
          path: 'register',
          component: Register,
        },
        {
          path: 'login',
          component: Login,
        },
      ],
    },
    {
      path: '/administration',
      component: MemberOverview,
      children: [
        {
          path: 'member',
          component: MemberOverview,
        },
      ],
    },
    {
      path: '/error',
      component: NotFound,
      children: [
        {
          path: '404',
          component: NotFound,
        },
      ],
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/callback',
      redirect: '/register',
    },
    {
      path: '/privacy',
      component: Privacy,
    },
    {
      path: '*',
      redirect: '/error/404',
    },
  ],
});
