import store from "../store";
export default (to, from, next) => {
  let isAuthenticated = true;

    if (store.getters.user) {
        isAuthenticated =false;
        
    }else{
        isAuthenticated = true;
    }

    if(isAuthenticated) {
        next(); // allow to enter route
       } else{
        next('/login'); // go to '/login';
       }
};
