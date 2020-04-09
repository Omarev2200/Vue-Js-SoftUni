<template>
     <div class="col-lg-3">
        <h1 class="my-4">WEBBUY</h1>
        <div class="list-group">
          <router-link to="/products-mаn-search" class="list-group-item">MАN</router-link>
          <router-link to="/products-woman-search" class="list-group-item">WOMAN</router-link>
          <SearchBaend></SearchBaend>
        </div>
      </div>
</template>

<script>
import SearchBaend from "../home/search/search-brand";

export default {
name: 'Categories',
components:{
    SearchBaend
}
}

</script>

<style>

</style>