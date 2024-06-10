<template>
  <div class="calender-box">
    <VDatePicker
      v-model="date"
      color="green"
      transparent
      borderless
      style="width: 80% !important"
      class="calender-content"
    >
      <template #footer>
        <div class="w-full px-3 pb-3">
          <button class="today-btn" @click="setToday">Today</button>
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// 현재 날짜를 담을 ref
const date = ref(new Date());

// 'Today' 버튼 클릭 시 오늘 날짜로 설정하는 함수
function setToday() {
  date.value = new Date();
}

// 달력이 마운트된 후에 실행될 로직
onMounted(() => {
  console.log("Calendar mounted");
});

// 달력이 언마운트되기 전에 실행될 로직
onBeforeUnmount(() => {
  console.log("Calendar will unmount");
});

// ----------------------------
</script>

<style scoped>
.calender-box {
  /* border: 1px solid red; */
}
.calender-content {
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.today-btn {
  background-color: grey;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 5px 10px;
  margin-top: 10px; /** 선택 */
}
</style>
