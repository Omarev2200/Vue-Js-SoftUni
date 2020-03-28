<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <router-link :to="'/details-product/'+product._id">
        <img class="card-img-top" :src="product.imigUrl" alt />
      </router-link>
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="'/details-product/'+product._id">{{product.brand }}</router-link>
        </h4>
        <h5>{{product.price}} €</h5>

        <ul class="conteiner-gender-size">
          <li>{{product.gender}}</li>
          <li>SIZE{{product.size}}</li>
        </ul>
        <button type="button" class="btn btn-primary" @click='addToCart()' >ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "ProductCard",

  props: ["product"],

  methods:{
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity:1
      })
    }
  }
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

