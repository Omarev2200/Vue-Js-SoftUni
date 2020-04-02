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
        <div class="btns"></div>
        <button type="button" class="btn btn-primary" @click="addToCart(product._id)">ADD TO CART</button>
        <button type="button" class="btn btn-warning">Product is in the cart</button>
        {{inCart}}
      </div>
    </div>
  </div>
</template>

<script >

export default {
  data() {
    return {
      id: null,
      
    };
  },
  name: "ProductCard",
  props: ["product"],
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    inCart() {
      return this.cart.forEach(item => {
        console.log(item);
        
      });
       
    }
  },
  methods: {
    addToCart(id) {
      this.id = id;
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1
      });
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
  width: 252px;
  height: 220px;
}
</style>>