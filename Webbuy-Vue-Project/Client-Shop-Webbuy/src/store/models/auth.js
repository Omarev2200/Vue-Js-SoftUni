import Vue from "vue";
import axios from "axios";
import router from "../../router";
axios.defaults.withCredentials = true;
export default {
  // initial state
  state: {
    user: null,
    loading: false,
    error: null,
    loadProducts: null,
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
    },
  },

  // actions
  actions: {
    isAuth({ commit }) {
      axios.get("auth").then((res) => {
        commit("setUser", res.data);
      });
    },
    registerUser({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      axios
        .post("user/register", {
          email: payload.email,
          password: payload.password,
        })

        .then((res) => {
          console.log(res.data.email);

          Vue.notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Register",
          });
          router.push("/login");
          commit("setLoading", false);
          //  const newUser = {
          //   id: data._id,
          //   role: data.roles,
          //   email: data.email,
          //   posts: data.posts
          // };
          // commit("setUser", newUser);
        })
        .catch((error) => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Warnig",
            text: error,
          });
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    loginUser({ commit,dispatch }, payload) {
      commit("setLoading", true);
      commit("clearError");
      axios
        .post("user/login", {
          email: payload.email,
          password: payload.password,
        })

        .then(() => {
          commit("setLoading", false);
          dispatch("isAuth");
          // const token = res.data.token;
          // localStorage.setItem("user-token", token);
          Vue.notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Login",
          });

          // commit("setUser", res.data.user);
          router.push("/");
        })
        .catch((error) => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Warning",
            text: "Invalid email or password",
          });
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    logout({ commit }) {
      axios.post(`user/logout`).then(() => {
        localStorage.removeItem("user-token");
        router.push("/login");
        Vue.notify({
          group: "auth",
          type: "success",
          title: "Success",
          text: "Logout",
        });
      });

      commit("setUser", null);
    },

    deleteUser({ commit }, payload) {
      axios
        .delete(`user/${payload}`)
        .then(() => {
          Vue.notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Delete User Profile",
          });
          router.push("/");
          commit("setUser", null);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    clearError({ commit }) {
      commit("clearError");
    },
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
    },
  },
};
