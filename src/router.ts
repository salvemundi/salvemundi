import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/home/index.vue';
import Privacy from './views/privacy.vue';
import NotFound from './views/error/notFound.vue';
import Forbidden from './views/error/forbidden.vue';
import PreLogon from './views/home/preLogon.vue';
import Register from './views/home/register.vue';
import Login from './views/home/login.vue';
import MemberOverview from './views/dashboard/member/overview.vue';
import MemberDetails from './views/dashboard/member/details.vue';
import Merchandise from './views/merchandise/index.vue'
import MerchandiseItem from './views/merchandise/item.vue'
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
      redirect: '/register',
    },
    {
      path: '/privacy',
      component: Privacy,
    },
    {
      path: '/merchandise',
      name: 'Merchandise',
      component: Merchandise
    },
    {
      path: '/merchandise/:merchandiseItem',
      name: "MerchandiseItem",
      component: MerchandiseItem
    },
    {
      path: '/cart',
      name: "ShoppingCart",
      component: ShoppingCart
    },
    {
      path: '/committees',
      name: 'Committees',
      component: Committees
    },
    {
      path: '/committees/:committee',
      name: 'Committee',
      component: Committee
    },
    {
      path: '/committees/:committee/:member',
      name: 'CommitteeMember',
      component: CommitteeMember
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
