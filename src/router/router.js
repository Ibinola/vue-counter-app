import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterPage from '../views/CounterPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterPage,
    },
    {
        path: '/:catchAll(.*)',
        name: "NotFound",
        component: () => import('../views/NotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
