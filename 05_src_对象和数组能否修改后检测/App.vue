<template>
    <h1>一个人的信息</h1>
    <h2 v-show="person.name">姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2 v-show="person.sex">性别:{{ person.sex }}</h2>
    <h2>工作种类:{{ person.job.type }}</h2>
    <h2>工作薪资：{{ person.job.salary }}</h2>
    <h2>爱好：{{ person.hobby }}</h2>
    <h2>测试的数据：{{ person.job.a.b.c }}</h2>
    <button @click="changeInfo">修改人的信息</button>
    <button @click="addSex">添加一个sex属性</button>
    <button @click="delName">删除一个name属性</button>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'App',
    setup() {
        let person = reactive({
            name: 'isYangs',
            age: 18,
            job: {
                type: '前端工程师',
                salary: 10000,
                a: {
                    b: {
                        c: 123,
                    },
                },
            },
            hobby: ['唱跳', 'Rap', '篮球'],
        });

        const changeInfo = () => {
            person.name = 'Young';
            person.age = 20;
            person.job.type = '后端工程师';
            person.job.salary = 20000;
            person.job.a.b.c = 999;
            person.hobby[0] = '写代码';
        };

        const addSex = () => {
            person.sex = '男';
        };

        const delName = () => {
            delete person.name;
        };

        return {
            person,
            changeInfo,
            addSex,
            delName,
        };
    },
};
</script>
