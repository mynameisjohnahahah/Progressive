import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home/Home.vue');
const SelectType = () => import('./views/SelectType/SelectType.vue');
const Items = () => import('./views/Items/Items.vue');
const Details = () => import('./views/Details/Details.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/SelectType',
      name: 'SelectType',
      component: SelectType,
    },
    {
      path: '/Items',
      name: 'Items',
      component: Items,
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    },
  ],
});
