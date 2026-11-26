<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import { useTemplateRef } from 'vue';
    import { onMounted } from 'vue';

    const count = ref(0)

    const decrease = () => count.value--
    const increase = () => count.value++
    const reset = () => count.value = 0
    const msgRef = ref<HTMLDivElement | null>(null)
    
    // computed : 값이 변경될때마다 반응형 값으로부터 결과 계산

    const message = computed(()=> {
        if(count.value === 0 ) return ''
        if(count.value >= 10 ) return '10 이상입니다.' 
        if(count.value <= 10 ) return '10 이하입니다.' 
    })

    const msgClass = computed(()=> {
        if(count.value === 0) return ''
        return count.value >=10 ? 'plus' : 'minus'
    })

    // watch: 값이 바뀔 때 애니메이션 같은 동작을 실행할때 처리.
    // watch(감시할대상, 실행할함수, 옵션)

    watch(count, ()=> {
        msgRef.value?.animate(
            [
                {transform: 'translateY(0px)'},
                {transform: 'translateY(-3px)'},
            ],
            {
                duration: 250,
                easing: 'ease-out'
            }
        )
    }, {flush: 'post'})


    
    
    
</script>

<template>
    <section class="counter_body">
        <h1>현재 카운트</h1>
        <span id="count">{{count}}</span>
        <div class="btn_group">
            <button type="button" class="down" @click="decrease">-1</button>
            <button type="button" @click="reset">초기화</button>
            <button type="button" class="up" @click="increase">+1</button>
        </div>
        <div class="message" :class="msgClass" ref="msgRef">{{ message }}</div>
    </section>
</template>

<style scoped>
    h1 {font-size: 20px; font-weight: bold;}
    #count {margin-block: 10px; display: inline-block;}

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

            &:hover {
                border-color: #333;
                color: #333;
            }

            &.up:hover {
                border-color: #20e077;
                color: #20e077;
            }

            &.down:hover {
                border-color: #e02020;
                color: #e02020;
            }
        }
    }

    .message {margin-top: 10px;}

    .message.plus {color: #20e077;}
    .message.minus {color: #e02020;}

    .message.plus,
    .message.minus {
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: fit-content;
        margin-inline: auto;
        font-size: 16px;
    }
</style>