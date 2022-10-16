<template>
    <h4>当前的求和为：{{ sum }}</h4>
    <button @click="sum++">点我++1</button>
    <hr />
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪水：{{ job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary += 1000">增加薪水</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue';
export default {
    name: 'TestDemo',
    setup() {
        let sum = ref(0);
        let person = reactive({
            name: 'isYangs',
            age: 18,
            job: {
                j1: {
                    salary: 1000,
                },
            },
        });

        // person = readonly(person);
        // person = shallowReadonly(person);
        // sum = readonly(sum);
        // sum = shallowReadonly(sum);


        return {
            sum,
            ...toRefs(person),
        };
    },
};
</script>
