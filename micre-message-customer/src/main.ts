import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import { createBootstrap } from '@/utils/utils-bootstrap'

async function bootstrap() {
    return await createBootstrap().then(({ app }) => {
        return app.mount('#app')
    })
}
bootstrap()
