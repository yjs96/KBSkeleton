<template>
  <div class="category-container">
    <div class="cateogry-frame">
      <div class="container">
        <div class="category-icon">
          <CategoryIcon :category="category" :width="52" />
        </div>
        <div class="data">
          <div class="data_top">
            <div class="data_top_left">
              <span class="category">{{ category }}</span>
              <span class="percentage-text">{{ percentage }}%</span>
            </div>
            <div class="data_top_right">{{ sumAmount.toLocaleString() }}원</div>
          </div>
          <div class="data_bottom">
            <div
              class="bar"
              :style="{
                width: newWidth + '%',
                backgroundColor: newColor[0].color,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import CategoryIcon from './CategoryIcon.vue';

const colorList = [
  {
    category: '식비',
    color: 'rgba(68, 196, 161, 1)',
  },
  {
    category: '교통',
    color: 'rgba(255, 85, 62, 1)',
  },
  {
    category: '문화',
    color: 'rgba(238, 174, 85, 1)',
  },
  {
    category: '통신',
    color: 'rgba(100, 121, 138, 1)',
  },
  {
    category: '기타',
    color: 'rgba(86, 157, 223, 1)',
  },
];

const props = defineProps({
  category: {
    type: String,
    default: true,
  },
  sumAmount: {
    type: Number,
    default: true,
  },
  percentage: {
    type: Number,
    default: true,
  },
});

const newWidth = ref(0);

const changeWidth = () => {
  setTimeout(() => {
    newWidth.value = props.percentage;
  }, 10);
};
changeWidth();

const newColor = computed(() => {
  return colorList.filter((item) => item.category === props.category);
});
</script>

<style scoped>
.category-container {
  background-color: var(--white);
  padding: 10px 5.56% 0px 5.56%;
}

.container {
  position: relative;
  display: flex;
  width: 100%;
  padding: 16px 0 26px 0;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  gap: 8px;
}

.category-icon {
  width: 52px;
  height: 52px;
  background-color: var(--gray);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.data {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 68px);
  gap: 6px;
}

.data_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data_top_left {
  display: flex;
  align-items: center;
}

.data_top_right {
  font-size: 15px;
  color: var(--dark-gray);
  font-weight: 400;
}

.data_bottom {
  margin-bottom: 6px;
}
.bar {
  width: 0%;
  transition: width 0.8s ease;
  height: 8px;
  background-color: var(--green);
  border-radius: 16px;
}
.category {
  font-size: 16px;
  margin-right: 6px;
}
.percentage-text {
  font-size: 14px;
  font-weight: 400;
  color: var(--dark-gray);
}
</style>
