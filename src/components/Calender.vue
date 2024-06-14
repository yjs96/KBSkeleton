<template>
  <div class="calendar-box">
    <div class="calendar-controls">
      <button class="chevron-icon" @click="prevMonth">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <span class="current-year">{{ currentYear }}년 {{ currentMonth + 1 }}월</span>
      <button class="chevron-icon" @click="nextMonth">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <div class="calendar-grid">
      <!-- 요일 헤더 -->
      <div class="calendar-header" v-for="(day, index) in weekDays" :key="index">
        {{ day }}
      </div>
      <!-- 날짜 렌더링 -->
      <div class="calendar-day" v-for="day in daysGrid" :key="day.date ? day.date.toString() : Math.random()">
        <!-- 날짜 컨텐츠 전체  -->
        <div class="daily-today-contents">
          <div @click="selectDate(day.date)" :class="{ 'non-current-month': !day.isCurrentMonth }">
            <!-- today 숫자 -->
            <div class="daily-today" :class="moment(day.date).format('YYYY-MM-DD') === piniaDate ? 'day-selected' : ''">
              {{ day.date ? day.date.getDate() : '' }}
            </div>
          </div>
          <!-- mome + income, outcome -->
          <div v-if="day.isCurrentMonth && hasHistoryForDate(day.date)" class="custom-component">
            <SpecialComponent
              :date="moment(day.date).format('YYYY-MM-DD')"
              :formattedIncome="getFormattedIncome(day.date)"
              :formattedOutcome="getFormattedOutcome(day.date)"
              :hasMemo="hasMemoForDate(day.date)"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 클릭 하면 현재 날짜가 포커스 되도록 하려는데 아직 안 해봄. -->
    <div class="today-wrapper-btn">
      <button class="today-btn" @click="setToday">Today</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import SpecialComponent from './SpecialComponent.vue';
import moment from 'moment';

// pinia store 가져오기
import { useHistoryStore } from '@/stores/history';

const historyState = useHistoryStore();

// const { historyList } = historyState;
const { totalByDaily, getHistoryByDate } = historyState;
const historyList = computed(() => historyState.historyList);
// console.log(historyList);
const piniaDate = computed(() => historyState.selectedDate);

const sortedByDay = ref(totalByDaily());

// console.log(sortedByDay.value);
// ------------------------------
const currentDate = ref(new Date());
const selectedDate = ref(null);
// console.log(currentDate.value);

const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

const daysGrid = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const date = new Date(year, month, 1);
  const days = [];

  // 이전 달의 날짜 추가
  const prevMonthDays = [];
  const firstDayIndex = date.getDay();
  if (firstDayIndex > 0) {
    const prevMonth = new Date(year, month, 0);
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      prevMonthDays.push({ date: prevDate, isCurrentMonth: false });
    }
  }

  // 현재 달의 날짜 추가
  while (date.getMonth() === month) {
    days.push({ date: new Date(date), isCurrentMonth: true });
    date.setDate(date.getDate() + 1);
  }

  // 다음 달의 날짜 추가
  const nextMonthDays = [];
  const remainingDays = 7 - ((days.length + prevMonthDays.length) % 7);
  if (remainingDays < 7) {
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      nextMonthDays.push({ date: nextDate, isCurrentMonth: false });
    }
  }

  return [...prevMonthDays, ...days, ...nextMonthDays];
});

const setToday = () => {
  currentDate.value = new Date();
  selectedDate.value = moment(currentDate.value).format('YYYY-MM-DD');
};
// 오늘 날짜 : Thu Jun 20 2024 00:00:00 GMT+0900 (한국 표준시)
const selectDate = (date) => {
  selectedDate.value = date;
  const formattedDate = moment(date).format('YYYY-MM-DD');
  // console.log('Selected date:', formattedDate);
};

const hasHistoryForDate = (date) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  return historyList.value.some((history) => history.date === formattedDate);
};

const getFormattedIncome = (date) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  const totalIncome = historyList.value
    .filter((history) => history.date === formattedDate && history.type === 'income')
    .reduce((sum, history) => sum + Number(history.amount), 0);
  // console.log(`+${totalIncome.toLocaleString()}`);
  return `+${totalIncome.toLocaleString()}`;
};

const getFormattedOutcome = (date) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  const totalOutcome = historyList.value
    .filter((history) => history.date === formattedDate && history.type === 'outcome')
    .reduce((sum, history) => sum + history.amount, 0);
  return `-${totalOutcome.toLocaleString()}`;
};

const hasMemoForDate = (date) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  return historyList.value.some((history) => history.date === formattedDate && history.details && history.details.length > 0);
};
const isSpecialDate = (date) => {
  return date && date.getDate() === 10;
};

const prevMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

const momentCurrentDate = moment(currentDate).format('YYYY-MM-DD');

getHistoryByDate(momentCurrentDate);

watch(selectedDate, () => {
  getHistoryByDate(moment(selectedDate.value).format('YYYY-MM-DD'));
});
</script>

<style scoped>
.calendar-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 20px 0 0 0;
  width: 100%;
}

.calendar-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.chevron-icon {
  width: 30px;
  height: 30px;
  border: none;
  background-color: var(--white);
}

.fa-solid {
  font-weight: bold;
}

.current-year {
  font-weight: bold;
  color: var(--green);
  font-size: 24px;
  padding: 0px 24px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* gap: 10px; */
  width: 100%;
  position: relative;
  text-align: center;
}

/* 요일 */
.calendar-header {
  font-weight: bold;
  color: var(--dark-gray);
  width: 100%;
}
.daily-today-contents {
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px dotted var(--gray);
}
/* 날짜 한 칸 한 칸 */
.calendar-day {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 60px;
  width: 100%;
  cursor: pointer;
}

/* 날짜 클릭 시 */
.daily-today {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  /* border: 1px solid red; */
  border-radius: 20px;
}
.daily-today:hover {
  background-color: var(--green);
  box-shadow: 0 0 5px 1px var(--green); /* 하이라이트 효과 추가 */
}
.daily-today:active {
  background-color: var(--green);
}

.day-selected {
  background-color: var(--green);
}

.custom-component {
  display: flex;
  height: 100%;
}

.today-btn {
  background-color: var(--green);
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 5px 10px;
  margin-top: 10px;
  transition: background-color 0.2s ease;
}

.today-btn:hover {
  background-color: #28aa72;
}

.today-wrapper-btn {
  text-align: center;
  margin-bottom: 10px;
}

.non-current-month {
  color: var(--dark-gray);
}

/* :root {
  --white: #fdfdfd;
  --gray: #888;
  --green: #0f0;
  --dark-gray: #555;
} */
</style>
