<template>
  <div class="container">
    <div class="card">
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">
            <div class="preview-pic tab-content">
              <div class="tab-pane active" id="pic-1">
                <img :src="product.imigUrl" />
              </div>
            </div>
          </div>

          <div class="details col-md-6">
            <h3 class="product-title">{{ product.brand }}</h3>
            <div class="rating">
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>

            <h4 class="price">
              current price:
              <span>${{ product.price }}</span>
            </h4>
            
            <h5 class="sizes">sizes: {{ product.size }}</h5>

            <div class="action-buttons">
              <button type="button" class="btn btn-primary" @click="addToCart()">ADD TO CART</button>
              <router-link
                type="button"
                class="btn edit btn-warning"
                v-if="isAdmin === 'Admin'"
                :to="'/product-edit/' + product._id"
                @click="editeProduct(product._id)"
              >EDIT</router-link>
              <button
                type="button"
                class="btn btn-danger"
                v-if="isAdmin === 'Admin'"
                @click="deliteProduct(product._id)"
              >DELETE</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Details",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(['getProduct']),
    // addToCart() {
    //   this.$store.dispatch("addProductToCart");
    // },

    editeProduct(id) {
      this.$store.dispatch("editeProduct", id);
    },

    deliteProduct(id) {
      this.$store.dispatch("deliteProduct", id);
    }
  },
  computed: {
    isAdmin() {
      if (!this.$store.getters.user) {
        return;
      }
     
      return this.$store.getters.user.roles;
    
    },
    product() {
      return this.$store.getters.lodedProduct;
    }
  },
  created() {
    this.getProduct(this.id);
  }
};
</script>

<style scoped>
/*****************globals*************/
body {
  font-family: "open sans";
  overflow-x: hidden;
}

img {
  max-width: 100%;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}
.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart,
.like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

button.btn {
  margin-right: 30px;
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.btn.edit{
      padding-right: 30px;
    margin-right: 30px;

}

/*# sourceMappingURL=style.css.map */
</style>
