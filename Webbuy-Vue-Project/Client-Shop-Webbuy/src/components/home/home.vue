<template>
  <div class="container">
      
    <div class="row">
      <Categories></Categories>
      <div class="col-lg-9">
        <!-- <Slider /> -->
        <div v-if="!lodedProducts">No Products</div>
        <Productslist :products="lodedProducts"></Productslist>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Productslist from "../products/products-list";
import Categories from "../products/product-categories";
// import Slider from "./slider";

export default {
  name: "Home",

  components: {
    // Slider,
    Productslist,
    Categories,
    
  },
  data() {
    return {
      limit: null
    };
  },

  methods: {
    // this.$store.dispatch("getProducts", this.limit);
    ...mapActions(["getProducts",])
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

<style scoped>
.container {
  margin-top: 80px;
}
</style> >
