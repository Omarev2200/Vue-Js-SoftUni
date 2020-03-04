import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/home';
import Login from '../components/user/login';
import Register from '../components/user/register';
import Profile from '../components/user/profile';
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/login',
            name: 'Login',
            component: Login,
            

        },

        {
            path: '/register',
            name: 'Register',
            component: Register
        },

        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            beforeEnter:AuthGuard
        }
    ]
});