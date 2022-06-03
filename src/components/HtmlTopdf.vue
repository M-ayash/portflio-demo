<template>
  <div class="html-ToPdf m-3">
    <img src="../assets/img/sky6.jpg" alt="" />
    <div class="svg-clip" >
      <svg viewBox="0 0 "  >
          <circle cx="50" cy="50" r="50" style="fill:red"/>
           <clipPath id="myClip">
             <circle cx="200" cy="50" r="50" style="fill:green"/>
           </clipPath>
      </svg>
      
    </div>
    <img src="../assets/img/sky5.jpg" alt="" class="bg-clip "/>
    <!--<div class="page-url">
      <label for="page-url"> Page URL:</label>
      <input
        type="text"
        name="page-url"
        id="page-url"
        class="form-control"
        v-model="pageUrl"
      />
    </div>
    <div class="pdf-name">
      <label for="pdf-name">PDF Name:</label>
      <input
        type="text"
        name="pdf-name"
        id="pdf-name"
        class="form-control"
        v-model="pdfName"
      />
    </div>
    <button class="btn btn-success" @click="createPdfFiles()">
      create pdf
    </button>
    <div class="test">
      <a href="/">Hello World</a>
    </div>-->
  </div>
</template>
<script>
import { jsPDF } from "jspdf";
export default {
  data() {
    return {
      pageUrl: "",
      pdfName: "test.pdf",
    };
  },
  methods: {
    createPdfFiles() {
      const doc = new jsPDF();

      doc.text("Hello world!", 10, 10);
      doc.save(this.pdfName);
    },
  },
};
</script>
<style>
.html-ToPdf {
  display: flex;
  position: relative;
  background-size: cover;
  background-position: sticky;
  background-attachment: fixed;
}
.html-ToPdf img{
position: fixed;
  width: 100%;
  min-height: 100%;
  z-index: -100;
}
.bg-clip{
  
  position: relative;
  width: 100px;
  height: 100px;
  clip-path: url(#myClip);
}
/*.html-ToPdf input {
  width: 50%;
  margin: 10px;
}
.test a {
  position: relative;
  display: inline-block;
  font-size: 2em;
  font-weight: 800;
  color: royalblue;
  overflow: hidden;
  
  background: linear-gradient(to right, midnightblue, midnightblue 50%, royalblue 50%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;

  transition: background-position 275ms ease;
}
.test a:hover {
  background-position: 0 100%;

  /*background: linear-gradient(crimson, crimson) white no-repeat 0 0;
  background-size: 0 100%;
  animation: stripes 2s linear 1 forwards;
}
.test:hover a {
  mix-blend-mode: multiply;
}
@keyframes stripes {
  to {
    background-size: 100% 100%;
  }
}*/
.bg-clip {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
}
</style>