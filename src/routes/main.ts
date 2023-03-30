import { createRouter, createWebHashHistory } from "vue-router"
import { routerGuard } from "./guard"

const Home = () => import('../components/Home.vue')
const Favorites = () => import('../components/Favorites.vue')
const Login = () => import('../components/Login.vue')
const Register = () => import('../components/Register.vue')
const UpdateUserData = () => import('../components/UpdateUserData.vue')

export const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/favorites', name: 'Favorites', component: Favorites },
   { path: '/login', name: 'Login', component: Login },
   { path: '/register', name: 'Register', component: Register },
   { path: '/update/me', name: 'UpdateMe', component: UpdateUserData }
]

export const router = createRouter( {
   history: createWebHashHistory(),
   routes
} )

routerGuard( router )