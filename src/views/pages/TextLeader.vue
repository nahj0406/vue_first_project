<script setup lang="ts">
    import { ref, computed } from 'vue'

    const text = ref('')
    const count = computed(()=> text.value.length)
    const maxLength = 50


    const onInput = (event: Event) => {
        const textarea = event.target as HTMLTextAreaElement
        text.value = textarea.value.slice(0, maxLength)
    }

</script>

<template>
    <!-- @input="onInput" : input 이벤트가 발생하면 그 안에 함수를 실행하라. -->
    <section class="text_leader">
        <textarea :value="text" @input="onInput" placeholder="내용을 입력해 주세요" :maxlength="maxLength"></textarea>

        <div class="leader_action">
            <div class="top">
                <span>실시간 글자 수</span>
                <span id="text_counter" :class="{ max: maxLength <= count }">
                    {{ count }} / {{ maxLength }}
                </span>
            </div>

            <div id="leader_bar">
            </div>
        </div>

        <div class="preview_box">
            <span>미리보기</span>
            <p id="preview">{{ text.length > 0 ? text : '입력한 내용이 여기에 표시됩니다.' }}</p>
        </div>

        <button type="button" class="reset_btn" @click="text=''">초기화</button>
    </section>
</template>

<style scoped>
    .text_leader {
        margin: 10px;
        padding: 20px;
        border-radius: 20px;
        border: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;

        > * {
            width: 100%;
        }
    }

    textarea {
        border-color: #ccc;
        border-radius: 10px;
        min-height: 80px;
        padding: 10px;

        &:focus {
            outline-color: #41b883;
        }
    }

    .leader_action {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        font-size: 13px;
        color: #a0a0a0;

        .top {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            #text_counter.max {
                color: #ff0000;
            }
        }

        #leader_bar {
            width: 100%;
            border-radius: 100px;
            height: 5px;
            background: #ededed;
        }
    }

    .preview_box {
        margin-block: 10px;
        background: #ededed;
        border-radius: 10px;
        min-height: 50px;
        text-align: left;
        padding: 5px 10px;

        > span {font-size: 12px;}
        > p {
            margin-top: 10px;
            font-size: 14px; color: #222; font-weight: 500;
        }
    }

    .reset_btn {
        border-radius: 100px;
        background: #fff;
        border: 1px solid #ccc;
        padding: 10px 15px;
        color: #aaa;
        cursor: pointer;

        &:hover {
            border-color: #333;
            color: #333;
        }
    }
</style>