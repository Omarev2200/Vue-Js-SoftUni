<template>
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          
         
          <h1 class="error-details">The order was successful!</h1>
          <div class="error-actions">
            <router-link to="/" class="btn btn-primary btn-lg">
              <span class="glyphicon glyphicon-home"></span>
              Take Me Home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }

.container {
    padding-top: 5%;
  }
</style>