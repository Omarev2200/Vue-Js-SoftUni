<template>
  
<div class="faq-body">
    <div class="faq-question"><router-link to="">Nike</router-link> </div>
    <div class="faq-question"><router-link to="">Puma</router-link> </div>
    <div class="faq-question"><router-link to="">Under Armor</router-link> </div>
    <div class="faq-question"><router-link to="">Addidas</router-link> </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.faq-body {
  width: 100%;
  height: 190px;
  background: #fff;
  overflow: scroll;
  border: 1px solid #7b7d7f;
  margin-top: 20px;
}

.faq-body::-webkit-scrollbar {
  width: 16px;
}
.faq-body::-webkit-scrollbar-thumb {
  background-color: #7b7d7f;
  border: 5px solid #fff;
  border-radius: 10rem;
}
.faq-body::-webkit-scrollbar-track {
  position: absolute;
  right: -3rem;
  top: -50rem;
  background: transparent;
}

.faq-question {
  padding: 20px;
  border-bottom: 1px solid #000;
  line-height: 1.3;
  color: #15191b;
  font-size: 0.8rem;
}
</style>