<template>
  <Main :padded="true" class="mypage-wrapper">
    <!-- user header -->
    <div class="mypage-container">
      <div class="upper-bar">
        <div class="user-name-frame">
          <span>박소해</span>
          <span class="weight-regular">님</span>
          <i class="fa solid fa-chevron-right"></i>
        </div>
        <div class="profile-frame">프사</div>
      </div>
      <div class="user-box">
        <div class="a"></div>
        <div class="b">b</div>
        <div class="c">c</div>
        <div class="d">
          <div class="d-style">
            <div class="d1">d1</div>
            <div class="d1">d2</div>
            <div class="d1">d3</div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script setup>
import Main from '@/components/Main.vue';
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
  gap: 10px;
}
.upper-bar {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 10px;
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
/* card */
.user-box {
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: var(--green);
  border-radius: 10px;

  box-shadow: 5px 5px 7px 0px rgba(182, 182, 182, 0.645);
}
.a {
  flex: 1;
}
.b {
  flex: 1;
}
.c {
  flex: 1;
}
.d {
  height: 400px;
  /* border: 1px solid red; */
  background-color: var(--white);
  border-radius: 0px 0px 10px 10px;
}
.d-style {
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  /* border: 1px solid red; */
}
.d1 {
  width: 400px;
  height: 80px;
  /* border: 1px solid red; */

  border-radius: 10px;
  box-shadow: 5px 5px 7px 0px rgba(182, 182, 182, 0.645);
  transition: all 0.2s ease-in;
}
.d1:hover {
  transform: translate(10px, -10px);
}
</style>
