import store from "../store";
export default (to, from, next) => {
  const isAuthenticated = store.getters.user;
  console.log(store.getters.user);
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
  //     if (store.getters.user) {
  //         next('/login')
  //     }else{
  //         next()
  //     }
};
