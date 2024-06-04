import { defineStore } from 'pinia'
import { APP_STORE } from '@/utils/utils-storage'

export const useConfiger = defineStore(APP_STORE.STORE_CONFIGER, {
    persist: true,
    state: () => ({
        width: window.innerWidth,
        height: window.innerHeight,
        theme: 'light',
        primaryColor: '#18a058',
        collapsed: false,
        device: 'PC'
    }),
    getters: {
        isMobile: state => state.device === 'Mobile'
    },
    actions: {
        async setResize(data: { width: number; height: number }) {
            this.width = data.width
            this.height = data.height
            if (data.width >= 1280) {
                await this.setCollapsed(false)
                return await this.setDevice('PC')
            } else if (data.width > 768) {
                await this.setCollapsed(true)
                return await this.setDevice('IPAD')
            } else {
                await this.setCollapsed(true)
                return await this.setDevice('Mobile')
            }
        },
        async setTheme(theme: string) {
            return (this.theme = theme)
        },
        async setPrimaryColor(primaryColor: string) {
            return (this.primaryColor = primaryColor)
        },
        async setCollapsed(collapsed: boolean) {
            return (this.collapsed = collapsed)
        },
        async setDevice(device: 'PC' | 'IPAD' | 'Mobile') {
            return (this.device = device)
        }
    }
})
