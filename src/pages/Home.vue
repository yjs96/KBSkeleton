<template>
  <AddModal v-if="showModal" @close-modal="handleShowModal" />
  <Main :padded="true">
    <div class="upper-bar">
      <div class="user-name-frame">
        <router-link to="/mypage">{{ userInfo.name }}</router-link>
        <span class="weight-regular">님</span>
        <i class="fa solid fa-chevron-right"></i>
      </div>
      <router-link to="/mypage" class="profile-frame">
        <img class="profile-image" :src="userInfo.profileImage" alt="" />
      </router-link>
    </div>
    <div class="month">
      <select v-model="month" class="month-select">
        <option value="1">1월</option>
        <option value="2">2월</option>
        <option value="3">3월</option>
        <option value="4">4월</option>
        <option value="5">5월</option>
        <option value="6">6월</option>
        <!-- <option value="7">7월</option>
        <option value="8">8월</option>
        <option value="9">9월</option>
        <option value="10">10월</option>
        <option value="11">11월</option>
        <option value="12">12월</option> -->
      </select>
    </div>
    <div class="income-frame">
      <ShadowBox :height="116">
        <div class="income">총 수입</div>
        <div class="income-amount">{{ addComma(totalIncomeByMonth(month)) }}원</div>
      </ShadowBox>
      <ShadowBox :height="116">
        <div class="income">총 지출</div>
        <div class="income-amount">{{ addComma(totalOutcomeByMonth(month)) }}원</div>
      </ShadowBox>
    </div>
    <ShadowBox :height="100" @click="handleShowModal(true)">
      <div class="add-new">
        <div class="profile-frame" style="background-color: #d6e8db">
          <img src="/icons/add_icon.svg" alt="" />
        </div>
        <div>새로운 내역 추가</div>
      </div>
    </ShadowBox>
    <ShadowBox>
      <div class="latest-upper">
        <div class="income">최근 내역</div>
        <router-link to="/statistics" class="fa solid fa-chevron-right"></router-link>
      </div>
      <History v-for="history in recentHistoryByMonth(month)" :value="history" />
    </ShadowBox>
    <ShadowBox :height="120">
      <div class="income-subtext">이번달 가장 큰</div>
      <div class="income">단일 지출</div>

      <div class="income-amount">{{ maxOutcomeByMonth(month) ? addComma(maxOutcomeByMonth(month).amount) : '' }}원</div>
    </ShadowBox>
    <ShadowBox :height="120">
      <div class="income-subtext">이번달 가장 많은</div>
      <div class="income">지출처</div>
      <div class="income-amount">{{ mostFrequentMemoByMonth(month) }}</div>
    </ShadowBox>
    <ShadowBox :height="120" style="margin-bottom: 16px">
      <div class="income-subtext">이번달 가장 많은 지출</div>
      <div class="income">카테고리</div>
      <div class="income-amount">{{ mostFrequentCategoryByMonth(month) }}</div>
    </ShadowBox>
  </Main>
</template>

<script setup>
import { computed, ref } from 'vue';

import { useHistoryStore } from '@/stores/history';
import { useUserInfoStore } from '@/stores/history';

import Main from '@/components/Main.vue';
import ShadowBox from '@/components/ShadowBox.vue';
import History from '@/components/History.vue';
import AddModal from '@/components/AddModal.vue';

const historyStore = useHistoryStore();
const userInfoStore = useUserInfoStore();

const {
  // fetchHistory,
  addComma,
  totalIncomeByMonth,
  totalOutcomeByMonth,
  recentHistoryByMonth,
  maxOutcomeByMonth,
  mostFrequentMemoByMonth,
  mostFrequentCategoryByMonth,
} = historyStore;
// const { fetchuserInfo } = userInfoStore;

// fetchHistory();
// fetchuserInfo();
const userInfo = computed(() => userInfoStore.userInfo);

const date = new Date();
const month = ref(date.getMonth() + 1);

const showModal = ref(false);

const handleShowModal = (val) => {
  showModal.value = val;
};
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

.profile-image {
  width: 40px;
  height: 40px;
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

.month-select {
  background-color: transparent;
  border: 0 none;
  outline: 0 none;
}
</style>
