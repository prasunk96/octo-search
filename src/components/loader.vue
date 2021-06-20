<template>
  <div class="container">
    <div class="loader">
      <div class="circle" id="a"></div>
      <div class="circle" id="b"></div>
      <div class="circle" id="c"></div>
    </div>
  </div>
</template>
<style>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: var(--navy-blue);
}
.loader {
  width: 200px;
  height: 80px;
  margin: auto;
  display: flex;
    justify-content: center;
    align-items: center;
}
.circle {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  animation: jump 1s linear infinite;
  margin: 0 15px;
}
.caption {
  margin: auto;
  font-family: arial;
  font-size: 20px;
  color: white;
}
#b {
  animation-delay: 0.2s;
}
#c {
  animation-delay: 0.4s;
}
@keyframes jump {
  0% {
    margin-top: 0;
  }
  35% {
    margin-top: -75px;
  }
  70% {
    margin-top: 0px;
  }
}
</style>
