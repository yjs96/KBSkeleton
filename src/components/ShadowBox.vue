<template>
  <div class="shadow-box" :style="{ height: height + 'px' }">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  height: {
    type: Number,
    required: false,
  },
});
</script>

<style scoped>
.shadow-box {
  position: relative;
  background-color: var(--white);
  width: 100%;
  /* height: 100%; */
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
}
</style>
