/// <reference types="vite/client" />
import { useMessage, useLoadingBar, useNotification, useDialog } from 'naive-ui'
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'

declare global {
    type Schema<K = string, T = any> = Record<K, T>
    type Omix<T = Schema> = T & Schema

    interface Window {
        __MICRO_APP_ENVIRONMENT__: boolean
        __MICRO_APP_BASE_ROUTE__: string
        __MICRO_APP_NAME__: string
        __MICRO_APP_PUBLIC_PATH__: string
        __MICRO_APP_BASE_ROUTE__: string
        __MICRO_APP_BASE_APPLICATION__: boolean
        microApp: EventCenterForMicroApp
        $message: ReturnType<typeof useMessage>
        $loadingBar: ReturnType<typeof useLoadingBar>
        $notification: ReturnType<typeof useNotification>
        $dialog: ReturnType<typeof useDialog>
    }
}
