<template>
  <div class="chart-frame">
    <canvas ref="lineChartCanvas"></canvas>
  </div>
  <div class="category-container">
    <div class="category-frame" @click="selectTab('수입')">
      <div class="category-icon">
        <CategoryIcon
          :class="{ 'selected-tab-image': selectedTab === '수입' }"
          :category="incomeTab.category"
          width="60"
        />
      </div>
      <div
        class="category-name"
        :class="{ 'selected-tab-text': selectedTab === '수입' }"
      >
        {{ incomeTab.category }}
      </div>
    </div>
    <div class="divide-bar"></div>
    <div
      class="category-frame"
      v-for="(tab, index) in outcomeList"
      :key="index"
      @click="selectTab(tab.category)"
    >
      <div class="category-icon">
        <CategoryIcon
          :class="{ 'selected-tab-image': selectedTab === tab.category }"
          :category="tab.category"
          width="60"
        />
      </div>
      <div
        :class="{ 'selected-tab-text': selectedTab === tab.category }"
        class="category-name"
      >
        {{ tab.category }}
      </div>
    </div>
  </div>
  <div class="monthlyinout">
    <div class="june">6월</div>
    <div class="inout">
      <div class="income">수입</div>
      <div>
        <div class="times">6회</div>
        <div class="total text-green">+500000원</div>
      </div>
    </div>
    <div class="inout">
      <div class="income">지출</div>
      <div>
        <div class="times">6회</div>
        <div class="total text-red">+500000원</div>
      </div>
    </div>
    {{ amountsByMonthAndCategory }}
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import { useHistoryStore } from '@/stores/history';

import CategoryIcon from './CategoryIcon.vue';

const selectedTab = ref('noTab');
const incomeTab = ref({
  category: '수입',
  selected: false,
});

const outcomeList = ref([
  {
    category: '지출 전체',
    selected: false,
  },
  {
    category: '식비',
    selected: false,
  },
  {
    category: '교통',
    selected: false,
  },
  {
    category: '문화',
    selected: false,
  },
  {
    category: '통신',
    selected: false,
  },
  {
    category: '기타',
    selected: false,
  },
]);

const selectTab = (tab) => {
  selectedTab.value = selectedTab.value === tab ? 'noTab' : tab;
};

const historyStore = useHistoryStore();

const { getAmountsByMonthAndCategory } = historyStore;
getAmountsByMonthAndCategory();


const newArray = computed(() => {
  if (selectTab === 'noTab') {
    return [
      [amountsByMonthAndCategory.value.income],
      [amountsByMonthAndCategory.value.outcome],
    ];
  } else if (selectTab === '지출 전체') {
    return [[amountsByMonthAndCategory.value.outcome], []];
  }
});

Chart.register(...registerables);

const lineChartCanvas = ref(null);
let chart = null;

const createChart = () => {
  if (chart) {
    chart.destroy();
  }

  const ctx = lineChartCanvas.value.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
      datasets: [
        {
          label: '수입',
          data: newArray[0],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          fill: false,
        },
        {
          label: '지출 전체',
          data: newArray[1],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: '월별 매출액 및 순이익',
        },
      },
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
};

onMounted(() => {});

onMounted(() => {
  createChart();
});

watch(selectedTab, () => {
  createChart();
});

watch(amountsByMonthAndCategory, () => {
  createChart();
});
</script>
<style scoped>
.chart-frame {
  background-color: var(--white);
  height: 320px;
  padding: 0 5.56%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-container {
  background-color: var(--white);
  margin-top: 16px;
  padding: 16px 5.56%;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  align-items: center;
}

.category-frame {
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.category-icon {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 8px;
}

.category-name {
  font-size: 12px;
}

.selected-tab-image {
  filter: brightness(0.88);
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

.selected-tab-text {
  font-weight: 650;
}

.divide-bar {
  width: 1px;
  height: 56px;
  margin: 0 2px;
  border-right: 1px solid var(--gray);
}

.monthlyinout {
  margin-top: 16px;
  background-color: var(--white);
  padding-bottom: 16px;
  font-size: 16px;
}

.june {
  border-bottom: 1px solid var(--gray);
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 5.56%;
}

.inout {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5.56%;
  margin-top: 16px;
}

.outout {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 16px;
}

.times {
  text-align: right;
  font-weight: 400;
}

.total {
  text-align: right;
  font-size: 13px;
  font-weight: 400;
}

.text-green {
  color: var(--green);
}

.text-red {
  color: var(--red);
}
</style>
