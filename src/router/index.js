import { createRouter, createWebHistory } from "vue-router";
import Artist from '../views/Artist.vue';

const routes = [
    {
        path: '/artist',
        name: 'Artist',
        component: Artist
    }
]