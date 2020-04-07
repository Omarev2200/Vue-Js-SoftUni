<template>
  <div class="container">
    <div class="row">
      <div class="shopping-form">
        <div class="card card-signin my-5">
          <div class="card-body">
            <form class="form-signin" @submit.prevent="sendOrder">
              <div class="form-label-group">
                <input
                  type="text"
                  v-model="firstName"
                  id="firstName"
                  class="form-control"
                  placeholder="First Name"
                  @blur="$v.firstName.$touch"
                  required
                />
              </div>
              <template v-if="$v.firstName.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.firstName.required"
                >First Name is required!</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.firstName.minLength"
                >First Name must have at least 4 letters.</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.firstName.alpha"
                >First Name should only have alphabet letters</div>
              </template>
              <br />

              <div class="form-label-group">
                <input
                  type="text"
                  v-model="lastName"
                  name="lastName"
                  id="lastName"
                  class="form-control"
                  placeholder="Last Name"
                  @blur="$v.lastName.$touch"
                  required
                />
              </div>

              <template v-if="$v.lastName.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.lastName.required"
                >Last Name is required!</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.lastName.minLength"
                >Last Name must have at least 4 letters.</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.lastName.alpha"
                >Last Name should only have alphabet letters</div>
              </template>
              <br />
              <div class="form-label-group">
                <option value="1">+359</option>
                <input
                  type="text"
                  v-model="phoneNumber"
                  id="phoneNumber"
                  class="form-control"
                  placeholder="Phone Number"
                  @blur="$v.phoneNumber.$touch"
                  required
                />
              </div>

              <template v-if="$v.phoneNumber.$error">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="!$v.phoneNumber.required"
                >Phone Number is required!</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.phoneNumber.minLength"
                >Phone Number must have at least 9 letters.</div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-else-if="!$v.phoneNumber.numeric"
                >Phone Number should only have numbers</div>
              </template>

              <br />

              <button
                class="btn btn-lg btn-success btn-block text-uppercase"
                :disabled="$v.$invalid"
              >
                <span v-if="!loading">Continue Shopping</span>

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

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, alpha, numeric } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "ShoppingForm",
  props: ["order"],
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: ""
    };
  },
  validations: {
    firstName: {
      minLength: minLength(4),
      alpha,
      required
    },
    lastName: {
      minLength: minLength(4),
      alpha,
      required
    },
    phoneNumber: {
      minLength: minLength(9),
      numeric,
      required
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
  methods: {
    sendOrder() {
      this.$store.dispatch("sendOrder", {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        order: this.order
      });
      
     this.$store.dispatch("clearCart")
    
    }
  },
 
};
</script>

<style scoped>
.shopping-form {
  width: 100%;
}
</style>