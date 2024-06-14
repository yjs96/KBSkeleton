<template>
  <div class="spend-container">
    <div class="spend-content">
      <!-- <div class="isMemo" v-if="hasMemo">
        <i class="fa-solid fa-envelope"></i>
      </div> -->
      <div class="spend-smry">
        <!-- 수입이 있을 때만 표시 -->
        <div v-if="formattedIncome != '+0'" class="income">
          {{ formattedIncome }}
        </div>
        <!-- 지출이 있을 때만 표시 -->
        <div v-if="formattedOutcome" class="outcome">
          {{ formattedOutcome }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({
//   date: {
//     type: Date,
//     required: true,
//   },
// });
//--------- pinia store 가져오기----------------------
import { useHistoryStore } from '@/stores/history';
import { computed } from 'vue';

import { defineProps } from 'vue';

const props = defineProps({
  formattedIncome: {
    type: String,
    required: true,
  },
  formattedOutcome: {
    type: String,
    required: true,
  },
  hasMemo: {
    type: Boolean,
    required: true,
  },
});
const historyState = useHistoryStore();
const historyList = computed(() => historyState.historyList);

// console.log('special 컴포넌트');
// for (let i = 0; i < historyList.value.length; i++) {
//   console.log(
//     `test :${historyList.value[i].id}, ${historyList.value[i].type}, ${historyList.value[i].amount},${historyList.value[i].memo}`
//   );
// }

// ------------------------------
</script>

<style scoped>
.spend-container {
  display: flex;
  width: 100%;
  justify-content: center;
}
.spend-content {
  display: flex;
  width: 100%;
  justify-content: center;
}
.spend-smry {
  display: flex;
  flex-direction: column;
  /* padding-left: 10px; */
  width: 100%;
  text-align: center;
  height: 48px;
}
.income {
  color: var(--green);
  font-size: 0.5rem;
}
.outcome {
  color: var(--red);
  font-size: 0.5rem;
}
.isMemo {
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 30%;
  font-size: 0.5rem;
}
.fa-envelope {
  padding: 4px;
  font-size: 12px;
  color: var(--green);
}
/* 원하는 스타일을 추가하세요 */
</style>
