import { createApp } from 'vue'
import { setupRouter } from '@/router'
// import { setupStore } from '@/store'
import App from '@/App.vue'

export async function createBootstrap<T>(props?: Omix<T>) {
    const app = createApp(<App {...props} />)
    setupRouter(app)
    // setupStore(app)
    return { app }
}
