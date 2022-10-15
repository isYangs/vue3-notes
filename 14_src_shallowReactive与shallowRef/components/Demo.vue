<template>
    <h4>当前的x.y值是：{{ x.y }}</h4>
    <button @click="x = { y: 999 }">点我替换x</button>
    <button @click="x.y++">点我x.y+1</button>
    <hr />
    <h2>{{ person }}</h2>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪水：{{ job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary += 1000">增加薪水</button>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive, shallowRef } from 'vue';
export default {
    name: 'TestDemo',
    setup() {
        // let person = shallowReactive({ // 只考虑第一层数据的响应式
        let person = reactive({
            name: 'isYangs',
            age: 18,
            job: {
                j1: {
                    salary: 1000,
                },
            },
        });
        // let x = ref({
        let x = shallowRef({
            y: 0,
        });
        console.log(x);

        return {
            x,
            person,
            ...toRefs(person),
        };
    },
};
</script>
