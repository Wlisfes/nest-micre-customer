import { createVNode, Component } from 'vue'

/**同步返回VNode**/
export function divineComponent(component: Component, props: Omix = {}) {
    return () => {
        return createVNode(component, props)
    }
}

/**异步返回VNode**/
export function divineComponentRender(component: Component, props: Omix = {}) {
    return async () => {
        return createVNode(component, props)
    }
}

/**菜单数据转换**/
export function divineFormatter(data: Array<Omix<{ label: string; key: string; icon: Component; size: number }>> = []) {
    return data.map(item => {
        return {
            key: item.key,
            icon: divineComponent(<n-icon size={item.size} component={item.icon} />),
            label: divineComponent(
                <router-link to={item.key}>
                    <n-el tag="h1" style={{ fontSize: '18px', fontWeight: 500, margin: 0 }}>
                        {item.label}
                    </n-el>
                </router-link>
            )
        }
    })
}
