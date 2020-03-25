<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">WEBBUY</router-link>
        <router-link
          class="navbar-brand"
          v-if="isAdmin === 'Admin'"
          to="/create-product"
        >Create Product</router-link>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" v-if="isLogged">
                <i class="material-icons">account_circle</i>
                Profile
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" v-if="isLogged" @click="onLogout">
                Logout
                <i class="material-icons">exit_to_app</i>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="!isLogged" to="/login">
                <i class="material-icons">lock_open</i>
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="!isLogged" to="/register">
                <i class="material-icons">sentiment_satisfied_alt</i>
                Register
              </router-link>
            </li>
            <li class="nav-item"></li>
            <li>
              <router-link class="nav-link" to="/user/shoping-cart">
                <i class="large material-icons">local_grocery_store</i>
                Cart
                
                <span class="quantity">{{quantity}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script >
// import { mapActions } from "vuex";
export default {
  name: "Navigation",

  computed: {
    quantity() {
        return this.$store.getters.cartItemCount;
    },
    isLogged() {
      return !!this.$store.getters.user;
    },

    isAdmin() {
      if (!this.$store.getters.user) {
        return;
      }
      return this.$store.getters.user.roles;
    }
  },

  

  methods: {
    onLogout() {
      // this.$store.dispatch("logout");
      fetch(`http://localhost:9999/api/user/logout`, {
        method: "POST",
        credentials: "include"
      }).then(res => res.text());
    }
  }
};
</script>
<style scoped >
.navbar {
  background-color: aqua;
}
a {
  color: black;
}

.nav-item {
  margin-right: 15px;
}
.nav-link {
  display: flex;
}

.material-icons {
  padding-bottom: 8px;
}
.quantity{
  padding-left: 5px;
}
</style>



