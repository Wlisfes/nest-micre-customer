import { RouteRecordRaw } from 'vue-router'
import Container from '@/components/layout/layout-container.vue'

export default [
    {
        path: '/',
        name: 'Container',
        props: { layout: 'compose' },
        component: Container,
        children: [
            {
                path: '/',
                name: 'Home',
                meta: { title: '主控台', Authorize: 'AUTH' },
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/channel',
                name: 'Channel',
                meta: { title: '终端通道', Authorize: 'AUTH' },
                component: () => import('@/views/Channel.vue')
            },
            {
                path: '/mail',
                name: 'Mail',
                meta: { title: '邮件服务', Authorize: 'AUTH' },
                component: () => import('@/views/Mail.vue')
            },
            {
                path: '/message/:page*',
                name: 'Message',
                meta: { title: '短信服务', Authorize: 'AUTH' },
                component: () => import('@/views/Message.vue')
            },
            {
                path: '/voice',
                name: 'Voice',
                meta: { title: '语音服务', Authorize: 'AUTH' },
                component: () => import('@/views/Voice.vue')
            },
            {
                path: '/whatsapp',
                name: 'Whatsapp',
                meta: { title: '社媒服务', Authorize: 'AUTH' },
                component: () => import('@/views/Whatsapp.vue')
            }
        ]
    }
] as Array<RouteRecordRaw>
