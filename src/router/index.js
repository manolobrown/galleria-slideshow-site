import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Artist from '../views/Artist.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/artist',
        name: 'Artist',
        component: Artist
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router