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

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  methods: {},
  created() {
    this.$store.dispatch("getCartItems");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");

#app {
  padding-top: 56px;
  font-family: "Oswald", sans-serif;
  background-color: azure;
}
.auth {
  margin-top: 70px;
  border-radius: 25px;
}
</style>
