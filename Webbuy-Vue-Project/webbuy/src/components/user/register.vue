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
                <input
                  type="password"
                  v-model="confirmPassword"
                  name="re-password"
                  id="re-password"
                  class="form-control"
                  placeholder="***********"
                  :rules='comparePassword'
                  required
                />
              </div>
              <br />
              <button class="btn btn-lg btn-primary btn-block text-uppercase">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import firebase from 'firebase';
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },

  computed: {
      comparePassword() {
          return this.password!==this.confirmPassword ? 'Password do not match !' : '';
      }
  },

  methods: {
      register() {
         firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
         .then((user) => {
             console.log(user);
             this.$router.push('/login')
             alert('Your account has been created !')
         },
         (err) =>{
            alert('Oops. '+ err.message)
         }
         )
          
      }
  }
};
</script>

<style >
</style>