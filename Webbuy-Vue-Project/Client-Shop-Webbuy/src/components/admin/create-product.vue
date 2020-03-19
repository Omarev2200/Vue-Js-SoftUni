<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Create Product</h5>
            <form class="form-signin" @submit.prevent="onCreateProduct">
              <label for="inputEmail">Brand</label>
              <div class="form-label-group">
                <input type="text" v-model="brand" name="brand" class="form-control" required />
              </div>

              <label for="inputEmail">Gender</label>
              <select class="form-control btn-primary" @change="gedValue($event)">
                <option value="0">Select Gender:</option>
                <option value="1">MAN</option>
                <option value="2">WOMAN</option>
              </select>

              <label for="inputEmail">Praice</label>
              <div class="form-label-group">
                <input type="text" v-model="price" name="price" class="form-control" required />
              </div>

              <label for="inputEmail">Imige</label>
              <div class="form-label-group">
                <input type="text" v-model="imigUrl" name="imigUrl" class="form-control" required />
              </div>
              <img class="imig" :src="imigUrl" alt />
              <br />
              <label for="inputEmail">Size</label>
              <div class="form-label-group">
                <input type="text" v-model="size" name="size" class="form-control" required />
              </div>
              <br />
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >Create Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      brand: "",
      price: "",
      gender: "",
      imigUrl: "",
      size: ""
    };
  },

  methods: {
    onCreateProduct() {
      this.$store.dispatch("createProduct", {
        brand: this.brand,
        price: this.price,
        gender: this.gender,
        imigUrl: this.imigUrl,
        size: this.size
      });
      this.$router.push("/");
    },

    gedValue(e) {
      if (e.target.options.selectedIndex > -1) {
        this.gender =
          e.target.options[e.target.options.selectedIndex].textContent;
      }
    }
  }
};
</script>

<style  scoped>
.imig {
  height: 300px;
  width: 300px;
}
</style>