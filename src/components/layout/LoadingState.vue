<template>
  <div class="loading-state">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 20px;
  height: 38px;
  width: min-content;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
}
span {
  width: 8px;
  height: 8px;
  margin-top: 30px;
  border-radius: 50%;

  animation-duration: 1s;
  animation-name: jump;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
span:nth-of-type(2) {
  animation-delay: 100ms;
}
span:nth-of-type(3) {
  animation-delay: 200ms;
}
@keyframes jump {
  0% {
    margin-top: 30px;
  }
  100% {
    margin-top: 0px;
  }
}
</style>
