<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped></style>

<style>
/* Pretendard */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');

#app {
  position: relative;
  margin: 0 auto;
  height: 100dvh;
  min-width: 296px;
  max-width: 600px;
  background-color: var(--white);
  /* padding-top: env(safe-area-inset-top); */
}

body {
  background-color: var(--white);
}

* {
  font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

  --gray900: #191f28;
  --gray500: #99a2ad;
  --gray400: #bcc3c9;
  --white: #fdfdfd;
  --border: #e5e8eb;
}
</style>
