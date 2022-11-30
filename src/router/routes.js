// ~/router/routes.js
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/HomeView.vue'),
  },
  {
    path: '/collections',
    name: 'collections',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/collections/CollectionsView.vue'),
  },
  {
    path: '/assets',
    name: 'Assets',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/assets/AssetsView.vue'),
  },
  {
    path: '/category/:name',
    name: 'Category',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/category/CategoryView.vue'),
  },
  {
    path: '/rankings',
    name: 'Rankings',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/stats/RankingsView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/AboutView.vue'),
  },
  {
    path: '/admin',
    name: 'login',
    meta: { layout: 'AdminLayout' },
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

export default routes;
