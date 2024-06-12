<template>
  <div class="spend-container">
    <div class="spend-content">
      <div class="isMemo">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div class="spend-smry">
        <div class="income">+10000</div>
        <div class="outcome">-10000</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.spend-container {
  display: flex;
  width: 100%;
}
.spend-content {
  display: flex;
  width: 100%;
}
.spend-smry {
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding-left: 10px;
  width: 50%;
}
.income {
  color: var(--blue);
  font-size: 0.5rem;
}
.outcome {
  color: var(--red);
  font-size: 0.5rem;
}
.isMemo {
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 30%;
  font-size: 0.5rem;
}
.fa-envelope {
  padding: 4px;
  font-size: 12px;
  color: var(--green);
}
/* 원하는 스타일을 추가하세요 */
</style>
