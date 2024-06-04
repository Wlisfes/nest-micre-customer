import { App } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from '@/router/routes'

export const router = createRouter({
    history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || import.meta.env.BASE_URL),
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
