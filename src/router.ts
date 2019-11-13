import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Privacy from './views/Privacy.vue';
import NotFound from './views/errors/NotFound.vue';
import PreLogon from './views/PreLogon.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Merchandise from '@/views/merchandise/index.vue'
import MerchandiseItem from '@/views/merchandise/item.vue'
import Committees from '@/views/committees/index.vue';
import Committee from '@/views/committees/committee.vue';
import CommitteeMember from '@/views/committees/member.vue';
import ShoppingCart from '@/views/shoppingcart/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      redirect: '/404',
    },
    {
      path: '/404',
      component: NotFound,
    },
  ],
});
