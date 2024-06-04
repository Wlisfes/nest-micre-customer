<script lang="tsx">
import { defineComponent, ref } from 'vue'
import microApp from '@micro-zoe/micro-app'

export default defineComponent({
    name: 'Message',
    setup() {
        const data = ref({ name: '步沉香' })

        microApp.addDataListener('app-message', (evt: Omix) => {
            console.log('addDataListener success', evt)
            // data.value.name = '步沉香' + Math.random()
        })

        function onClick() {
            microApp.forceSetData(`app-message`, { name: '步沉香' }, (evt: Omix) => {
                console.log('setData success', evt)
                data.value.name = '步沉香' + Math.random()
            })
        }

        function onSender() {
            microApp.router.push({ name: 'app-message', path: '/message/sender' })
        }

        return () => (
            <n-element>
                <n-button onClick={onClick}>{data.value.name}</n-button>
                <n-button onClick={onSender}>Sender</n-button>
                <micro-app
                    name="app-message"
                    url="http://localhost:7001"
                    baseroute="/message"
                    router-mode="native-scope"
                    iframe
                    data={data.value}
                ></micro-app>
            </n-element>
        )
    }
})
</script>
