<template>
    <h1>一个人的信息</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>工作种类:{{ job.type }}</h2>
    <h2>工作薪资：{{ job.salary }}</h2>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'App',
    setup() {
        let name = ref('isYangs');
        let age = ref(18);
        let job = ref({
            type: '前端工程师',
            salary: 10000,
        });

        const changeInfo = () => {
            name.value = 'Young';
            age.value = 20;
            job.value.type = '后端工程师';
            job.value.salary = 20000;
        };

        return {
            name,
            age,
            job,
            changeInfo,
        };
    },
};
</script>
