import Vue from "vue";
// initial state
const state = {
  loadProducts: [],
  loadProduct: null,
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
    })
    return total;
  }
};

// actions
const actions = {
  removeProductFromCart({commit}, product) {
    commit('removeProductFromCart', product)
  },
  createProduct({ commit }, payload) {
    const product = {
      brand: payload.brand,
      gender: payload.gender,
      price: payload.price,
      imigUrl: payload.imigUrl,
      size: payload.size
    };

    fetch("http://localhost:9999/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(product),
      credentials: "include"
    }).then(() => {
      Vue.notify({
        group: "auth",
        type: "success",
        title: "Success",
        text: "Create"
      });
      commit("createProduct", {
        ...product
      });
    });
  },

  getProducts({ commit }, payload) {
    fetch(
      `http://localhost:9999/api/products/${payload ? `?limit=${payload}` : ""}`
    )
      .then(res => res.json())
      .then(data => {
        // let test = data.filter(m => m.gender === "MAN");
        // console.log(test);
        // console.log(data);
        commit("createProducts", data);
      });
  },

  // getProduct({ commit }, payload) {
  //   console.log(payload + 'dddd')
  //   fetch(
  //     `http://localhost:9999/api/products/${payload}`
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       commit("createProduct", data);
  //     });
  // }
  addProductToCart({ commit }, { product, quantity }) {
    commit("addToCart", { product, quantity });
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
  removeProductFromCart(state,product) {
    state.cart =state.cart.filter(item => {
      return item.product._id !== product._id;
    })
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
