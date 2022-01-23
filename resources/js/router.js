import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/Home.vue'),
  },
  {
    path: '/currencies',
    name: 'CurrenciesList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/CurrenciesList.vue'),
  },
  {
    path: '/add/currency',
    name: 'AddCurrency',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/AddCurrency.vue'),
  },
  {
    path: '/edit/currency/:id',
    name: 'EditCurrency',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/EditCurrency.vue'),
  },
  {
    path: '/cashes',
    name: 'CashesList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/CashesList.vue'),
  },
  {
    path: '/add/cash',
    name: 'AddCash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/AddCash.vue'),
  },
  {
    path: '/edit/cash/:id',
    name: 'EditCash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/EditCash.vue'),
  },
  {
    path: '/transactions',
    name: 'TransactionsList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/TransactionsList.vue'),
  },
  {
    path: '/add/transaction',
    name: 'AddTransaction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/AddTransaction.vue'),
  },
  {
    path: '/piggybanks',
    name: 'PiggybanksList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/PiggybanksList.vue'),
  },
  {
    path: '/add/piggybank',
    name: 'AddPiggybank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/AddPiggybank.vue'),
  },
  {
    path: '/edit/piggybank/:id',
    name: 'EditPiggybank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/EditPiggybank.vue'),
  },
  {
    path: '/budget',
    name: 'MyBudget',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/MyBudget.vue'),
  },
  {
    path: '/budget/:id',
    name: 'MyBudgetWithCurrency',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/MyBudgetWithCurrency.vue'),
  },
  {
    path: '/profile',
    name: 'UserProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/UserProfile.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/NotFound.vue'),
  },
]


const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return {x: 0, y: 0};
  },
})

export default router;
