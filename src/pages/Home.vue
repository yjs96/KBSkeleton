<template>
  <Main :padded="true">
    <div class="upper-bar">
      <div class="user-name-frame">
        <span>박소해</span>
        <span class="weight-regular">님</span>
        <i class="fa solid fa-chevron-right"></i>
      </div>
      <div class="profile-frame">프사</div>
    </div>
    <div class="month">
      <span>{{ month }}월</span>
      <i class="fa-solid fa-caret-down"></i>
    </div>
    <div class="income-frame">
      <ShadowBox :height="124">
        <div class="income-subtext">전월 대비 3%증가</div>
        <div class="income">총 수입</div>
        <div class="income-amount">500,000원</div>
      </ShadowBox>
      <ShadowBox :height="124">
        <div class="income-subtext">전월 대비 3%증가</div>
        <div class="income">총 지출</div>
        <div class="income-amount">500,000원</div>
      </ShadowBox>
    </div>
    <ShadowBox :height="100">
      <div class="add-new">
        <div class="profile-frame">
          <i class="fa-solid fa-plus" style="margin: 0 0 0 1px"></i>
        </div>
        <div>새로운 내역 추가</div>
      </div>
    </ShadowBox>
    <ShadowBox>
      <div class="latest-upper">
        <div class="income">최근 내역</div>
        <i class="fa solid fa-chevron-right"></i>
      </div>
      <History />
      <History />
      <History />
      <History />
      <History />
    </ShadowBox>
    <ShadowBox :height="120">
      <div class="income-subtext">이번달 가장 큰</div>
      <div class="income">단일 지출</div>
      <div class="income-amount">500,000원</div>
    </ShadowBox>
    <ShadowBox :height="120">
      <div class="income-subtext">이번달 가장 많은</div>
      <div class="income">지출처</div>
      <div class="income-amount">세종대 학식</div>
    </ShadowBox>
    <ShadowBox :height="120">
      <div class="income-subtext">이번달 가장 많은 지출</div>
      <div class="income">카테고리</div>
      <div class="income-amount">음식</div>
    </ShadowBox>
  </Main>
</template>

<script setup>
import Main from '@/components/Main.vue';
import ShadowBox from '@/components/ShadowBox.vue';
import History from '@/components/History.vue';

const date = new Date();
const month = date.getMonth() + 1;
</script>

<style scoped>
.upper-bar {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name-frame {
  font-size: 22px;
  display: flex;
  align-items: center;
}

i {
  font-size: 16px;
  margin: 0 2px 0 8px;
}

.profile-frame {
  width: 40px;
  height: 40px;
  background-color: var(--gray);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
}

.month {
  margin-top: 16px;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.income-frame {
  display: flex;
  gap: 16px;
}

.income {
  font-size: 18px;
}

.income-amount {
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-size: 20px;
}

.income-subtext {
  font-size: 12px;
  font-weight: 400;
  color: var(--dark-gray);
  margin-bottom: -1px;
}

.latest-frame {
  margin-top: 16px;
}

.latest-upper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-new {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 8px;
}
</style>
