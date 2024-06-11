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
  <div class="monthlyinout">
    <div class="june">6월</div>
    <div class="inout">
      <div class="income">수입</div>
      <div>
        <div class="times">6회</div>
        <div class="total">+500000원</div>
      </div>
    </div>
    <div class="inout">
      <div class="income">지출</div>
      <div>
        <div class="times">6회</div>
        <div class="total">+500000원</div>
      </div>
    </div>

    <div class="inout">
      <div class="outcome">지출</div>
      <div>
        <div class="times">120회</div>
        <div class="total">-1500000원</div>
      </div>
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

.monthlyinout {
  margin-top: 16px;
  background-color: var(--white);
}
.june {
  border-bottom: 1px solid var(--gray);
  /* padding: 1px 0; */
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 24px;
}
.inout {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
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
}

.total {
  text-align: right;
}
</style>
