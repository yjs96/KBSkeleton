<template>
  <div class="calendar-box">
    <VDatePicker v-model="date" color="purple" borderless :attributes="attrs" style="width: 80% !important" class="calendar-content" @input="logDate">
      <template #footer>
        <div class="today-warpper-btn">
          <button class="today-btn" @click="setToday">Today</button>
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useScreens } from 'vue-screen-utils';

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const columns = mapCurrent({ lg: 1 }, 1);

// 현재 날짜를 담을 ref
const date = ref(new Date());
console.log(date);
// 'Today' 버튼 클릭 시 오늘 날짜로 설정하는 함수
function setToday() {
  date.value = new Date();
  console.log(date.value);
}
const logDate = (selectedDate) => {
  console.log('Selected date:', selectedDate);
};

// 달력이 마운트된 후에 실행될 로직
onMounted(() => {
  console.log('Calendar mounted');
});

// 달력이 언마운트되기 전에 실행될 로직
onBeforeUnmount(() => {
  console.log('Calendar will unmount');
});

const attrs = ref([
  {
    key: 'today',
    dates: new Date(),
    highlight: {
      color: 'purple',
      fillMode: 'outline',
    },
  },
]);
// ----------------------------
</script>

<style scoped>
.calendar-box {
  width: 100%;
  background-color: white;
}
.calender-content {
}
.custom-width-height {
  width: 80% !important;
  height: auto; /* 필요에 따라 높이를 지정 */
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.today-btn {
  background-color: var(--gray);
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 5px 10px;
  margin-top: 10px; /** 선택 */
}
.today-warpper-btn {
  margin-bottom: 20px;
}
</style>
