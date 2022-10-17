<template>
    <div class="app">
        <h3>我是App组件（祖）,{{ brand }}--{{ price }}</h3>
        <Child />
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
import Child from './components/Child';
export default {
    name: 'App',
    components: {
        Child,
    },
    setup() {
        let car = reactive({
            brand: '奔驰',
            price: 100000,
        });
        provide('car', car); // 给自己的后代组件传递数据
        return { ...toRefs(car) };
    },
};
</script>

<style>
.app {
    background-color: gray;
    padding: 10px;
}
</style>
