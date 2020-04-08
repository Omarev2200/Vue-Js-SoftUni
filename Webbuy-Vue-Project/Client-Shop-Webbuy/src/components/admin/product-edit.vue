<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Edit Product</h5>
            <form class="form-signin" @submit.prevent="onCreateProduct">
              <label for="inputEmail">Brand</label>
              <div class="brand-label-group">
                <input
                  type="text"
                  @input="inputBrand"
                  v-model="product.brand"
                  name="brand"
                  class="form-control"
                  @blur="$v.brand.$touch"
                  required
                />
              </div>
              <template v-if="$v.brand.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.brand.required"
                >
                  Brand is required!
                </div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.brand.minLength"
                >
                  Brand lenght should be longer than 3 symbols!
                </div>
              </template>

              <label for="gender">Gender</label>
              <select
                class="form-control btn-primary"
                name="gender"
                v-model="product.gender"
                @blur="$v.gender.$touch"
                @change="gedValue($event)"
                required
              >
                <option value>Select Gender:</option>
                <option value="1">MAN</option>
                <option value="2">WOMAN</option>
              </select>
              <template v-if="$v.gender.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.gender.required"
                >
                  Gender is required!
                </div>
              </template>

              <label for="inputEmail">Praice</label>
              <div class="form-label-group">
                <input
                  type="text"
                  @input="inputPrice"
                  v-model="product.price"
                  name="price"
                  class="form-control"
                  @blur="$v.price.$touch"
                  required
                />
              </div>
              <template v-if="$v.price.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.price.required"
                >
                  Price is required!
                </div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.price.numeric"
                >
                  The price must be a number!
                </div>
              </template>

              <label for="inputEmail">Imige</label>
              <div class="form-label-group">
                <input
                  type="text"
                  @input="inputImigUrl"
                  v-model="product.imigUrl"
                  name="imigUrl"
                  class="form-control"
                  @blur="$v.imigUrl.$touch"
                  required
                />
              </div>
              <template v-if="$v.imigUrl.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.imigUrl.required"
                >
                  Imige is required!
                </div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.imigUrl.url"
                >
                  Url not match!
                </div>
              </template>
              <img class="imig" :src="imigUrl" alt />
              <br />
              <label for="inputEmail">Size</label>
              <div class="form-label-group">
                <input
                  type="text"
                  @input="inputSize"
                  v-model="product.size"
                  name="size"
                  class="form-control"
                  @blur="$v.size.$touch"
                  required
                />
              </div>
              <template v-if="$v.size.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.size.required"
                >
                  Size is required!
                </div>
              </template>
              <br />
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
                :disabled="$v.$invalid"
              >
                Edit Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, numeric, url } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      brand: "",
      price: "",
      gender: "",
      imigUrl: "",
      size: "",
      id: this.$route.params.id,
    };
  },
  validations: {
    brand: {
      required,
      minLength: minLength(3),
    },
    gender: {
      required,
    },
    price: {
      required,
      numeric,
    },
    imigUrl: {
      required,
      url,
    },
    size: {
      required,
    },
  },

  methods: {
    onCreateProduct() {
      this.$store.dispatch("editProduct", {
        brand: this.brand,
        price: this.price,
        gender: this.gender,
        imigUrl: this.imigUrl,
        size: this.size,
        id: this.id,
      });
    },
    inputBrand(e) {
      this.brand = e.target.value;
    },
    inputImigUrl(e) {
      this.imigUrl = e.target.value;
    },
    inputPrice(e) {
      this.price = e.target.value;
    },
    inputSize(e) {
      this.size = e.target.value;
    },

    gedValue(e) {
      if (e.target.options.selectedIndex > -1) {
        this.gender =
          e.target.options[e.target.options.selectedIndex].textContent;
      }
    },
  },
  computed: {
    product() {
      return this.$store.getters.lodedProduct;
    },
  },
};
</script>

<style scoped>
.imig {
  height: 300px;
  width: 300px;
}
</style>
