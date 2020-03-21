// initial state
const state = {
  loadProducts: null
};

// getters
const getters = {
  lodedProducts(state) {
    return state.loadProducts;
  }
};

// actions
const actions = {
  createProduct({ commit }, payload) {
    console.log(payload)
    const product = {
      brand: payload.brand,
      gender: payload.gender,
      price: payload.price,
      imigUrl: payload.imigUrl,
      size: payload.size
    };
    console.log(product)
    fetch("http://localhost:9999/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(product),
      credentials: "include"
    }).then(() => {
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
        let test = data.filter(m => m.gender === "MAN");
        console.log(test);
        console.log(data);
        commit("createProduct", data);
      });
  }
};

// mutations
const mutations = {
  createProduct(state, payload) {
    state.loadProducts = payload;
  }
};

export default {
  
  state,
  getters,
  actions,
  mutations
};
