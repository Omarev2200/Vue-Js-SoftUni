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
    return state.loadProduct;
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
      total += item.price * item.quantity;
    });
    return total;
  }
};

// actions
const actions = {
  removeProductFromCart({ commit }, productId) {
    
    
    axios.delete(`cart/${productId}`).then(() => {
      commit("removeProductFromCart", productId);
    });
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
  getProduct({ commit }, payload) {
    axios
      .get(`products/${payload}`)

      .then(res => {
        commit("createProduct", res.data);
      });
  },

  addProductToCart({ commit }, { product, quantity }) {
    axios
      .post("cart", {
        id:product._id,
        brand: product.brand,
        gender: product.gender,
        price: product.price,
        imigUrl: product.imigUrl,
        size: product.size,
        quantity
      })
      .then(res => {
        commit("addToCart", res.data);
      });
  },
  getCartItems({ commit }) {
    axios.get("cart").then(res => {
      commit("setCart", res.data);
    });
  },
  deliteProduct({ commit }, productId) {
    console.log(productId+ 'delete');
    
    axios.delete(`products/${productId}`).then(() => {
      
      router.push("/");

      commit("deliteProduct", productId);
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
  createProduct(state, payload) {
    state.loadProduct = payload;
  },
  addToCart(state, product) {
    // let productInCart = state.cart.find(item => {
    //   return item._id === product._id;
    // });

    // if (productInCart) {
    //   productInCart.quantity += 1;
    //   return;
    // }
    state.cart.push(product);
  },
  removeProductFromCart(state, productId) {
    console.log(productId+'cart delete');
    
    state.cart = state.cart.filter(item => {
      return item.id !== productId;
    });
  },
  deliteProduct(state, productId) {
    console.log(productId+'cart delete');
    state.cart = state.cart.filter(item => {
      return item._id !== productId;
    });
  },

  setCart(state, cartItems) {
    state.cart = cartItems;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
