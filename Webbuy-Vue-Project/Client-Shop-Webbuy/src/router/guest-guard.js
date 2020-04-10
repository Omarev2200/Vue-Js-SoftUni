// import store from '../store'
export default (to, from, next) => {
  const token = localStorage.getItem("user-token");

  if (!token) {
    next();
  } else {
    next("/");
  }
};
