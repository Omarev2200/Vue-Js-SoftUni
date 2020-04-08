<template>
  <div>
    <div v-if="user === null">
      Loding...
    </div>
    <div v-else class="card">
      <h2 style="text-align:center">USER PROFILE</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
        alt="John"
        style="width:100%"
      />
      <h1>{{ user.email }}</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <p>
        <button class="btn btn-danger" @click.prevent="deleteUser">
          Delete
        </button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser", this.user._id);
    },
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-top: 100px;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;

  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
