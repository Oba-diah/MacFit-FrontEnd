import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Admin from '@/components/Admin.vue'
import Bundle from '@/components/Bundle.vue'
import GymLocations from '@/components/GymLocations.vue'
import HomePage from '@/components/HomePage.vue'
import Profile from '@/components/Profile.vue'
import SignUp from '@/components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    { 
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    { 
      path: '/bundle',
      name: 'Bundle',
      component: Bundle,    
    },
    {
      path: '/gym-locations',
      name: 'GymLocations',
      component: GymLocations,
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    }
  ],
})

export default router
