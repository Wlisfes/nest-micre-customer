<script lang="tsx">
import { defineComponent, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { useConfiger, useStore } from '@/store'

export default defineComponent({
    name: 'App',
    setup() {
        const { width, height } = useWindowSize()
        const { setResize } = useStore(useConfiger)

        watch(
            () => [width.value, height.value],
            async function () {
                return await setResize({ width: width.value, height: height.value })
            },
            { immediate: true }
        )

        return () => (
            <layout-provider>
                <layout-before>
                    <RouterView></RouterView>
                </layout-before>
            </layout-provider>
        )
    }
})
</script>
