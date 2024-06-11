<template>
  <div class="chart-frame">
    <!-- 여기에 차트가 들어갈겁니다 -->
  </div>
  <div class="category-container">
    <div class="cateogry-frame">
      <div class="container">
        <div class="icon">
          <img
            src="https://placehold.co/64x64"
            style="border-radius: 50%"
            alt="icon"
          />
        </div>
        <div class="data">
          <div class="data_top">
            <div class="data_top_left">
              <div class="category">
                <b>쇼핑</b>
              </div>
              <div class="percentage">80.00%</div>
            </div>
            <div class="data_top_right">
              <div class="cost">120,000원</div>
            </div>
          </div>
          <div class="data_bottom">
            <div class="bar"></div>
          </div>
        </div>
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
  background-color: var(-grey);
  margin-top: 16px;
  padding: 10px 24px;
}

.container {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid var(--gray);
}
.icon {
  margin-right: 10px;
}
.data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50px;
}
.data_top {
  display: flex;
  justify-content: space-between;
  height: 50%;
}
.data_top_left {
  display: flex;
}
.data_top_right {
}
.data_bottom {
  width: 100%;
  height: 100%;
  display: flex;
}
.bar {
  width: 80%;
  height: 50%;
  background-color: var(--green);
  margin: 4px 5px;
  border-radius: 50px;
}
.category {
  margin: 0 5px;
}
.percentage {
  margin: 0 5px;
  color: var(--dark-gray);
}
.cost {
  color: var(--dark-gray);
}
</style>
