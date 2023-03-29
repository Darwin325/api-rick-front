const Home = () => import('../components/Home.vue')
const Favorites = () => import('../components/Favorites.vue')

export const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/favorites', name: 'Favorites', component: Favorites }
]