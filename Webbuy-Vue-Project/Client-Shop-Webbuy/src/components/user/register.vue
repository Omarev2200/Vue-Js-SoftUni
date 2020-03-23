<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form class="form-register" @submit.prevent="register">
              <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                <label for="form-group">Email address</label>
                <div class="form-label-group">
                  <i class="material-icons">email</i>
                  <input
                    type="email"
                    v-model="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email"
                    @blur="$v.email.$touch"
                    required
                  />
                </div>
                <template v-if="$v.email.$error">
                  <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="!$v.email.required"
                  >Email is required!</div>
                  <div
                    class="alert alert-danger"
                    role="alert"
                    v-else-if="!$v.email.email"
                  >Invalid email!</div>
                </template>
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
                  @blur="$v.password.$touch"
                  required
                />
              </div>

              <template v-if="$v.password.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.password.required"
                >Password is required!</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.password.minLength"
                >Password should be longer than 6 symbols!</div>
              </template>
              <label for="cPassword">Confirm Password</label>
              <div class="form-label-group">
                <i class="material-icons">lock</i>
                <input
                  type="password"
                  v-model="cPassword"
                  name="cPassword"
                  id="cPassword"
                  class="form-control"
                  placeholder="***********"
                  @blur="$v.cPassword.$touch()"
                  required
                />
              </div>

              <template v-if="$v.cPassword.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.cPassword.sameAs"
                >Passwords don't match!</div>
              </template>
              <br />
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                :disabled="$v.$invalid"
              >
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
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
      cPassword: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    cPassword: {
      sameAs: sameAs("password")
    }
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

.alert {
  margin-left: 23px;
}
</style>