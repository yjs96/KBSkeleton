<template>
  <Main :padded="true" class="mypage-wrapper">
    <!-- user header -->
    <div class="mypage-container">
      <div class="user-box" @click="changeText">
        <div class="user-content">
          <img class="profile-image" :src="userInfo.profileImage" alt="" />
          <div class="user-name-frame">
            <router-link to="/">{{ userInfo.name }}</router-link>
            <span class="weight-regular">님</span>
          </div>
        </div>
        <div class="user-text">
          <span>오늘 하루 {{ userText }} </span>
        </div>
      </div>
      <div class="mypage-menu">
        <div class="mypage-menu-box">
          <div class="menu menu-1">프로필 편집</div>
          <div class="menu menu-2">도움말</div>
          <div class="menu menu-3">설정</div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script setup>
import { computed, ref } from 'vue';

import Main from '@/components/Main.vue';
import { useUserInfoStore } from '@/stores/history';

const userInfoStore = useUserInfoStore();

const { fetchuserInfo } = userInfoStore;
const userInfo = computed(() => userInfoStore.userInfo);

const userText = ref('조금 더 절약할까요?');
fetchuserInfo();

const changeText = () => {
  // userText.value = userText === '조금 더 절약할까요?' ? '조금 더 절약할까요?' : '아껴볼까요?';
};
</script>

<style scoped>
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
  border: 1px solid red;
  background-color: var(--green);
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
  background-color: var(--red);
  font-size: 30px;
}

.user-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  padding-top: 130px;
  z-index: 1;
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
  border: 1px solid var(--dark-gray);
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-gray);
  transition: all 0.5s;
}
.menu:hover {
  transform: scale(1.1);
  background-color: var(--blue);
}
</style>
