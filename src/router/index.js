import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
    props: true,
  },
  {
    path: '/terms-and-conditions',
    name: 'termsAndConditions',
    component: () => import('../views/TermsAndConditions.vue'),
    props: true,
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../views/Imprint.vue'),
    props: true,
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes
})

export default router
