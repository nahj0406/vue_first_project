<script setup lang="ts">
    import { ref } from 'vue';

    const count = ref(0)

    const decrease = () => count.value--
    const increase = () => count.value++
    const reset = () => count.value = 0
    
</script>

<template>
    <section class="counter_body">
        <h1>현재 카운트</h1>
        <span id="count">{{count}}</span>
        <div class="btn_group">
            <button type="button" @click="decrease">-1</button>
            <button type="button" @click="reset">초기화</button>
            <button type="button" @click="increase">+1</button>
        </div>
        <div class="message"></div>
    </section>
</template>

<style scoped>
    h1 {
        
    }
    .btn_group {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        button {
            border-radius: 100px;
            border: 1px solid #e4e4e4;
            padding: 5px 15px;
            background: #fff;
            cursor: pointer;
        }
    }
</style>