import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router' // Correction ici
import HomeComponent from './home.vue'
import Restaurant from './Restaurant.vue'

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/Restaurant-Component', component: Restaurant }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

const vueApp = createApp(App)

vueApp.use(router)

vueApp.mount('#app') // Utilisez la variable vueApp que vous avez créée
