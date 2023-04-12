import { createRouter, createWebHashHistory } from "vue-router"
import { routerGuard } from "./guard"

const Home = () => import('../components/Home.vue')
const Favorites = () => import('../components/Favorites.vue')
const Login = () => import('../components/Login.vue')
const Register = () => import('../components/Register.vue')
const UpdateUserData = () => import('../components/UpdateUserData.vue')
const InfoRickAndMorty = () => import('../components/InfoRickAndMorty.vue')
const EmailVerification = () => import('../shared/EmailVerification.vue')

export const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/favorites', name: 'Favorites', component: Favorites },
   { path: '/login', name: 'Login', component: Login },
   { path: '/register', name: 'Register', component: Register },
   { path: '/update/me', name: 'UpdateMe', component: UpdateUserData },
   {
      path: '/info/:id',
      name: 'InfoRickAndMorty',
      component: InfoRickAndMorty
   },
   { path: '/api/verify-email/:id/:hash', name: 'VerifyEmail', component: EmailVerification }
]

export const router = createRouter( {
   history: createWebHashHistory(),
   routes
} )

routerGuard( router )