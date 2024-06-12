<template>
  <img
    v-if="category === '지출 전체'"
    src="/category_icon/pay.svg"
    alt="지출전체"
    :style="{ width: width + 'px' }"
  />
  <img
    v-else
    :src="getCategoryImgSrc(category)"
    :alt="category"
    :style="{ width: width + 'px' }"
  />
</template>
<script setup>
import { defineProps, computed } from 'vue';
import categoryList from '@/assets/category.json';

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: false,
  },
});

const getCategoryImgSrc = computed(() => {
  return (category) => {
    const found = categoryList.find((item) => item.name === category);
    return found ? found.imgSrc : '';
  };
});
</script>
<style></style>
