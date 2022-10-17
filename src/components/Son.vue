<template>
    <div class="son">
        <h3>我是Son组件（孙）,{{ car.brand }}--{{ car.price }}</h3>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
    name: '-Son',
    setup() {
        let car = inject('car');
        return { car };
    },
};
</script>

<style>
.son {
    background-color: orange;
    padding: 10px;
}
</style>
