<template>
    <h1>一个人的信息</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="test1">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'TestDemo',
    /* beforeCreate() {
        console.log('----beforeCreate----');
    }, */
    props: ['msg', 'name'],
    emits: ['hello'],
    setup(props, context) {
        // console.log('----setup----', props);
        console.log('----setup----', context);
        // console.log('----setup----', context.attrs); // 相当于Vue2中的$attrs
        // console.log('----setup----', context.emit); // 触发自定义事件的
        console.log('----setup----', context.slots); // 插槽
        let person = reactive({
            name: 'isYangs',
            age: 18,
        });

        const test1 = () => {
            context.emit('hello', 66666);
        };

        return {
            person,
            test1,
        };
    },
};
</script>
