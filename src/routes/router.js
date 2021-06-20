import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/SearchProfile.vue'),
        },
        {
            path: '/user/:username',
            name: 'dashboard',
            component: () => import('@/components/Dashboard.vue'),
        }
    ]
})