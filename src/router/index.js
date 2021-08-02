import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import ArtistDetails from '../views/ArtistDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/artists/:id',
        name: 'ArtistDetails',
        component: ArtistDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router