<template>
  <div id="app">
  <Navigation/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
import Navigation from './components/core/navigation';
import Footer from './components/core/footer';


export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    
  }
};
</script>

<style>
body {
  padding-top: 56px;
}
</style>
