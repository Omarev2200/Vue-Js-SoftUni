<template>
  <div class="container">
    <div class="row">
     <Categories></Categories>

      <div class="col-lg-9">
        
        <div class="no-products" v-if="!womanProducts">
          <h1 >No Products</h1>
        </div>
        <Productslist :products="womanProducts"></Productslist>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Productslist from "../products/products-list";
import Categories from "../products/product-categories";

export default {
  components: {
    Productslist,
    Categories
  },
  methods:{
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(["lodedProducts"]),
    womanProducts() {
    
      
      return this.lodedProducts.filter(m => m.gender === "WOMAN");
    }
  },
  created() {
    this.getProducts()
  }
};
</script>

<style scoped>
.no-products{
  display: flex;
  justify-content: center;
  
}
.container {
  margin-top: 80px;
}
</style>>