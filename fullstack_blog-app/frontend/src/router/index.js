import { createRouter, createWebHistory } from 'vue-router';
import userPosts from '../views/userPosts.vue';
import allPosts from '../views/allPosts.vue';
import loginPage from '../views/loginPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      name: 'register',
      component: loginPage, // Assuming this is for user registration
    },
    {
      path: '/user/login',
      name: 'login',
      component: loginPage, // Assuming this is for user login
    },
    {
      path: '/userPosts',
      name: 'userPosts',
      component: userPosts, // Assuming this is for user-specific posts
    },
    {
      path: '/allPosts',
      name: 'allPosts',
      component: allPosts, // Assuming this is for all posts
    },
  ],
});

export default router;
