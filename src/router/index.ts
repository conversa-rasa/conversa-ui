import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { conversaService } from '../services/conversa.service'
import { authService } from '../services/auth.service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/welcome',
      name: 'welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SetupView.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: (async () => {
        if (authService.auth) {
          return '/';
        }

        const firstRun = await conversaService.firstRun();

        if (firstRun.first_run) {
          return '/welcome'
        }
      }),
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/conversations',
      name: 'conversations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ConversationsView.vue')
    },
    {
      path: '/interactive',
      name: 'interactive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InteractiveView.vue')
    },
    {
      path: '/chatbotturismo',
      name: 'chatbotturismo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChatbotTurismoView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/welcome', '/setup', '/chatbotturismo'];
  const authRequired = !publicPages.includes(to.path);
  const firstRun = await conversaService.firstRun();
console.log(authService.auth)
  if (authRequired && !authService.auth) {
    if (firstRun.first_run) {
      return '/welcome';
    } else {
      return '/login';
    }
  }
});

export default router
