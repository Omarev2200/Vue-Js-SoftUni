<template>
      <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Webbuy</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            
          </li>
          <li class="nav-item">
              
            <router-link class="nav-link" to="/profile" >Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item btn btn-lg btn-primary"  >
            
            <router-link class="nav-link" to="/user/cart">
            <ion-icon name="cart-outline"></ion-icon>
            Cart <span>0</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
</template>

<script >
export default {
  name: 'Navigation',
  props: {
  
  }
}
</script>
<style >

</style>



