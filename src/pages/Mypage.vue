<template>
  <div v-if="isModal" class="overlay">
    <div class="modal-container">
      <div class="close-frame">
        <i @click="closeModal" class="fa-solid fa-xmark"></i>
      </div>
      <div class="button-container">
        <div class="button-label">이름</div>
        <div class="select-box">
          <input class="memo-input" type="text" v-model="newName" />
        </div>
      </div>
      <div @click="changeName" class="add-button">프로필 편집</div>
    </div>
  </div>
  <Main :padded="true" class="mypage-wrapper">
    <!-- user header -->
    <div class="mypage-container">
      <div class="user-box" :class="incomeMonth >= outcomeMonth ? 'color-green' : ''" @click="changeText">
        <div class="user-content">
          <img class="profile-image" :src="userInfo.profileImage" alt="" />
          <div class="user-name-frame">
            <router-link to="/">{{ userInfo.name }}</router-link>
            <span class="weight-regular">님</span>
          </div>
        </div>
        <div class="user-text">
          <span> {{ changeText }} </span>
        </div>
      </div>
      <div class="mypage-menu">
        <div class="mypage-menu-box">
          <div @click="showModal" class="menu menu-1" :class="incomeMonth >= outcomeMonth ? 'color-green' : ''">프로필 편집</div>
          <div class="menu menu-2" :class="incomeMonth >= outcomeMonth ? 'color-green' : ''">도움말</div>
          <div class="menu menu-3" :class="incomeMonth >= outcomeMonth ? 'color-green' : ''">설정</div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script setup>
import { computed, ref } from 'vue';

import Main from '@/components/Main.vue';
import { useUserInfoStore, useHistoryStore } from '@/stores/history';

const date = new Date();
const month = date.getMonth() + 1;

const userInfoStore = useUserInfoStore();
const historyStore = useHistoryStore();

const { totalIncomeByMonth, totalOutcomeByMonth } = historyStore;
const { fetchuserInfo, changeUsername } = userInfoStore;
const isModal = ref(false);

const incomeMonth = ref(totalIncomeByMonth(month));
const outcomeMonth = ref(totalOutcomeByMonth(month));

const userInfo = computed(() => userInfoStore.userInfo);

const showModal = () => {
  isModal.value = true;
};

const closeModal = () => {
  isModal.value = false;
};

const newName = ref(userInfo.value.name);

const changeName = () => {
  // 프로필 변경
  changeUsername(newName.value);
  fetchuserInfo();
  closeModal();
};

const changeText = computed(() => {
  return incomeMonth.value >= outcomeMonth.value ? '열심히 절약하셨군요!' : '조금 더 절약할까요?';
});
</script>

<style scoped>
@font-face {
  font-family: 'HS-Regular';
  src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/HS-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.mypage-wrapper {
  display: flex;
  flex-direction: column;
  background-color: var(--gray);
}
.mypage-container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  height: 100%;
}

.user-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20%;
  /* font-weight: bold; */
  /* border: 1px solid red; */
  background-color: var(--red);
  border-radius: 10px;
  height: 100%;
  box-shadow: 5px 5px 7px 0px rgba(182, 182, 182, 0.645);
}
.user-text {
  position: absolute;
  /* border: 1px solid red; */
  width: 100%;
  height: 50%;
  /* background-color: var(--green); */
  /* background-color: var(--red); */
  font-size: 30px;
}

.user-text > span {
  font-family: 'HS-Regular';
}

.user-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -56%);
}
.profile-image {
  margin-top: 50px;
  border-radius: 50%;
  width: 70%;
}

.user-name-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: var(--black);
}

.user-name-frame > a {
  color: var(--black);
}
.mypage-menu {
  position: absolute;
  display: flex;
  justify-content: center;

  background-color: var(--white);
  width: 100%;
  height: 50%;
  top: 50%;
  border-radius: 0px 0px 10px 10px;
}
.mypage-menu-box {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 20px;
  width: 50%;
  height: 100%;
  gap: 14px;
}
.menu {
  width: 100%;
  /* border: 1px solid var(--dark-gray); */
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  padding: 8px 0;
  font-weight: 500;
  color: var(--white);
  transition: all 0.5s;
  background-color: var(--red);
}
.menu:hover {
  transform: scale(1.05);
}

.color-green {
  background-color: var(--green);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  position: relative;
  background-color: var(--white);
  width: 80%;
  box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0.06);
  border-radius: 8px;
  padding: 16px;
}

.close-frame {
  width: 100%;
  text-align: end;
  font-size: 20px;
}

.button-container {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.button-label {
  font-size: 12px;
  color: var(--dark-gray);
  font-weight: 400;
  margin-bottom: 4px;
}

.button-container {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.button-label {
  font-size: 12px;
  color: var(--dark-gray);
  font-weight: 400;
  margin-bottom: 4px;
}

.select-box {
  position: relative;
  width: 100%;
  height: 36px;
  border-radius: 10px;
  border: 1px solid var(--dark-gray);
}

.memo-input {
  width: 100%;
  height: 36px;
  background-color: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0 12px;
  position: relative;
  z-index: 3;
  font-size: 14px;
  color: var(--dark-gray);
}

.add-button {
  margin-top: 40px;
  width: 100%;
  height: 40px;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: var(--white);
  font-size: 16px;
}
</style>
