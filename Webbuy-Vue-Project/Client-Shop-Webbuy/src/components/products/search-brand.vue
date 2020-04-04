<template>
  <div class="container">
    <div class="row">
      <div class="search">
        <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
          <input
            class="form-control mr-sm-2"
            v-model="searchValue"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

      <!-- <div class="col-lg-9">
        <div class="no-products" v-if="!lodedProducts">
          <h1>No Products</h1>
        </div>
        <Productslist :products="lodedProducts"></Productslist>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("getSearchProducts", this.searchValue);
      this.searchValue = '';
    }
  },
 
};
</script>

<style scoped>
.btn {
  background-color: aqua;
}
</style>