<template>
  <div class="overlay">
    <div class="modal-container">
      <div class="close-frame">
        <i @click="closeModal" class="fa-solid fa-xmark"></i>
      </div>
      <div class="memo-container">
        <div class="memo-label">2024-06-12</div>
        <div class="type-memo-frame">
          <div class="memo selected">여기에 메모를 넣을 거야</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
import { ref, defineEmits } from 'vue';

//--------- pinia store 가져오기-------------------------
import { useHistoryStore } from '@/stores/history';

const historyState = useHistoryStore();

// const { historyList } = historyState;
const { fetchHistory } = historyState;
const historyList = computed(() => historyState.historyList);

// console.log('22222222', historyList.value[1]); // {id: '2', memo: 'KT CCTV', category: '통신', type: 'outcome', amount: 20000, …}

// ------------------------------

const date = moment();

const selectedAmount = ref();
const selectedMemo = ref('');
const selectedDate = ref(date.format('YYYY-MM-DD'));
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  position: relative;
  background-color: var(--white);
  outline: 1px solid var(--gray); /** 선택 */
  width: 80%;
  border-radius: 8px;
  padding: 16px;
  padding-bottom: 20px;
}
/* close 버튼 */
.close-frame {
  width: 100%;
  text-align: end;
  font-size: 20px;
}
/* memo 컨테이너 */
.memo-container {
  /* margin-top: 16px; */
}

/* 날짜  */
.memo-label {
  /* font-size: 12px; */
  color: var(--dark-gray);
  font-weight: bold;
  margin-bottom: 4px;
}

/* memo */
.memo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  /* border: 1px solid var(--dark-gray); */
  border-radius: 10px;
  background-color: var(--gray);
}
</style>
