import { App } from 'vue'
import { createPinia, defineStore, storeToRefs } from 'pinia'
export { useConfiger } from '@/store/configer'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'
/**挂载持久化缓存**/
const store = createPinia().use(PiniaPluginPersistedstate)
/**导出解构函数**/
export function useStore<T extends ReturnType<typeof defineStore>>(useDataStore: T) {
    const data = useDataStore() as ReturnType<T>
    const refs = storeToRefs(data)
    return { ...data, ...refs }
}
export function setupStore(app: App<Element>) {
    app.use(store)
}

export default store
