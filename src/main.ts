import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createPinia, Pinia } from "pinia"

import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./routes"

const pinia: Pinia = createPinia()

createApp( App )
   .use( router )
   .use( pinia )
   .mount( '#app' )
