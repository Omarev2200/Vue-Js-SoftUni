<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#">
        <img class="card-img-top" :src="product.imigUrl" alt />
      </a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{product.brand}}</a>
        </h4>
        <h5>${{product.price}}</h5>

        <ul class="conteiner-gender-size">
          <li>{{product.gender}}</li>
          <li>SIZE{{product.size}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "ProductCard",

  props: ["product"]
};
</script>
<style  scoped>
.conteiner-gender-size {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-left: -40px;
}

.card-img-top {
  width: 220px;
  height: 220px;
}
</style>>

