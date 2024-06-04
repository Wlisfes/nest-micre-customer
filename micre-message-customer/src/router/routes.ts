import { RouteRecordRaw } from 'vue-router'

export default [
    {
        path: '/',
        name: 'Home',
        meta: { title: '主控台', Authorize: 'AUTH' },
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/sender',
        name: 'Sender',
        meta: { title: '主控台', Authorize: 'AUTH' },
        component: () => import('@/views/Sender.vue')
    }
] as Array<RouteRecordRaw>
