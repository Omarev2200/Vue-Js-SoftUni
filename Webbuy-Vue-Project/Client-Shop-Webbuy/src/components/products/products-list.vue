<template>
  <div class="row">
      
    <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
    
  </div>
</template>
<script >
import ProductCard from "./product-card";

export default {
  name: "ProductsList",
  props: ["products"],

  components: {
    ProductCard
  }
};
</script>
<style  scoped>
</style>>