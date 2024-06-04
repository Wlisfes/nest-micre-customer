<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
    name: 'LayoutContainer',
    setup() {
        return () => (
            <n-layout position="absolute">
                <n-layout-header bordered class="h-60px">
                    颐和园路
                </n-layout-header>
                <n-layout-content
                    position="absolute"
                    content-class="min-h-full overflow-hidden flex flex-col"
                    style={{ top: '60px' }}
                    scrollbar-props={{ trigger: 'none', size: 60, verticalRailStyle: { zIndex: 99 } }}
                    native-scrollbar={false}
                >
                    <RouterView></RouterView>
                </n-layout-content>
            </n-layout>
        )
    }
})
</script>
