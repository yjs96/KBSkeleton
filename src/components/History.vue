<template>
  <div class="history-frame">
    <div class="history-left">
      <div class="category-icon">그림</div>
      <div class="history-info-frame">
        <span class="history-name">세종대 학식</span>
        <span class="history-time"> 24. 6. 7 &nbsp;11:52 &nbsp;|&nbsp; 음식 </span>
      </div>
    </div>
    <div class="history-right">
      <span>-6,000원</span>
    </div>
  </div>
</template>

<script setup></script>

<style>
.history-frame {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.history-left {
  display: flex;
  align-items: center;
}

.category-icon {
  width: 44px;
  height: 44px;
  background-color: var(--gray);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.history-info-frame {
  margin-left: 8px;
  display: flex;
  flex-direction: column;
}

.history-name {
  font-size: 16px;
}

.history-time {
  font-size: 12px;
  font-weight: 400;
  color: var(--dark-gray);
}
</style>
