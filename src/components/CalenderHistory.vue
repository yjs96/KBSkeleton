<template>
  <div class="calenderHistory-frame" v-for="daily in filteredDaily">
    <div class="calenderHistory-left">
      <div class="category-icon">
        <CategoryIcon :category="value.category" :width="44" />
        <CategoryIcon :width="44" />
      </div>
      <div class="calenderHistory-info-frame">
        <span class="calenderHistory-name"> {{ daily.memo }} </span>
        <span class="calenderHistory-time">
          {{ moment(daily.date, 'YYYY-MM-DD').format('YY. M. D') }}
          <span style="font-size: 11px">&nbsp;|&nbsp;</span>
          {{ daily.category }}
        </span>
      </div>
    </div>
    <div class="calenderHistory-right">
      <span>{{ addSymbolComma(daily.amount, daily.type) }} 원</span>
    </div>
  </div>
</template>

<script setup>
// import { useHistoryStore } from '@/stores/history';
import { defineProps, computed, ref, watch } from 'vue';
import { useHistoryStore } from '@/stores/history';
import moment from 'moment';

// import CategoryIcon from './CategoryIcon.vue';

// const historyStore = useHistoryStore();

// const { totalByDaily } = historyStore;

// console.log('totalByDaily', totalByDaily());

const historyStore = useHistoryStore();
const date = computed(() => historyStore.date);
console.log('date ㅋㅋ', date);

const { fetchHistory, totalByDaily, addSymbolComma } = historyStore;
const filteredDaily = ref({});
const totalByDailyObj = totalByDaily();
filteredDaily.value = totalByDailyObj[date];

console.log('totalByDaily', totalByDaily());
totalByDaily();
// history 날짜값 가져오기

const props = defineProps({
  value: {
    type: Object,
    require: true,
  },
});

watch(
  () => filteredDaily.value,
  (newDaily) => console.log(newDaily)
);
</script>

<style>
.calenderHistory-frame {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.calenderHistory-left {
  display: flex;
  align-items: center;
}

.category-icon {
  width: 44px;
  height: 44px;
  background-color: var(--gray);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.calenderHistory-info-frame {
  margin-left: 8px;
  display: flex;
  flex-direction: column;
}

.calenderHistory-name {
  font-size: 16px;
}

.calenderHistory-time {
  font-size: 12px;
  font-weight: 400;
  color: var(--dark-gray);
}
</style>
