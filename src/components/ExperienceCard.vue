<template>
  <div class="col-2 experience-card">
      <div class="experience-image">
        <img :src="getImgUrl(cardImg)" />
      </div>
      <div class="experience-info">
        <p class="experience-category">{{ cardText }}</p>
      </div>
    </div>
</template>
<script>
export default {
  props: ["cardImg", "cardText"],
  data() {
    return {
      imgSrc:this.cardImg
    }
  },
  methods:{
    getImgUrl(cardImg){
        return require(`${cardImg}`);
    }
  }
};
</script>
<style>
.experience-card {
  background-color: rgb(101, 157, 243);
  border: 1px solid rgb(18, 17, 17);
  border-radius: 10px;
  margin: 20px 40px;
  box-shadow: 5px 5px 5px 5px rgb(242, 245, 247);
}
.experience-card:hover {
  transform: scale(1.1);
}

.experience-card:hover .experience-image {
  opacity: 0.9;
}

.experience-image img {
  width: 100%;
}
.experience-category {
  font-size: 20px;
  color: coral;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
}
@media (max-width: 400px) {
  .experience-category{
    font-size: 0.7em;
  }
}
</style>
