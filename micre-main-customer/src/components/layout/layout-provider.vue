<script lang="tsx">
import { defineComponent } from 'vue'
// import { useLocale } from '@/hooks/hook-locale'
import { useProvider } from '@/hooks/hook-provider'

export default defineComponent({
    name: 'LayoutProvider',
    setup(props, { slots }) {
        const { themeCompose, themeOverrides } = useProvider()
        // const { Locale, DateLocale } = useLocale()

        return () => (
            <n-config-provider
                abstract
                inline-theme-disabled
                //locale={Locale.value}
                //date-locale={DateLocale.value}
                theme={themeCompose.value}
                theme-overrides={themeOverrides.value}
            >
                <n-loading-bar-provider>
                    <n-dialog-provider>
                        <n-notification-provider max={3}>
                            <n-message-provider>{slots}</n-message-provider>
                        </n-notification-provider>
                    </n-dialog-provider>
                </n-loading-bar-provider>
            </n-config-provider>
        )
    }
})
</script>
