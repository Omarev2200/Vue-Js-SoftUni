import store from "../store";

export default (to, from, next) => {
  let isAuthenticated = false;

  if (store.getters.user) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
};
