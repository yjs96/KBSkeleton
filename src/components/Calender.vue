<template>
  <div class="container">
    <VDatePicker v-model="date" color="indigo">
      <template #footer>
        <div class="w-full px-3 pb-3">
          <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full px-3 py-1 rounded-md"
            @click="setToday"
          >
            Today
          </button>
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 현재 날짜를 담을 ref
const date = ref(new Date());

// 'Today' 버튼 클릭 시 오늘 날짜로 설정하는 함수
function setToday() {
  date.value = new Date();
}

// 달력이 마운트된 후에 실행될 로직
import { onMounted } from "vue";
onMounted(() => {
  console.log("Calendar mounted");
});

// 달력이 언마운트되기 전에 실행될 로직
import { onBeforeUnmount } from "vue";
onBeforeUnmount(() => {
  console.log("Calendar will unmount");
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
