<template>
  <div class="help">
    <HtmlTopdf />
    <SvgBackground/>
    
  </div>
</template>
<script>
import HtmlTopdf from "../components/HtmlTopdf.vue";
import SvgBackground from "../components/SvgBackground.vue";
export default {
  name: "Help",
  components: { HtmlTopdf, SvgBackground },
};
</script>
<style>
.help {
  min-height: 100vh;
}

</style>