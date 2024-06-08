<template>
  <div class="navbar-frame">
    <div class="tab-frame" v-for="(tab, index) in navTabs" :key="index">
      <router-link :to="tab.path">
        <div :class="$route.path === tab.path ? 'tab tab-active' : 'tab'">
          <i :class="tab.icon"></i>
          <span>{{ tab.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const navTabs = ref([
  {
    path: '/',
    name: '홈',
    icon: 'fa-solid fa-house',
  },
  {
    path: '/two',
    name: '두번째',
    icon: 'fa-solid fa-magnifying-glass',
  },
  {
    path: '/three',
    name: '세번째',
    icon: 'fa-solid fa-money-bill',
  },
  {
    path: '/four',
    name: '네번째',
    icon: 'fa-solid fa-plus',
  },
  {
    path: '/five',
    name: '다섯번째',
    icon: 'fa-solid fa-user',
  },
]);
</script>

<style scoped>
.navbar-frame {
  position: absolute;
  padding: 0 4.4%;
  bottom: 0;
  width: 100%;
  height: 76px;
  display: flex;
  border-top: 1px solid var(--border);
  background-color: var(--white);
  z-index: 2;
}

.tab-frame {
  position: relative;
  width: calc(100% / 5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray400);
}

.tab span {
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 12px;
}

.tab-active {
  color: var(--gray900);
}

a {
  text-decoration: none;
}
</style>
