<template>
  <div class="chart-frame">
    <canvas ref="lineChartCanvas" height="252"></canvas>
  </div>
  <div class="category-container">
    <div class="category-frame" @click="selectTab('수입')">
      <div class="category-icon">
        <CategoryIcon :class="{ 'selected-tab-image': selectedTab === '수입' }" :category="incomeTab.category" :width="60" />
      </div>
      <div class="category-name" :class="{ 'selected-tab-text': selectedTab === '수입' }">
        {{ incomeTab.category }}
      </div>
    </div>
    <div class="divide-bar"></div>
    <div class="category-frame" v-for="(tab, index) in outcomeList" :key="index" @click="selectTab(tab.category)">
      <div class="category-icon">
        <CategoryIcon :class="{ 'selected-tab-image': selectedTab === tab.category }" :category="tab.category" :width="60" />
      </div>
      <div :class="{ 'selected-tab-text': selectedTab === tab.category }" class="category-name">
        {{ tab.category }}
      </div>
    </div>
  </div>
  <div class="monthlyinout">
    <div class="june">
      <div>이전 달 대비</div>
      <select v-model="month" class="month-select">
        <option value="1">1월</option>
        <option value="2">2월</option>
        <option value="3">3월</option>
        <option value="4">4월</option>
        <option value="5">5월</option>
        <option value="6">6월</option>
      </select>
    </div>
    <div class="inout">
      <div class="income">수입</div>
      <div>
        <div class="times">{{ comparisonPrev.incomeCountDiff }}회</div>
        <div class="total" :class="greenOrRed(comparisonPrev.incomeSumDiff)">{{ addPlusComma(comparisonPrev.incomeSumDiff) }}원</div>
        <div class="total" :class="greenOrRed(comparisonPrev.incomeSumDiff)">{{ addPlusComma(comparisonPrev.incomeGrowthRate) }}%</div>
      </div>
    </div>
    <div class="inout">
      <div class="income">지출</div>
      <div>
        <div class="times">{{ comparisonPrev.outcomeCountDiff }}회</div>
        <div class="total" :class="redOrGreen(comparisonPrev.outcomeSumDiff)">{{ addPlusComma(comparisonPrev.outcomeSumDiff) }}원</div>
        <div class="total" :class="redOrGreen(comparisonPrev.outcomeSumDiff)">{{ addPlusComma(comparisonPrev.outcomeGrowthRate) }}%</div>
      </div>
    </div>
    <div class="detail-container" :style="hideDetail ? { height: '0px' } : { height: '379px' }">
      <div class="inout" v-for="category in comparisonPrev.categoryComparison">
        <div class="income">{{ category.category }}</div>
        <div>
          <div class="times">{{ category.countDiff }}회</div>
          <div class="total" :class="redOrGreen(category.sumDiff)">{{ addPlusComma(category.sumDiff) }}원</div>
          <div class="total" :class="redOrGreen(category.growthRate)">{{ addPlusComma(category.growthRate) }}%</div>
        </div>
      </div>
    </div>
    <div class="inout-detail">
      <div v-if="hideDetail">
        <span class="detail" @click="handleDetail(false)">자세히 &nbsp;</span>
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <div v-else>
        <span class="detail" @click="handleDetail(true)">간략히 &nbsp;</span>
        <i class="fa-solid fa-caret-up"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import { useHistoryStore } from '@/stores/history';

import CategoryIcon from './CategoryIcon.vue';

const date = new Date();
const month = ref(date.getMonth() + 1);

const selectedTab = ref('noTab');
const hideDetail = ref(true);

const handleDetail = (val) => {
  hideDetail.value = val;
};

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

const historyStore = useHistoryStore();

const { getAmountsByMonthAndCategory, getComparisonWithPreviousMonth, addPlusComma } = historyStore;
const amountsByMonthAndCategory = ref(getAmountsByMonthAndCategory());
const comparisonPrev = ref(getComparisonWithPreviousMonth(month.value));
const greenOrRed = (num) => {
  if (num >= 0) {
    return 'text-green';
  } else {
    return 'text-red';
  }
};

const redOrGreen = (num) => {
  if (num < 0) {
    return 'text-green';
  } else {
    return 'text-red';
  }
};

watch(month, () => {
  comparisonPrev.value = getComparisonWithPreviousMonth(month.value);
});

Chart.register(...registerables);

const lineChartCanvas = ref(null);
let chart = null;

const selectTab = (tab) => {
  selectedTab.value = selectedTab.value === tab ? 'noTab' : tab;
};

const getDatasetsArray = () => {
  const categoryMap = {
    noTab: {
      data: [amountsByMonthAndCategory.value.income, amountsByMonthAndCategory.value.outcome],
      colors: ['#FFCA67', '#CF55EE'],
      labels: ['수입', '지출 전체'],
    },
    수입: {
      data: [amountsByMonthAndCategory.value.income],
      colors: ['#FFCA67'],
      labels: ['수입'],
    },
    '지출 전체': {
      data: [amountsByMonthAndCategory.value.outcome],
      colors: ['#CF55EE'],
      labels: ['지출 전체'],
    },
    식비: {
      data: [amountsByMonthAndCategory.value.식비],
      colors: ['#44c4a1'],
      labels: ['식비'],
    },
    교통: {
      data: [amountsByMonthAndCategory.value.교통],
      colors: ['#ff553e'],
      labels: ['교통'],
    },
    문화: {
      data: [amountsByMonthAndCategory.value.문화],
      colors: ['#eeae55'],
      labels: ['문화'],
    },
    통신: {
      data: [amountsByMonthAndCategory.value.통신],
      colors: ['#64798a'],
      labels: ['통신'],
    },
    기타: {
      data: [amountsByMonthAndCategory.value.기타],
      colors: ['#569ddf'],
      labels: ['기타'],
    },
  };

  const selectedCategory = categoryMap[selectedTab.value];

  return selectedCategory.data.map((data, index) => ({
    label: selectedCategory.labels[index],
    data: data,
    borderColor: selectedCategory.colors[index],
    backgroundColor: selectedCategory.colors[index],
    tension: 0.4,
    fill: false,
  }));
};

watch(selectedTab, () => {
  createChart(getDatasetsArray());
});

const createChart = (data) => {
  if (chart) {
    chart.destroy();
  }

  const ctx = lineChartCanvas.value.getContext('2d');

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
      datasets: data,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
            color: '#727272',
            boxWidth: 8,
            boxHeight: 8,
            padding: 24,
            font: {
              family: 'Pretendard',
              size: 14,
              weight: 500,
            },
          },
        },
        title: {
          display: false,
          text: '',
        },
        tooltip: {
          enabled: false,
        },
        datalabels: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#727272',
            font: {
              family: 'Pretendard',
              size: 14,
              weight: 400,
            },
          },
        },
        y: {
          beginAtZero: false,
          ticks: {
            color: '#727272',
            font: {
              family: 'Pretendard',
              size: 11,
              weight: 400,
            },
          },
        },
      },
    },
  });
};

onMounted(() => {
  createChart(getDatasetsArray());
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
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.12);
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
  margin: 16px 0;
  background-color: var(--white);
  padding-bottom: 16px;
  font-size: 16px;
}

.june {
  border-bottom: 1px solid var(--gray);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 4.5% 0 5.56%;
  justify-content: space-between;
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

.month-select {
  background-color: transparent;
  border: 0 none;
  outline: 0 none;
}

.inout-detail {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 5.56%;
  margin-top: 16px;
  color: var(--dark-gray);
  font-size: 14px;
}

.detail-container {
  transition: height 0.8s ease;
  position: relative;
  overflow: hidden;
}
</style>
