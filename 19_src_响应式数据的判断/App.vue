<template>
    <div class="app">
        <h3>我是App组件（祖）</h3>
    </div>
</template>

<script>
import {
    isProxy,
    isReactive,
    isReadonly,
    isRef,
    reactive,
    readonly,
    ref,
    toRefs,
} from '@vue/reactivity';
export default {
    name: 'App',
    setup() {
        let car = reactive({
            brand: '奔驰',
            price: 100000,
        });
        let sum = ref(0);
        let car2 = readonly(car);

        console.log(isRef(sum)); // true
        console.log(isReactive(car)); // true
        console.log(isReadonly(car2)); // true
        console.log(isProxy(car)); // true

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
