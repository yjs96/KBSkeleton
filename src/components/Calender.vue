<!-- <template>
  <div class="calendar-box">
    <VDatePicker
      v-model="date"
      color="purple"
      :theme-styles="{ dayHeight: '100px', dayWidth: '60px' }"
      borderless
      :attributes="attrs"
      class="calendar-content custom-width-height"
      @input="logDate"
    >
      <template #day="{ date: dayDate }">
        <div class="custom-day" @click="selectDate(dayDate)">
          <div>{{ dayDate.getDate() }}</div>
          <div v-if="isSpecialDate(dayDate)" class="custom-component">
            <SpecialComponent />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="today-wrapper-btn">
          <button class="today-btn" @click="setToday">Today</button>
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SpecialComponent from './SpecialComponent.vue'; // 커스텀 컴포넌트 임포트

const date = ref(new Date());
console.log('date',date);
function setToday() {
  date.value = new Date();
  console.log(date.value);
}

const logDate = (selectedDate) => {
  console.log('Selected date:', selectedDate);
};

const selectDate = (selectedDate) => {
  date.value = selectedDate;
  console.log('Selected date:', selectedDate);
};

const isSpecialDate = (date) => {
  // 특정 날짜를 확인하는 로직을 여기에 추가
  // 예를 들어, 매달 15일을 특별한 날짜로 설정
  return date.getDate() === 15;
};

onMounted(() => {
  console.log('Calendar mounted');
  console.log(date);
});

onBeforeUnmount(() => {
  console.log('Calendar will unmount');
  console.log(date);
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
</script>

<style scoped>
.calendar-box {
  width: 100%;
  background-color: white;
}

.custom-width-height {
  width: 80% !important;
  height: auto;
}

.today-btn {
  background-color: var(--gray);
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 5px 10px;
  margin-top: 10px;
}

.today-wrapper-btn {
  margin-bottom: 20px;
}

.custom-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 클릭할 수 있다는 것을 사용자에게 시각적으로 표시 */
}

.custom-component {
  margin-top: 5px;
  background-color: lightblue;
  border-radius: 5px;
  padding: 2px 5px;
}

/* 네비게이션 바의 화살표 버튼 스타일 */
.vdp-nav-button {
  background-color: var(--white) !important;
}

/* 월과 연도가 보이는 버튼 스타일 */
.vdp-header {
  background-color: var(--white) !important;
}

/* CSS 변수 정의 */
:root {
  --white: #fdfdfd;
}
</style> -->
<template>
  <div class="calendar-box">
    <div class="calendar-controls">
      <button @click="prevMonth">이전</button>
      <span>{{ currentYear }}년 {{ currentMonth + 1 }}월</span>
      <button @click="nextMonth">다음</button>
    </div>
    <div class="calendar-grid">
      <div class="calendar-day" v-for="day in daysInMonth" :key="day">
        <div @click="selectDate(day)">
          <div>{{ day.getDate() }}</div>
          <div v-if="isSpecialDate(day)" class="custom-component">
            <SpecialComponent />
          </div>
        </div>
      </div>
    </div>
    <div class="today-wrapper-btn">
      <button class="today-btn" @click="setToday">Today</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SpecialComponent from './SpecialComponent.vue';

const currentDate = ref(new Date());
const selectedDate = ref(null);

const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());

const daysInMonth = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
});

const setToday = () => {
  currentDate.value = new Date();
};

const selectDate = (date) => {
  selectedDate.value = date;
  console.log('Selected date:', date);
};

const isSpecialDate = (date) => {
  return date.getDate() === 15;
};

const prevMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};
</script>

<style scoped>
.calendar-box {
  width: 100%;
  background-color: white;
  padding: 20px;
}

.calendar-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.calendar-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  cursor: pointer;
}

.custom-component {
  margin-top: 5px;
  background-color: lightblue;
  border-radius: 5px;
  padding: 2px 5px;
}

.today-btn {
  background-color: var(--gray);
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 5px 10px;
  margin-top: 10px;
}

.today-wrapper-btn {
  margin-top: 20px;
  text-align: center;
}

:root {
  --white: #fdfdfd;
  --gray: #888;
}
</style>
