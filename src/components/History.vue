<template>
  <div class="history-frame">
    <div class="history-left">
      <div class="category-icon">
        <CategoryIcon :category="value.category" :width="44" />
      </div>
      <div class="history-info-frame">
        <span class="history-name">{{ value.memo }}</span>
        <span class="history-time">
          {{ moment(value.date, 'YYYY-MM-DD').format('YY. M. D') }}
          <span style="font-size: 11px">&nbsp;|&nbsp;</span>
          {{ value.category }}
        </span>

      </div>
    </div>
    <div class="history-right">
      <span>{{ addSymbolComma(value.amount, value.type) }}원</span>
    </div>
  </div>
</template>

<script setup>
import { useHistoryStore } from '@/stores/history';
import { defineProps } from 'vue';
import moment from 'moment';

import CategoryIcon from './CategoryIcon.vue';

const historyStore = useHistoryStore();

const { addSymbolComma } = historyStore;

const props = defineProps({
  value: {
    type: Object,
    require: true,
  },
});
</script>

<style>
.history-frame {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.history-left {
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

.history-info-frame {
  margin-left: 8px;
  display: flex;
  flex-direction: column;
}

.history-name {
  font-size: 16px;
}

.history-time {
  font-size: 12px;
  font-weight: 400;
  color: var(--dark-gray);
}
</style>
