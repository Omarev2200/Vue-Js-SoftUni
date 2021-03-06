
import VueRouter from 'vue-router';
// import store from '../store';
import Home from "../components/home/home";
import AuthGuard from "./auth-guard";
import GuestGuard from "./guest-guard";

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/login",
      name: "Login",
      component:()=>import( /* webpackChunkName: "login" */'../components/user/login'),
      beforeEnter:GuestGuard
    },

    {
      path: "/register",
      name: "Register",
      component:()=>import( /* webpackChunkName: "register" */'../components/user/register'),
      beforeEnter:GuestGuard
    },

    {
      path: "/profile/:id",
      name: "Profile",
      component:()=>import( /* webpackChunkName: "profile" */'../components/user/profile'),
      beforeEnter: AuthGuard
    },

    {
      path: "/create-product",
      name: "CreateProduct",
      component:()=>import( /* webpackChunkName: "create-product" */'../components/admin/create-product'),
      beforeEnter: AuthGuard

    },

    {
      path: "/details-product/:id",
      name: "ProductDetails",
      component:()=>import( /* webpackChunkName: "details-product" */'../components/products/product-details'),
    },
    {
      path: "/product-edit/:id",
      name: "ProductEdit",
      component:()=>import( /* webpackChunkName: "product-edit" */'../components/admin/product-edit'),
      beforeEnter: AuthGuard
    },

    {
      path: "/user/shoping-cart",
      name: "ShopingCard",
      component:()=>import( /* webpackChunkName: "shoping-cart" */'../components/products/shoping-cart'),
    },
    {
      path: "/products-mаn-search",
      name: "ProductsMаn",
      component:()=>import( /* webpackChunkName: "products-mаn-search" */'../components/home/search/products-mаn-search.vue'),
    },
    {
      path: "/products-woman-search",
      name: "ProductsWoman",
      component:()=>import( /* webpackChunkName: "products-woman-search" */'../components/home/search/products-woman-search.vue'),
    },

    {
      path: "/order-completed",
      component:()=>import( /* webpackChunkName: "order-completed" */'../components/products/order-completed.vue'),
    },

    {
      path: "/all-orders",
      component:()=>import( /* webpackChunkName: "all-orders" */'../components/admin/all-orders.vue'),
    },

    {
      path: "*",
      name: "NotFound",
      component:()=>import( /* webpackChunkName: "NotFound" */'../components/not-found/not-found'),
    }
  ]

})

// router.beforeEach  ((to, from, next) => {
//   console.log(store.getters.user);
//   if (!store.getters.user) {
//     next();
//   } else {
//     next("/");
//   }
// });
export default router;
