<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">Webbuy</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"></li>
            <li class="nav-item" v-if="isLogged">
              <router-link class="nav-link" to="/profile">
                <span>
                Profile
                </span>
              </router-link>
              
            </li>
            <li class="nav-item" v-if="isLogged">
              <a class="nav-link" href="#" @click="onLogout">Logout</a>
              
            </li>
            <li class="nav-item" v-if="!isLogged">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLogged">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item btn btn-info">
              <router-link class="nav-link" to="/user/cart">
                <i class="large material-icons">local_grocery_store</i>
                Cart
                <span>0</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script >
export default {
  name: "Navigation",

  computed: {
    isLogged() {
      return !!this.$store.getters.user;
    }
  },

  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>
<style >
</style>



