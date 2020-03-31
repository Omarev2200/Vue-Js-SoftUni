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
import ProductsMаn from '../components/products/products-mаn.vue';
import ProductsWoman from '../components/products/products-woman.vue';
import NotFound from "../components/not-found/not-found";
import AuthGuard from "./auth-guard";
import GuestGuard from "./guest-guard";

Vue.use(Router);

export default new Router({
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
      component: Login,
      beforeEnter: GuestGuard
    },

    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter: GuestGuard
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
      component: CreateProduct,
      beforeEnter: AuthGuard

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
      path: "/products-mаn",
      name: "ProductsMаn",
      component: ProductsMаn
    },
    {
      path: "/products-woman",
      name: "ProductsWoman",
      component: ProductsWoman
    },

    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
