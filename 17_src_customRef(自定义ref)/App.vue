<template>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef } from 'vue';
export default {
    name: 'App',
    setup() {
        // 自定义一个ref——名为：myRef
        const myRef = (value, delay) => {
            let timer;
            return customRef((track, trigger) => {
                return {
                    get() {
                        console.log('get', value);
                        track(); // 通知Vue追踪value的变化（提前和get商量一下，让他认为是有用的）
                        return value;
                    },
                    set(newValue) {
                        console.log('set', newValue);
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger(); // 通知Vue去重新解析模板
                        }, delay);
                    },
                };
            });
        };

        // let keyWord = ref('Hello'); // 使用Vue提供的ref
        let keyWord = myRef('Hello', 500); // 使用自定义的ref

        return {
            keyWord,
        };
    },
};
</script>
