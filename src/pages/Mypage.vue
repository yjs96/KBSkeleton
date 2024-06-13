<template>
  <Main :padded="true" class="mypage-wrapper">
    <!-- user header -->
    <div class="mypage-container">
      <div class="user-box">
        <div class="user-content">
          <img class="profile-image" :src="userInfo.profileImage" alt="" />
          <div class="user-name-frame">
            <router-link to="/">{{ userInfo.name }}</router-link>
            <span class="weight-regular">님</span>
          </div>
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
import { computed } from 'vue';

import Main from '@/components/Main.vue';
import { useUserInfoStore } from '@/stores/history';

const userInfoStore = useUserInfoStore();

const { fetchuserInfo } = userInfoStore;
const userInfo = computed(() => userInfoStore.userInfo);

fetchuserInfo();
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

  background-color: var(--green);
  border-radius: 10px;
  height: 100%;
  box-shadow: 5px 5px 7px 0px rgba(182, 182, 182, 0.645);
}
.user-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
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
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* border: 1px solid red; */
  height: 100%;
  width: 50%;
}
.menu {
  width: 100%;
  border: 1px solid var(--dark-gray);
  border-radius: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: var(--dark-gray);
  transition: all 0.5s;
}
.menu:hover {
  transform: scale(1.1);
  background-color: var(--blue);
}
</style>
