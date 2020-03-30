<template>
   <div class="container">
    <div class="row">
    <Categories></Categories>

      <div class="col-lg-9">
        <!-- <Slider /> -->
<div v-if="!manProducts">No Products</div>
        <Productslist :products="manProducts"></Productslist>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Productslist from "../products/products-list";
import Categories from "../products/product-categories";

export default {
components:{
    Productslist,
    Categories
},
computed: {
    ...mapGetters(["lodedProducts"]),
    manProducts() {
        return this.lodedProducts.filter(m => m.gender === "MAN");
        
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 80px;
}
</style>