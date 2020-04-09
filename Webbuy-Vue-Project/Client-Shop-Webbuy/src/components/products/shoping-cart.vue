<template>
  <div v-if="cartlength">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">WEBBUY CART</h1>
      </div>
    </section>
    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Size</th>
                  <th scope="col" class="text-center">Quantity</th>
                  <th scope="col" class="text-right">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in cart" :key="product.id">
                  <td>
                    <img class="imige-cart" :src="product.imigUrl" />
                  </td>
                  <td>{{product.brand}}</td>
                  <td>{{product.size}}</td>

                  <td>
                    <input class="form-control" type="text" :value="product.quantity" />
                  </td>
                  <td class="text-right">{{product.price}} €</td>
                  <td class="text-right">
                    <button
                      class="btn btn-sm btn-danger"
                      @click.prevent="removeProductFromCart(product.id)"
                    >
                      <span class="material-icons">delete_forever</span>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Sub-Total</td>
                  <td class="text-right">{{cartTotalPrice}} €</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Shipping</td>
                  <td class="text-right">{{shipping}} €</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td class="text-right">
                    <strong>{{totalPrice}} €</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <ShoppingForm :order="cart"></ShoppingForm>
            </div>

            <div class="col-sm-12 col-md-6 text-right">
              <router-link to="/" class="btn btn-lg btn-block btn-primary text-uppercase">BACK</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1 class="error-details">NO PRODUCTS FROM CART</h1>
            <div class="error-actions">
              <router-link to="/" class="btn btn-primary btn-lg">
                <span class="glyphicon glyphicon-home"></span>
                Take Me Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingForm from "../products/shoppingForm";
import { mapGetters } from "vuex";
export default {
  name: "ShopingCart",
  components: {
    ShoppingForm
  },

  data() {
    return {
      shipping: 6.9
    };
  },
  computed: {
    cartlength() {
      if (this.cart.length > 0) {
        return true;
      }
      return false;
    },
    totalPrice() {
      return this.shipping + this.cartTotalPrice;
    },
    cart() {
      return this.$store.getters.cart;
    },
    ...mapGetters(["cartTotalPrice"])
  },
  methods: {
    removeProductFromCart(productId) {
      this.$store.dispatch("removeProductFromCart", productId);
    }
  }
};
</script>

<style scoped>
.bloc_left_price {
  color: #c01508;
  text-align: center;
  font-weight: bold;
  font-size: 150%;
}
.category_block li:hover {
  background-color: #007bff;
}
.category_block li:hover a {
  color: #ffffff;
}
.category_block li a {
  color: #343a40;
}
.imige-cart {
  height: 150px;
  width: 200px;
}
.add_to_cart_block .price {
  color: #c01508;
  text-align: center;
  font-weight: bold;
  font-size: 200%;
  margin-bottom: 0;
}
.add_to_cart_block .price_discounted {
  color: #343a40;
  text-align: center;
  text-decoration: line-through;
  font-size: 140%;
}
.product_rassurance {
  padding: 10px;
  margin-top: 15px;
  background: #ffffff;
  border: 1px solid #6c757d;
  color: #6c757d;
}
.product_rassurance .list-inline {
  margin-bottom: 0;
  text-transform: uppercase;
  text-align: center;
}
.product_rassurance .list-inline li:hover {
  color: #343a40;
}
.reviews_product .fa-star {
  color: gold;
}
.pagination {
  margin-top: 20px;
}
footer {
  background: #343a40;
  padding: 40px;
}
footer a {
  color: #f8f9fa !important;
}

.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
.error-actions .btn {
  margin-right: 10px;
}

.container {
  padding-top: 5%;
}
</style>