<template>
  <div id="app">
    <Navigation />

    <router-view />
    <notifications group="auth" position="top center" class="auth" />

    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/core/navigation";
import Footer from "./components/core/footer";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  methods:{
    ...mapActions(['isAuth'])
  },
  created(){
    this.isAuth();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");

#app {
  padding-top: 56px;
  font-family: "Oswald", sans-serif;
}
.auth {
  margin-top: 70px;
  border-radius: 25px;
}
</style>
