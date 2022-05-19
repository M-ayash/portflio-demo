<template>
  <div class="html-ToPdf m-3">
    <div class="page-url">
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
    <button class="btn btn-success " @click="createPdfFiles()">
      create pdf
    </button>
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
.html-ToPdf input {
  width: 50%;
  margin: 10px;
}
</style>