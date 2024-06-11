<template>
  <div :class="padded ? 'padded main-frame ' : 'main-frame'">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  padded: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.main-frame {
  background-color: var(--background);
  position: absolute;
  width: 100%;
  height: calc(100% - 76px);
  overflow-x: hidden;
  overflow-y: scroll;
}

.padded {
  padding: 0px 5.56%;
}
</style>
