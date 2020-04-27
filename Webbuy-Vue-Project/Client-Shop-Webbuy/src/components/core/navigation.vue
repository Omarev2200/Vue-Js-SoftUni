<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">WEBBUY</router-link>

        <router-link class="navbar-brand" v-if="isAdmin" to="/create-product">Create Product</router-link>

        <router-link class="navbar-brand" v-if="isAdmin" to="/all-orders">All Orders</router-link>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="'/profile/' + user._id" v-if="isLogged">
                <i class="material-icons">account_circle</i>
                Profile
              </router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/login" v-if="isLogged" @click.prevent="onLogout">
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
                <span class="quantity">{{ cartItemCount }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navigation",

  computed: {
    ...mapGetters(["cartItemCount"]),
    user() {
      return this.$store.getters.user;
    },
    isLogged() {
      return !!this.$store.getters.user;
    },

    isAdmin() {
      if (!this.$store.getters.user) {
        return;
      }
      if (this.$store.getters.user.roles === "Admin") {
        return true;
      }
      return false;
    }
  },

  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: #00ffff;
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
.quantity {
  padding-left: 5px;
}
</style>
