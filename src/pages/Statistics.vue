<template>
  <Main :padded="false" class="CalenderWarpper">
    <Calender />
    <History />
  </Main>
</template>

<script setup>
import Calender from "@/components/Calender.vue";
import History from "@/components/History.vue";
</script>

<style>
.CalenderWarpper {
  /* 기본 css */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 추가 */
  background-color: var(--gray);
}
</style>
