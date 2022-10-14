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
import { ref, reactive, watch } from 'vue';
export default {
    name: 'TestDemo',
    setup() {
        let sum = ref(0);
        let msg = ref('hello world');
        let person = reactive({
            name: 'isYangs',
            age: 18,
            job: {
                j1: {
                    salary: 1000,
                },
            },
        });

        // 情况一：监视ref所定义的一个响应式数据
        /* watch(
            sum,
            (newVal, oldVal) => {
                console.log('sum发生了变化', newVal, oldVal);
            },
            { immediate: true }
        ); */

        // 情况二：监视ref所定义的多个响应式数据
        /* watch(
            [sum, msg],
            (newVal, oldVal) => {
                console.log('sum发生了变化', newVal, oldVal);
            },
            { immediate: true }
        ); */

        /* 
        情况三：reactive所定义的一个响应式数据中的全部属性
            1、注意：此处无法正确的获取oldValue
            2、注意：强制开启了深度监视（deep配置无效）
        */
        /* watch(
            person,
            (newVal, oldVal) => {
                console.log('person发生了变化', newVal, oldVal);
            },
            { deep: false } // 此处的deep配置无效
        ); */

        // 情况四：reactive所定义的一个响应式数据中的某个属性
        /* watch(
            () => person.age,
            (newVal, oldVal) => {
                console.log('person的age发生了变化', newVal, oldVal);
            }
        ); */

        // 情况五：监视reactive所定义的一个响应式数据中的某些属性
        /* watch(
            () => [person.name, person.age],
            (newVal, oldVal) => {
                console.log('person的name或age发生了变化', newVal, oldVal);
            }
        ); */

        // 特殊情况
        watch(
            () => person.job,
            (newVal, oldVal) => {
                console.log('person的age发生了变化', newVal, oldVal);
            },
            { deep: true } // 此处由于监视的是reactive所定义的对象的某个属性，所以deep配置有效
        );

        return {
            sum,
            msg,
            person,
        };
    },
};
</script>
