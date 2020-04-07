<template>
  <div>
    <div class="container">
      <div class="row">
        <Categories></Categories>
        <div class="col-lg-9">
          <!-- <Slider /> -->
          <div v-if="lodedProducts.length === 0">
            <Loader></Loader>
          </div>
          <div v-if="!lodedProducts">No Products</div>
          <Productslist :products="lodedProducts"></Productslist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Productslist from "../products/products-list";
import Categories from "../products/product-categories";
// import Slider from "./slider";
import Loader from "../core/loader";

export default {
  name: "Home",

  components: {
    // Slider,
    Productslist,
    Categories,
    Loader
  },
  data() {
    return {
      limit: null
    };
  },

  methods: {
    ...mapActions(["getProducts"])
  },
  computed: {
    ...mapGetters(["lodedProducts"])
  },

  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
.container {
  margin-top: 80px;
}
</style> >
