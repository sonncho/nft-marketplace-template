// ~/router/routes.js
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'UserLayout' },
    component: () => import('/@/views/HomeView.vue'),
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
