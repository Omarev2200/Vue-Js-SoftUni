import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    loadProducts: []
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    setLoading(state, payload) {
      state.loading = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    createProduct(state, payload) {
      state.loadProducts.push(payload);
    }
  },

  actions: {
    registerUser({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      fetch("http://localhost:9999/api/user/register", {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.email);

          Vue.notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Register"
          });
          commit("setLoading", false);
          const newUser = {
            id: data._id,
            role: data.roles,
            email: data.email,
            posts: data.posts
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Warnig",
            text: error
          });
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    loginUser({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      fetch("http://localhost:9999/api/user/login", {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
      })
        .then(response => response.json())
        .then(data => {
          commit("setLoading", false);
          Vue.notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Login"
          });
          const newUser = {
            id: data._id,
            role: data.roles,
            email: data.email,
            posts: data.posts,
            roles: data.roles[0]
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Warning",
            text: error
          });
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    authSingIn({ commit }, payload) {
      commit("setUser", { id: payload.uid, userOrders: [] });
    },

    logout({ commit }) {
      fetch(`http://localhost:9999/api/user/logout`, {
        method: "POST",
        credentials: "include"
      }).then(res => res.text());
      commit("setUser", null);
    },

    clearError({ commit }) {
      commit("clearError");
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
      }).then(data => {
        console.log(data);

        commit("createProduct", {
          ...product
        });
      });
    },
    getProducts({ commit }) {
      fetch(`http://localhost:9999/api/products/`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          commit("createProduct", data);
        });
    }
  },

  getters: {
    user(state) {
      return state.user;
    },

    error(state) {
      return state.error;
    },

    loading(state) {
      return state.loading;
    },

    lodedProducts(state) {
      return state.loadProducts;
    }
  }
});
