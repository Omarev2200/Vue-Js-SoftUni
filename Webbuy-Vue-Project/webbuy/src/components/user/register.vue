<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form class="form-signin" @submit.prevent="register">
              <label for="inputEmail">Email address</label>
              <div class="form-label-group">
                <i class="material-icons">email</i>
                <input
                  type="email"
                  v-model="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <label for="inputPassword">Password</label>
              <div class="form-label-group">
                <i class="material-icons">lock</i>
                <input
                  type="password"
                  v-model="password"
                  name="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="***********"
                  required
                />
              </div>

              <label for="inputPassword">Confirm Password</label>
              <div class="form-label-group">
                 <i class="material-icons">lock</i>
                <input
                  type="password"
                  v-model="confirmPassword"
                  name="re-password"
                  id="re-password"
                  class="form-control"
                  placeholder="***********"
                  required
                />
              </div>
              <br />
              <button class="btn btn-lg btn-primary btn-block text-uppercase">
                <span v-if="!loading">Register</span>

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
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
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
  created() {},
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },

  methods: {
    register() {
      this.$store.dispatch("registerUser", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.form-label-group {
  display: flex;
}

.material-icons {
  padding-top: 8px;
}


</style>