<template>
  <header id="header" class="header">
    <h3 class="logo"><a href="/">Mohammad Ayash</a></h3>
    <div class="header-menu d-print-none">
      <div class="logo-img"></div>
      <ul class="nav nav-tabs justify-content-end">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">about</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/weather" class="nav-link">weather</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sollicitatiebrief" class="nav-link">sollicitatiebrief</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
</script>
<style>
header {
  min-height: 4em;
  background-color: #f0f0f0;
  width: 100%;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo a{
  text-transform: uppercase;
  font: bold 1.5em Open Sans, Impact;
  display: table;
  color: rgb(243, 243, 247);
  -webkit-text-stroke: 1px rgb(57, 90, 135);;
}
.logo:hover{
  background: linear-gradient( crimson , crimson) white no-repeat 0 0;
  background-size: 0 100%;
  animation: stripes 2s linear 1 forwards;
}
.logo:hover a{
  mix-blend-mode: multiply;
}
header .logo a {
  text-decoration: none;
  text-align: center;
}
@keyframes stripes {
  to {
    background-size:100% 100%;
  }
}
@media print {
  header {
    background-color: rgb(57, 90, 135);
  }
  header .logo a {
    color: rgb(57, 90, 135);
  }
}
</style>