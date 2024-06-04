import { computed } from 'vue'
import { useThemeVars, darkTheme, lightTheme, GlobalThemeOverrides } from 'naive-ui'
import { useConfiger, useStore } from '@/store'

export function useProvider() {
    const { theme, primaryColor, setTheme, setPrimaryColor } = useStore(useConfiger)
    const vars = useThemeVars()
    const lightThemeOverrides = computed<GlobalThemeOverrides>(() => ({
        common: {
            backColor: 'rgb(244, 246, 248)',
            primaryColor: primaryColor.value
        }
    }))
    const darkThemeOverrides = computed<GlobalThemeOverrides>(() => ({
        common: {
            backColor: 'rgb(16, 16, 20)',
            primaryColor: primaryColor.value,
            primaryColorSuppl: primaryColor.value
        }
    }))
    const inverted = computed(() => {
        return theme.value === 'dark'
    })
    const themeCompose = computed(() => {
        return theme.value === 'dark' ? darkTheme : lightTheme
    })
    const themeOverrides = computed(() => {
        return theme.value === 'dark' ? darkThemeOverrides.value : lightThemeOverrides.value
    })

    return { vars, theme, inverted, themeCompose, themeOverrides, setTheme, setPrimaryColor }
}
