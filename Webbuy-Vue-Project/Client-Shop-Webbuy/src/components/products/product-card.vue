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
       
        <button
          type="button"
          class="btn btn-primary"
          v-if="!inCart"
          @click="addToCart(product._id)"
        >ADD TO CART</button>
        <button type="button" class="btn btn-warning" v-if="inCart">Product is in the cart</button>
        
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      id: []
    };
  },
  name: "ProductCard",
  props: ["product"],
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    inCart() {
      let exists = false;
      for (let k in this.cart) {
        if (this.cart[k].id === this.product._id) {
            exists = true;
          }
      }

      return exists;
    }
  },
  methods: {
    addToCart(id) {
      this.id.push(id);
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