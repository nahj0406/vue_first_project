<script setup lang="ts">
   
</script>

<template>
   <div class="list">
      돌아와요 카바니
      <RouterLink to="/Counter">카운터 만들기</RouterLink>
      <RouterLink to="/TextLeader">글자 수 표시</RouterLink>
   </div>
</template>


<style scoped>
   .list {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
   }
</style>