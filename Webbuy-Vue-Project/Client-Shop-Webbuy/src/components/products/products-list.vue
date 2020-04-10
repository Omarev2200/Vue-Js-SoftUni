<template>
  <div class="row">
    <h1 v-if="!productLength">NO RESULT FOUND</h1>
    <ProductCard
      v-else
      v-for="product in products"
      :key="product.id"
      :_id="product._id"
      :brand="product.brand"
      :imigUrl="product.imigUrl"
      :price="product.price"
      :size="product.size"
      :gender="product.gender"
    ></ProductCard>
  </div>
</template>
<script >
import ProductCard from "./product-card";

export default {
  name: "ProductsList",
  props: {
    products: [Array, Object]
  },

  components: {
    ProductCard
  },
  computed: {
    productLength() {
      if (this.products.length !== 0) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style  scoped>
</style>>