import '@unocss/reset/normalize.css'
import '@/styles/index.scss'
import 'virtual:uno.css'
import { microApp } from '@/utils/utils-micro'
import { createBootstrap } from '@/utils/utils-bootstrap'

async function bootstrap() {
    await microApp.start()
    return await createBootstrap().then(({ app }) => {
        return app.mount('#app')
    })
}
bootstrap()
