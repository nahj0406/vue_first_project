<script setup lang="ts">
    import {ref} from 'vue'
    import vueLogo from '../../assets/vue.svg'
</script>

<template>
    <header id="header">
        <div class="logo">
            <RouterLink to="/">
                <img :src="vueLogo" alt="">
            </RouterLink>
        </div>
    </header>
</template>

<style scoped>
    #header {
        width: 100%;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        border-radius: 0 0 3px 3px;
    }
</style>