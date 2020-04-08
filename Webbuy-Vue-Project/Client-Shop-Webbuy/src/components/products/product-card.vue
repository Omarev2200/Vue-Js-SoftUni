<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <router-link :to="'/details-product/' + _id">
        <img class="card-img-top" :src="imigUrl" alt />
      </router-link>
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="'/details-product/' + _id">{{ brand }}</router-link>
        </h4>
        <h5>{{ price }} €</h5>

        <ul class="conteiner-gender-size">
          <li>{{ gender }}</li>
          <li>SIZE{{ size }}</li>
        </ul>

        <button
          type="button"
          class="btn btn-primary"
          v-if="!inCart"
          @click="addToCart()"
        >
          ADD TO CART
        </button>
        <button type="button" class="btn btn-warning" v-if="inCart">
          Product is in the cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: [],
    };
  },
  name: "ProductCard",
  props: {
    _id: String,
    brand: String,
    imigUrl: String,
    price: Number,
    size: String,
    gender: String,
  },
  computed: {
    auth() {
      return !!this.$store.getters.user;
    },
    cart() {
      return this.$store.getters.cart;
    },
    inCart() {
      let exists = false;
      for (let k in this.cart) {
        if (this.cart[k].id === this._id) {
          exists = true;
        }
      }

      return exists;
    },
  },
  methods: {
    addToCart() {
      if (!this.auth) {
        this.$router.push("/register");
        return;
      }

      this.id.push(this._id);
      this.$store.dispatch("addProductToCart", {
        id: this._id,
        brand: this.brand,
        imigUrl: this.imigUrl,
        price: this.price,
        size: this.size,
        gender: this.gender,
        quantity: 1,
      });
    },
  },
};
</script>
<style scoped>
.conteiner-gender-size {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-left: -40px;
}
.card-img-top {
  width: 252px;
  height: 220px;
}</style
>>
