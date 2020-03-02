<template>
    
<div class="container">
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center">Login</h5>
          <form  class="form-signin">
            <label for="inputEmail">
              Email address
            </label>
            <div class="form-label-group">
              <input 
              type="email"  
              name='email' 
              id="inputEmail" 
              class="form-control"
              placeholder="Email address"  
              required>
            </div>

            <label for="inputPassword">Password</label>
            <div class="form-label-group">
              <input  
              type="password"  
              name="password" 
              id="inputPassword" 
              class="form-control" 
              placeholder="Password" 
              required>
            </div>

            <br>
            
            <button  class="btn btn-lg btn-primary btn-block text-uppercase">
              Login
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
 
}
</script>

<style >

</style>