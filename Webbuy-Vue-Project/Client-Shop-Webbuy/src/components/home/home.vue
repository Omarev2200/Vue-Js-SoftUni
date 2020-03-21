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

        <Productslist :products="lodedProducts"></Productslist>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
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
    };
  },
  methods: {
    // this.$store.dispatch("getProducts", this.limit);
    ...mapActions(["getProducts"])
  },
  computed: {
    ...mapGetters(["lodedProducts"])
  },

  created() {
    // products() {
    //   return this.$store.getters.lodedProducts;
    // }
    this.getProducts();
  }
};
</script>

<style >
</style>