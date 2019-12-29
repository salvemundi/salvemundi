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
import CheckEmail from './views/home/checkEmail.vue';
import ConfirmAccount from './views/home/confirmAccount.vue';
import Me from './views/home/me.vue';
import Privacy from './views/privacy.vue';
import IncomeStatement from './views/dashboard/accountancy/incomeStatement.vue';
import AccountancyBalance from './views/dashboard/accountancy/balans.vue';
import ImportAccountancy from './views/dashboard/accountancy/import.vue';
import ActivateAccountancy from './views/dashboard/accountancy/activate.vue';

Vue.use(Router);
const withPrefix = (prefix: any, routes: any) =>
  routes.map((route: any) => {
    route.path = prefix + route.path;
    route.name = prefix + route.path;
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
      path: '/privacy',
      component: Privacy,
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
        name: 'index',
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
      {
        path: '/checkemail',
        component: CheckEmail,
      },
      {
        path: '/confirmation',
        component: ConfirmAccount,
      },
      {
        path: '/me',
        component: Me,
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
      ...withPrefix('/accountancy', [
        {
          path: '/',
          component: AccountancyBalance,
        },
        {
          path: '/incomeStatement',
          component: IncomeStatement,
        },
        {
          path: '/import',
          component: ImportAccountancy,
        },
        {
          path: '/activate',
          component: ActivateAccountancy,
        },
        {
          path: '/callback',
          component: ActivateAccountancy,
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
