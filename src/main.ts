import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import { routes } from "./routes"
//import './style.css'

const router = createRouter( {
   history: createWebHashHistory(),
   routes
} )

createApp( App )
   .use( router )
   .mount( '#app' )
