import store from '../store'
export default (to, from, next) => {
  // const token = localStorage.getItem("user-token");
console.log(store.getters.user);

  if (!store.getters.user) {
    next();
  } else {
    next("/");
  }
};
