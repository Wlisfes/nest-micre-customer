<script lang="tsx">
import { defineComponent, computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { useConfiger, useStore } from '@/store'
import { useProvider } from '@/hooks/hook-provider'
import { divineFormatter } from '@/utils/utils-component'

const client = [
    { label: '主控台', key: '/', icon: <Iv-BsHome />, size: 28 },
    { label: '终端通道', key: '/channel', icon: <Iv-BsChannel />, size: 26 },
    { label: '邮件服务', key: '/mail', icon: <Iv-BsMail />, size: 28 },
    { label: '短信服务', key: '/message', icon: <Iv-BsMessage />, size: 28 },
    { label: '语音服务', key: '/voice', icon: <Iv-BsVoice />, size: 30 },
    { label: '社媒服务', key: '/whatsapp', icon: <Iv-BsWhatsapp />, size: 28 }
]

export default defineComponent({
    name: 'LayoutCompose',
    setup() {
        const { collapsed, isMobile, setCollapsed } = useStore(useConfiger)
        const { inverted } = useProvider()
        const route = useRoute()
        const dataSource = computed(() => divineFormatter(client))

        return () => (
            <n-layout has-sider position="absolute">
                <n-layout-sider
                    bordered
                    inverted={inverted.value}
                    collapsed={collapsed.value}
                    width={250}
                    native-scrollbar={false}
                    show-trigger={isMobile.value ? false : 'bar'}
                    collapsed-width={isMobile.value ? 0 : 80}
                    collapse-mode="width"
                    onUpdateCollapsed={(value: boolean) => setCollapsed(value)}
                >
                    <n-menu
                        accordion
                        root-indent={24}
                        collapsed-width={80}
                        collapsed={collapsed.value}
                        inverted={inverted.value}
                        value={route.path}
                        style={{ '--n-item-height': '50px' }}
                        options={dataSource.value}
                    />
                </n-layout-sider>
                <n-layout native-scrollbar={false} content-class="min-h-full overflow-hidden flex flex-col">
                    <RouterView></RouterView>
                </n-layout>
            </n-layout>
        )
    }
})
</script>
