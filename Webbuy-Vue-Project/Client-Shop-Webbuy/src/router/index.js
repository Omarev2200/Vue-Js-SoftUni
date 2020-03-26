import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home/home";
import Login from "../components/user/login";
import Register from "../components/user/register";
import Profile from "../components/user/profile";
import CreateProduct from "../components/admin/create-product";
import ProductDetails from "../components/products/product-details";
import ProductEdit from "../components/products/product-edit.vue";
import ShopingCard from "../components/products/shoping-cart";

import NotFound from "../components/not-found/not-found";
import AuthGuard from "./auth-guard";
// import GuestGuard from "./guest-guard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/login",
      name: "Login",
      component: Login,
      // beforeEnter: GuestGuard
    },

    {
      path: "/register",
      name: "Register",
      component: Register,
      // beforeEnter: GuestGuard
    },

    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: AuthGuard
    },

    {
      path: "/create-product",
      name: "CreateProduct",
      component: CreateProduct
    },

    {
      path: "/details-product/:id",
      name: "ProductDetails",
      component: ProductDetails
    },
    {
      path: "/product-edit/:id",
      name: "ProductEdit",
      component: ProductEdit
    },

    {
      path: "/user/shoping-cart",
      name: "ShopingCard",
      component: ShopingCard
    },

    {
      path: "**",
      name: "NotFound",
      component: NotFound
    }
  ]
});
