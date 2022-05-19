<script>
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
import MainView from "./components/MainView.vue";
export default {
  components: { HeaderView, MainView, FooterView },
};
</script>
<template>
  <div>
    <header-view />
    <main-view />
    <footer-view />
    
  </div>
</template>
<style>
#app {
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, sans-serif;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  background-color: rgb(101, 157, 243);
  overflow: hidden;
}
@media (max-width: 810px) {
  #app {
    font-family:Arial, Helvetica, sans-serif;
  }
}
</style>
