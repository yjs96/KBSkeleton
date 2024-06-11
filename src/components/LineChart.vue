<template>
  <div class="chart-frame">
    <!-- 여기에 차트가 들어갈겁니다 -->
  </div>
  <div class="category-container">
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
    <div class="category-frame">
      <div class="category-icon">이미지</div>
      <div class="category-name">수입1</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.chart-frame {
  background-color: var(--red);
  height: 280px;
}

.category-container {
  background-color: var(--blue);
  margin-top: 16px;
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
}

.category-frame {
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
