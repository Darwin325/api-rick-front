import { createRouter, createWebHashHistory } from "vue-router"
import { routerGuard } from "./guard"

const Home = () => import('../components/Home.vue')
const Favorites = () => import('../components/Favorites.vue')
const Login = () => import('../components/Login.vue')

export const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/favorites', name: 'Favorites', component: Favorites },
   { path: '/login', name: 'Login', component: Login }
]

export const router = createRouter( {
   history: createWebHashHistory(),
   routes
} )

routerGuard( router )