<script lang="tsx">
import { defineComponent, PropType } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
    name: 'LayoutContainer',
    props: {
        layout: { type: String as PropType<'container' | 'compose'>, default: 'container' }
    },
    setup(props) {
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
                    {props.layout === 'compose' ? <layout-compose></layout-compose> : <RouterView></RouterView>}
                </n-layout-content>
            </n-layout>
        )
    }
})
</script>
