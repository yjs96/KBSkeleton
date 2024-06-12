<template>
  <Main>
    <div class="head-bar-frame">
      <div class="head-bar">
        <div class="tab-selector">
          <div
            :class="selectedTab === 'left' ? 'tab tab-selected' : 'tab'"
            @click="tabHandler('left')"
          >
            월간
          </div>
          <div
            :class="selectedTab === 'right' ? 'tab tab-selected' : 'tab'"
            @click="tabHandler('right')"
          >
            월별
          </div>
        </div>
      </div>
    </div>
    <PieChart v-if="selectedTab === 'left'" />
    <LineChart v-else />
  </Main>
</template>

<script setup>
import Main from '@/components/Main.vue';
import PieChart from '@/components/PieChart.vue';
import LineChart from '@/components/LineChart.vue';
import { ref } from 'vue';

const selectedTab = ref('left');

const tabHandler = (tab) => {
  selectedTab.value = tab;
};
</script>

<style scoped>
.head-bar-frame {
  background-color: var(--white);
  padding: 16px 0 8px 0;
}

.head-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-selector {
  position: relative;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  border: 1px solid var(--gray);
  border-radius: 6px;
  padding: 12px 8px;
}

.tab {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  border-radius: 4px;
}

.tab-selected {
  background-color: var(--nav-gray);
}
</style>
