<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h1 class="my-4">WEBBUY</h1>
        <div class="list-group">
          <a href="#" class="list-group-item">MEN</a>
          <a href="#" class="list-group-item">WOMEN</a>
        </div>
      </div>

      <div class="col-lg-9">
        <Slider />
        <Productslist :products="products"></Productslist>
      </div>
    </div>
  </div>
</template>
<script>
import Productslist from "../products/products-list";
import Slider from "./slider";

export default {
  name: "Home",

  components: {
    Slider,
    Productslist
  },
  data() {
    return {
      limit: null
    }
  },
  computed: {
    products() {
      return this.$store.getters.lodedProducts;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts", this.limit);
  }
};
</script>

<style >
</style>