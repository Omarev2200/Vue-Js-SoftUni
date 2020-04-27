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
            title: "Register",
            text: "Success",
          });
          router.push("/login");
          commit("setLoading", false);
        })
        .catch((error) => {
          Vue.notify({
            group: "auth",
            type: "error",
            title: "Email exsist",
            text:  'Warnig' ,
          });
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    loginUser({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      axios
        .post("user/login", {
          email: payload.email,
          password: payload.password,
        })

        .then((res) => {
          commit("setLoading", false);
          // dispatch("isAuth");
          const token = res.data.token;
          localStorage.setItem("user-token", token);
          Vue.notify({
            group: "auth",
            type: "success",
            title: "Login",
            text: "Success",
          });

          commit("setUser", res.data.user);
          router.push("/");
        })
        .catch((error) => {
          console.log(error);

          Vue.notify({
            group: "auth",
            type: "error",
            title: "Invalid email or password",
            text: "Warning",
          });
          commit("setLoading", false);
          commit("setError", error);
        });
    },

    logout({ commit, dispatch }) {
      axios.post(`user/logout`).then(() => {
        localStorage.removeItem("user-token");
        dispatch("clearCartAtLogout");
        router.push("/login");
        Vue.notify({
          group: "auth",
          type: "success",
          title: "Logout",
          text: "Success",
        });
      });

      commit("setUser", null);
    },

    deleteUser({ commit, dispatch }, payload) {
      axios
        .delete(`user/${payload}`)
        .then(() => {
          dispatch("logout");
          Vue.notify({
            group: "auth",
            type: "success",
            title: "Delete User Profile",
            text: "Success",
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
