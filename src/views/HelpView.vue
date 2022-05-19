<template>
  <div class="help ">
      <HtmlTopdf/>
  </div>
</template>
<script>
import HtmlTopdf from "../components/HtmlTopdf.vue";
export default {
    name: "Help",
    components: { HtmlTopdf }
};
</script>
<style>
.help {
  min-height: 100vh;
  background-color: #fff;
  padding-top: 100px;
}
</style>