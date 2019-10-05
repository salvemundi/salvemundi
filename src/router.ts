import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index.vue';
import Privacy from '@/views/privacy.vue';
import NotFound from '@/views/errorHandling/notFound.vue';
import PreLogon from '@/views/preLogon.vue';
import Register from '@/views/register.vue';
import Login from '@/views/login.vue';
import MemberOverview from '@/views/administration/member/overview.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/notFound',
      component: NotFound,
    },
    {
      path: '/callback',
      redirect: '/register',
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
      component: Privacy,
    },
    {
      path: '/administration',
      children: [
        {
          path: 'member',
          component: MemberOverview,
        },
      ],
    },
    {
      path: '*',
      redirect: '/notFound',
    },
  ],
});
