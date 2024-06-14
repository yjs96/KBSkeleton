<template>
  <MemoModal v-if="showModal" @close-modal="handleShowModal" />

  <Main :padded="false" style="background-color: var(--gray)">
    <div class="calender-warpper">
      <Calender />
      <div class="daily-history-warpper">
        <!-- 하루 지출 금액 -->
        <div class="daily-history-month">
          <div class="daily-month">
            <span>{{ selectedDay }}</span>
          </div>
          <!-- memo 모달 클릭  -->
          <!-- <div>
            <i @click="handleShowModal(true)" class="fa-solid fa-envelope"></i>
          </div> -->
          <div class="daily-spend">
            <span class="daily-income">{{ selectedDateHistory.incomeSum ? `+ ${addComma(selectedDateHistory.incomeSum)}` : 0 }}원</span> |
            <span class="daily-outcome">{{ selectedDateHistory.outcomeSum ? `-${addComma(selectedDateHistory.outcomeSum)}` : 0 }}원</span>
          </div>
        </div>
        <!-- 필터링될 History -->
        <div>
          <div class="daily-filter-spend">
            <div v-if="selectedDateHistory.incomeSum === 0 && selectedDateHistory.outcomeSum === 0">내역이 없습니다</div>
            <div v-else>
              <History v-for="history in selectedDateHistory.history" :value="history" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script setup>
import Calender from '@/components/Calender.vue';
import History from '@/components/History.vue';
import Main from '@/components/Main.vue';
import MemoModal from '@/components/MemoModal.vue';

import { computed, ref, watch } from 'vue';
import moment from 'moment';
import { useHistoryStore } from '@/stores/history';

const historyStore = useHistoryStore();

const { addComma } = historyStore;

const selectedDateHistory = computed(() => historyStore.selectedDateHistory);
const selectedDate = computed(() => historyStore.selectedDate);
const selectedDay = computed(() => `${moment(selectedDate.value).format('M')}월 ${moment(selectedDate.value).format('D')}일`);

const showModal = ref(false);
const tempObj = ref({
  id: 40,
  memo: '서브웨이',
  category: '식비',
  type: 'outcome',
  amount: 9900,
  date: '2024-04-08',
  done: 'TRUE',
});

const handleShowModal = (val) => {
  showModal.value = val;
};
</script>

<style scoped>
.calender-warpper {
  /* 기본 css */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 추가 */
  height: 100%;
}
.daliy-history-warpper {
  border: 1px solid var(--red);
  padding-bottom: 20px;
}
.daily-history-month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  background-color: var(--white);
  padding: 0px 5.56%;
  margin-top: 16px;
  border-bottom: 1px solid var(--gray);
}
.daily-month {
  color: var(--black);
  font-size: 26px;
}

.daily-spend {
  font-size: 16px;
}
.daily-income {
  color: var(--blue);
}
.daily-outcome {
  color: var(--red);
}
.divider {
  border: 0.5px solid var(--dark-gray);

  width: 100%;
}
.daily-filter-spend {
  /* border: 1px solid red; */
  text-align: left;
  position: relative;
  width: 100%;
  padding: 20px 5.56%;
  background-color: var(--white);
}

.daily-filter-spend :first-child {
  margin-top: 0px;
}

/* memo 모달  */
.fa-envelope {
  font-size: 24px;
  color: var(--green);
  transition: all 0.1s ease-out;
}
.fa-envelope:hover {
  color: var(--red);
}
.fa-envelope:active {
  transform: scale(0.7);
}
</style>
