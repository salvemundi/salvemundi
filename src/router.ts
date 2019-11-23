import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/home/index.vue';
import NotFound from './views/error/notFound.vue';
import Forbidden from './views/error/forbidden.vue';
import PreLogon from './views/home/preLogon.vue';
import Register from './views/home/register.vue';
import Login from './views/home/login.vue';
import MemberOverview from './views/dashboard/member/overview.vue';
import MemberDetails from './views/dashboard/member/details.vue';
import Merchandise from './views/merchandise/index.vue';
import MerchandiseItem from './views/merchandise/item.vue';
import Committees from './views/committees/index.vue';
import Committee from './views/committees/committee.vue';
import CommitteeMember from './views/committees/member.vue';
import ShoppingCart from './views/shoppingcart/index.vue';

Vue.use(Router);
const withPrefix = (prefix: any, routes: any) =>
    routes.map( (route: any) => {
        route.path = prefix + route.path;
        return route;
    });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/callback',
      redirect: '/home/register',
    },
    {
      path: '*',
      redirect: '/error/404',
    },
    ...withPrefix('/home', [
      {
        path: '/',
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
      ...withPrefix('/merchandise', [
        {
          path: '/',
          component: Merchandise,
        },
        {
          path: '/:merchandiseItem',
          component: MerchandiseItem,
        },
      ]),
      ...withPrefix('/committees', [
        {
          path: '/',
          component: Committees,
        },
        {
          path: '/:committee',
          component: Committee,
        },
        {
          path: '/:committee/:member',
          component: CommitteeMember,
        },
      ]),
      {
        path: '/cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
      },
      
    ]),
    ...withPrefix('/dashboard', [
      ...withPrefix('/member', [
        {
          path: '/',
          component: MemberOverview,
        },
        {
          path: '/:id',
          component: MemberDetails,
        },
      ]),
    ]),
    ...withPrefix('/error', [
      {
        path: '/404',
        component: NotFound,
      },
      {
        path: '/403',
        component: Forbidden,
      },
    ]),
  ],
});
