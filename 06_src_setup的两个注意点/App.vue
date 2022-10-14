<template>
    <Demo @hello="showHelloMsg" msg="你好啊" name="isYangs">
        <template v-slot:demo>
            <span>isYangs</span>
        </template>
    </Demo>
</template>

<script>
import Demo from './components/Demo';
export default {
    name: 'App',
    components: {
        Demo,
    },
    setup() {
        const showHelloMsg = msg => {
            console.log(`你触发了Hello事件，我收到的参数是：${msg}!`);
        };
        return {
            showHelloMsg,
        };
    },
};
</script>
