<template>
  <Main :padded="false" style="background-color: var(--gray)">
    <div class="calender-warpper">
      <Calender />
      <div class="daily-history-warpper">
        <!-- 하루 지출 금액 -->
        <div class="daily-history-month">
          <div class="daily-month">
            <span>10일(월)</span>
          </div>
          <div class="daily-spend">
            <span class="daily-income">+1000</span> |
            <span class="daily-outcome">-6000</span>
          </div>
        </div>
        <!-- 밑 줄 -->
        <div class="divider"></div>
        <!-- 필터링될 History -->
        <div>
          <div class="daily-filter-spend">
            <History />
            <History />
            <History />
            <History />
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script setup>
import Calender from '@/components/Calender.vue';
import History from '@/components/History.vue';
import Main from '@/components/Main.vue';
</script>

<style>
.calender-warpper {
  /* 기본 css */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 추가 */
  height: 100%;
}
.daliy-history-warpper {
  border: 1px solid var(--red);
  padding-bottom: 20px;
}
.daily-history-month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  background-color: var(--white);
  padding: 0px 30px;
  margin: 20px 0px;
}
.daily-month {
  color: var(--black);
  font-size: 26px;
}

.daily-spend {
  font-size: 16px;
}
.daily-income {
  color: var(--blue);
}
.daily-outcome {
  color: var(--red);
}
.divider {
  border: 0.5px solid var(--dark-gray);

  width: 100%;
}
.daily-filter-spend {
  /* border: 1px solid red; */
  text-align: left;
  position: relative;
  width: 100%;
  padding: 0px 24px;
  background-color: var(--white);
}
</style>
