<template>
    <h1>我是APP组件</h1>
    <h2>user:{{ name }}</h2>
    <button @click="sayHello">在控制台输出sayHello</button>
</template>

<script>
// import { h } from 'vue';
export default {
    name: 'App',
    // 此处只是测试一下setup函数，暂时不考虑响应式的问题
    setup() {
        // 数据
        const name = 'isYangs';

        // 方法
        const sayHello = () => {
            console.log(`hello ${name}`);
        };

        // 返回一个对象（常用）
        return {
            name,
            sayHello,
        };

        // 返回一个渲染函数（不常用）
        // return () => h('h1', '你好呀');
    },
};
</script>
