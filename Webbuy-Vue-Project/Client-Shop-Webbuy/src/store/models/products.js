import Vue from "vue";
import router from "../../router";
import axios from "axios";
// initial state
const state = {
  loadProducts: [],
  loadProduct: [],
  cart: []
};

// getters
const getters = {
  lodedProducts(state) {
    return state.loadProducts;
  },
  lodedProduct(state) {
    return id => {
      return state.loadProducts.find(product => {
        return product._id === id;
      });
    };
  },
  cart(state) {
    return state.cart;
  },
  cartItemCount(state) {
    return state.cart.length;
  },

  cartTotalPrice(state) {
    let total = 0;
    state.cart.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
};

// actions
const actions = {
  removeProductFromCart({ commit }, product) {
    commit("removeProductFromCart", product);
  },
  createProduct({ commit }, payload) {
    const product = {
      brand: payload.brand,
      gender: payload.gender,
      price: payload.price,
      imigUrl: payload.imigUrl,
      size: payload.size
    };
    axios
      .post("products", {
        brand: payload.brand,
        gender: payload.gender,
        price: payload.price,
        imigUrl: payload.imigUrl,
        size: payload.size
      })
      .then(() => {
        Vue.notify({
          group: "auth",
          type: "success",
          title: "Success",
          text: "Create"
        });
        router.push("/");
        commit("createProducts", {
          ...product
        });
      });
  },

  getProducts({ commit }, payload) {
    axios
      .get(`products/${payload ? `?limit=${payload}` : ""}`)

      .then(res => {
        // let test = data.filter(m => m.gender === "MAN");
        // console.log(test);
        // console.log(data);
        commit("createProducts", res.data);
      });
  },

  addProductToCart({ commit }, { product, quantity }) {
    commit("addToCart", { product, quantity });
  },
  deliteProduct({ commit }, payload) {
    console.log(payload);

    axios.delete(`products/${payload}`).then(() => {
      router.push("/");

      commit("deliteProduct", payload);
    });
  },
  editProduct({ commit }, payload) {
    axios
      .put(`products/${payload.id}`, {
        brand: payload.brand,
        gender: payload.gender,
        price: payload.price,
        imigUrl: payload.imigUrl,
        size: payload.size
      })
      .then(res => {
        router.push("/");
        commit("createProducts", res.data);
      });
  }
};

// mutations
const mutations = {
  createProducts(state, payload) {
    state.loadProducts = payload;
  },
  addToCart(state, { product, quantity }) {
    let productInCart = state.cart.find(item => {
      return item.product._id === product._id;
    });

    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }
    state.cart.push({
      product,
      quantity
    });
  },
  removeProductFromCart(state, product) {
    state.cart = state.cart.filter(item => {
      return item.product._id !== product._id;
    });
  },
  deliteProduct(state, payload) {
    state.cart = state.cart.filter(item => {
      return item.product._id !== payload;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
