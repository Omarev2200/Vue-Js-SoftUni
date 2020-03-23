import Vue from "vue";
// initial state
const state = {
  loadProducts: [],
  loadProduct:null
};

// getters
const getters = {
  lodedProducts(state) {
    return state.loadProducts
  },
  lodedProduct(state) {
    return (id) => {
      return state.loadProducts.find((product) => {
        return product._id === id;
      })
    }
  },

  
};

// actions
const actions = {
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
      .then((data) => {
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
};

// mutations
const mutations = {
  createProducts(state, payload) {
    state.loadProducts = payload;
  },
 
};

export default {
  
  state,
  getters,
  actions,
  mutations
};
