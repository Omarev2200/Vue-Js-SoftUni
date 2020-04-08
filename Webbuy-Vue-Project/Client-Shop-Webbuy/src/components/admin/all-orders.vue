<template>
  <div class="conteiner">
    <div class="container mb-4" v-for="(item, i) in getOrders" :key="i">
      <div class="buyer-details">
        <h4>First Name:</h4>
        <h4 class="buyer-name">{{item.firstName}}</h4>

        <h4>Last Name:</h4>
        <h4 class="buyer-name">{{item.lastName}}</h4>

        <h4>Phone:</h4>
        <h4 class="buyer-name">{{item.phoneNumber}}</h4>
      </div>
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
                <tr v-for="product in item.products" :key="product[0]._id">
                  <td>
                    <img class="imige-cart" :src="product[0].imigUrl" />
                  </td>

                  <td>{{product[0].brand}}</td>
                  <td>{{product[0].size}}</td>

                  <td>
                    <input class="form-control" type="text" :value="product[0].quantity" />
                  </td>
                  <td class="text-right">{{product[0].price}} €</td>
                  <td class="text-right"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-6"></div>

            <div class="col-sm-12 col-md-6 text-right">
              <button
                class="btn btn-lg btn-block btn-danger text-uppercase"
                @click.prevent="removeOrders(item._id)"
              >
                DELETE
                <span class="material-icons">delete_forever</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getOrders"])
  },
  methods: {
    ...mapActions(["loadOrders"]),
    removeOrders(orderId) {
      this.$store.dispatch("removeOrder", orderId);
    }
  },
  created() {
    this.loadOrders();
  }
};
</script>

<style scoped>
.conteiner {
  margin: 50px 50px 50px 50px;
}
.buyer-details {
  border: solid black;
  display: flex;
  justify-content: center;
}
.buyer-details h4 {
  margin-right: 20px;
}
.buyer-name {
  margin-left: -20px;
}
.orders {
  display: flex;
}
.orders img {
  display: flex;
  justify-content: end;
  width: 100px;
  height: 100px;
}
.product-ditails {
  margin-right: 20px;
}
.imige-cart {
  height: 150px;
  width: 200px;
}
</style>