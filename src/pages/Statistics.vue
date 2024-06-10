<template>
  <Main :padded="true" class="CalenderWarpper">
    <Calender />
  </Main>
</template>

<script setup>
import Calender from "@/components/Calender.vue";
</script>

<style>
.CalenderWarpper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vc-container {
  width: 80% !important;
}
</style>
