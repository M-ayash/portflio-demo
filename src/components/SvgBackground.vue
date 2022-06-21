<template>
  <div class="svg-bg">
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMinYMax">
      <clipPath id="shape" >
        <path d="M0,200 C150,200 350,0 500,200 L500,500 L0,500 Z"></path>
      </clipPath>
    </svg>
  </div>
  <img src="../assets/img/bg-weather.jpg" alt="" class="background-img-2" />
</template>
<style>
.svg-bg {
  position: relative;
  z-index: -90;
}
.svg-bg svg {
  stroke-width: 10;
  stroke: rgb(0, 0, 0);
}
.background-img-2 {
  min-width: 100%;
  position: fixed;
  clip-path: url(#shape);
  z-index: 1;
}
</style>