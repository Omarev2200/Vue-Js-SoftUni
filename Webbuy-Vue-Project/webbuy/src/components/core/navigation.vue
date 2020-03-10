<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">WEBBUY</router-link>
        <router-link class="navbar-brand" to="/create-product">Create Product</router-link>
        
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"></li>
            <li class="nav-item" v-if="isLogged">
              <router-link class="nav-link" to="/profile">
              
                Profile
                
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
            <li class="nav-item">
            <i class="large material-icons">local_grocery_store</i>
            </li>
            <li >
              <router-link class="nav-link" to="/user/cart">
                Cart<span>0</span>
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
<style scoped >
.navbar {
  background-color: aqua;
  ;
}

.container .nav-link {
  color: black;
  
}
</style>



