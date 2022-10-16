<template>
    <h4>当前的求和为：{{ sum }}</h4>
    <button @click="sum++">点我++1</button>
    <hr />
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪水：{{ job.j1.salary }}</h2>
    <h3 v-show="person.car">车辆信息:{{ person.car }}</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary += 1000">增加薪水</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一辆车</button>
    <button @click="person.car.name += '!'">换车名</button>
    <button @click="changePerson">换价格</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue';
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

        const showRawPerson = () => {
            const p = toRaw(person);
            console.log(p);
        };

        const addCar = () => {
            markRaw(
                (person.car = {
                    name: '奔驰',
                    price: 100000,
                })
            );
        };

        const changePerson = () => {
            person.car.price += 1000;
            console.log(person.car.price);
        };

        return {
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
            changePerson,
        };
    },
};
</script>
