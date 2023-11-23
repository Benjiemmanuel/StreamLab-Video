import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import WelcomePage from '@/views/WelcomePage.vue';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: WelcomePage,
      },
      {
      path: '/',
      name: 'Home',
      component: HomePage,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
