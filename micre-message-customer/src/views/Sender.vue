<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
    name: 'Sender',
    setup() {
        return () => (
            <n-element>
                <n-h1>Sender</n-h1>
                <RouterLink to="/">
                    <n-button>Click me: Home</n-button>
                </RouterLink>
            </n-element>
        )
    }
})
</script>
