import { App } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from '@/router/modules'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

/**路由守卫**/
export function setupGuardRouter(router: Router) {}

/**路由挂载**/
export function setupRouter(app: App<Element>) {
    app.use(router)
    setupGuardRouter(router)
}

export default router
