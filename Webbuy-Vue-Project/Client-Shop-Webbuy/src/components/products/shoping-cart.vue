<template>
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">WEBBUY CART</h1>
      </div>
    </section>

    <div class="container mb-4" v-if="cart.length>0">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Available</th>
                  <th scope="col" class="text-center">Quantity</th>
                  <th scope="col" class="text-right">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in cart" :key="product.id">
                  <td>
                    <img class="imige-cart" :src="product.product.imigUrl" />
                  </td>
                  <td>{{product.product.brand}}</td>
                  <td>In stock</td>
                  <td>
                    <input class="form-control" type="text" :value="product.quantity" />
                  </td>
                  <td class="text-right">{{product.product.price}} €</td>
                  <td class="text-right">
                    <button
                      class="btn btn-sm btn-danger"
                      @click.prevent="removeProductFromCart(product.product)"
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
                  <td class="text-right">6,90 €</td>
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
                    <strong>{{cartTotalPrice+6.9}} €</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <button class="btn btn-block btn-light">Continue Shopping</button>
            </div>
            <div class="col-sm-12 col-md-6 text-right">
              <button class="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-else>NO PRODUCT FOR YOR CART</div>
  </div>
</template>

<script>
export default {
  name: "ShopingCart",
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    }
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    }
  }
};
</script>

<style scoped>
/*
** Style Simple Ecommerce Theme for Bootstrap 4
** Created by T-PHP https://t-php.fr/43-theme-ecommerce-bootstrap-4.html
*/
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
</style>