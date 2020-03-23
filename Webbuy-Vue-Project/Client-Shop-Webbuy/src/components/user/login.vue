<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Login</h5>
            <form class="form-signin" @submit.prevent="login">
              <label for="inputEmail">Email address</label>
              <div class="form-label-group">
                <input
                  type="email"
                  v-model="email"
                  name="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                />
              </div>

              <label for="inputPassword">Password</label>
              <div class="form-label-group">
                <input
                  type="password"
                  v-model="password"
                  name="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <br />

              <button class="btn btn-lg btn-primary btn-block text-uppercase">
                <span v-if="!loading">Login</span>

                <div v-else>
                  Loading...
                  <div class="spinner-border text-wait"></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    loading() {
      return this.$store.getters.loading;
    }
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },

  methods: {
    
    login() {
      
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push("/")
      })
      .catch(error => {
        console.log(error);
        
      })
    }
  }
};
</script>

