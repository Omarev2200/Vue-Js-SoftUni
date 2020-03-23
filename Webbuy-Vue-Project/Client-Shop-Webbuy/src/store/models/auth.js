import Vue from "vue";
 export default {
      // initial state
 state :   {  
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
    },
},

// actions
 actions :{
   auth() {
     console.log('eee')
    fetch("http://localhost:9999/api/auth")
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
   },
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
    fetch("http://localhost:9999/api/user/login",  {
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

        const  newUser = {
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
}
 
  };
  