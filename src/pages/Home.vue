<template>
  <Main :padded="true">
    <div class="two">
      <ShadowBox>hello</ShadowBox>
      <ShadowBox></ShadowBox>
    </div>
  </Main>
</template>

<script setup>
import Main from '@/components/Main.vue';
import ShadowBox from '@/components/ShadowBox.vue';
</script>

<style scoped>
.two {
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}
</style>

<style></style>
