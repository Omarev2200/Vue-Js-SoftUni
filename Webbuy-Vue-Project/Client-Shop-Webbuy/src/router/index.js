import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home/home";
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
      component:()=>import( /* webpackChunkName: "login" */'../components/user/login'),
      beforeEnter: GuestGuard
      
    },

    {
      path: "/register",
      name: "Register",
      component:()=>import( /* webpackChunkName: "register" */'../components/user/register'),
      beforeEnter: GuestGuard
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
    },

    {
      path: "/user/shoping-cart",
      name: "ShopingCard",
      component:()=>import( /* webpackChunkName: "shoping-cart" */'../components/products/shoping-cart'),
    },
    {
      path: "/products-mаn",
      name: "ProductsMаn",
      component:()=>import( /* webpackChunkName: "products-mаn" */'../components/products/products-mаn.vue'),
    },
    {
      path: "/products-woman",
      name: "ProductsWoman",
      component:()=>import( /* webpackChunkName: "products-woman" */'../components/products/products-woman.vue'),
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
});
