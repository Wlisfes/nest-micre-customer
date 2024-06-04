<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
    name: 'Home',
    setup() {
        window.microApp.addDataListener((data: Omix) => {
            console.log('microApp.addDataListener', data)
            return data
        }, true)

        return () => (
            <n-element>
                <n-h1 onClick={() => window.microApp.forceDispatch({ age: 20 })}>短信服务测试</n-h1>
                <RouterLink to="/sender">
                    <n-button>Click me: Home</n-button>
                </RouterLink>
                {Array.from({ length: 20 }, (_, i) => (
                    <n-h2>{i}</n-h2>
                ))}
            </n-element>
        )
    }
})
</script>
