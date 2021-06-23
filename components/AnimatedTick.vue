<template>
  <div>
    <div class="checkmark-circle">
      <div class="checkmark" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkmark-circle {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #2EB150;
  position: relative;
}
.checkmark {
  width: 100%;
  height: 100%;
}
.checkmark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  height: 75px;
  width: 37.5px;
  border-right: 15px solid white;
  border-bottom: 15px solid white;
  transform: translate(-50%, -55%) rotate(45deg);
  animation: checkmark 1s ease-in-out 100ms forwards;
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  50% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
</style>
