import Vue from "vue";
import axios from "axios";
import router from "../../router";
axios.defaults.withCredentials = true
export default {
  // initial state
  state: {
    user: null,
    loading: false,
    error: null,
    loadProducts: null
  },

  // getters
  getters: {
    user(state) {
      return state.user;
    },

    error(state) {
      return state.error;
    },

    loading(state) {
      return state.loading;
    }
  },

  // actions
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
          //  const newUser = {
          //   id: data._id,
          //   role: data.roles,
          //   email: data.email,
          //   posts: data.posts
          // };
          // commit("setUser", newUser);
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
      axios
        .post(
          "http://localhost:9999/api/user/login",
          {
            email: payload.email,
            password: payload.password,
            
          },
        )

        .then(response => {
          commit("setLoading", false);
          Vue.notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Login"
          });

          const newUser = {
            id: response.data._id,
            role: response.data.roles,
            email: response.data.email,
            posts: response.data.posts,
            roles: response.data.roles[0]
          };

          commit("setUser", newUser);
        })
        .catch(error => {
          console.log(error);
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Warning",
            text: "Invalid email or password"
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
      }).then(res => {
        router.push("/login");
        Vue.notify({
          group: "auth",
          type: "success",
          title: "Success",
          text: "Logout"
        });
        res.text();
      });

      commit("setUser", null);
    },

    clearError({ commit }) {
      commit("clearError");
    }
  },

  // mutations
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
    }
  }
};
