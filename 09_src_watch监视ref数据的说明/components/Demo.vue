<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前的信息为:{{ msg }}</h2>
    <button @click="msg += '!'">点击改变信息</button>
    <hr />
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>薪水：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary += 1000">增加薪水</button>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    name: 'TestDemo',
    setup() {
        let sum = ref(0);
        let msg = ref('hello world');
        let person = ref({
            name: 'isYangs',
            age: 18,
            job: {
                j1: {
                    salary: 1000,
                },
            },
        });

        watch(sum, (newVal, oldVal) => {
            console.log('sum发生了变化', newVal, oldVal);
        });

        watch(
            person,
            (newVal, oldVal) => {
                console.log('person发生了变化', newVal, oldVal);
            },
            { deep: true }
        );

        return {
            sum,
            msg,
            person,
        };
    },
};
</script>
