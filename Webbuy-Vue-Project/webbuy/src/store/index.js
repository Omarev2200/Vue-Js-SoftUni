import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null,
        loading: false,
        error: null
    },

    mutations: {
        setUser(state, payload) {
            state.user = payload
        },

        setLoading(state, payload) {
            state.loading = payload;
        },

        setError(state, payload) {
            state.error = payload;
        },
        clearError(state) {
            state.error = null;
        }
    },

    actions: {
        registerUser({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    data => {
                        Vue.notify({
                            group: 'auth',
                            type: 'success',
                            title: 'Success',
                            text: 'Register'
                        })
                        commit('setLoading', false)
                        const newUser = {
                            id: data.user.uid,
                            email: data.user.email,
                            userOrders: []
                        }
                        commit('setUser', newUser);
                    })
                .catch(
                    error => {
                        Vue.notify({
                            group: 'auth',
                            type: 'error',
                            title: 'Warnig',
                            text: error
                        })
                        commit('setLoading', false)
                        commit('setError', error)
                    });
        },

        loginUser({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    data => {
                        commit('setLoading', false)
                        Vue.notify({
                            group: 'auth',
                            type: 'success',
                            title: 'Success',
                            text: 'Login'
                        })
                        const newUser = {
                            id: data.user.uid,
                            email: data.user.email,
                            userOrders: []
                        }
                        commit('setUser', newUser);
                    }
                )
                .catch(
                    (error) => {
                        Vue.notify({
                            group: 'auth',
                            type: 'error',
                            title: 'Warning',
                            text: error
                        })
                        commit('setLoading', false)
                        commit('setError', error)
                    });
        },

        authSingIn({ commit }, payload) {
            commit('setUser', { id: payload.uid, userOrders: [] })
        },

        logout({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
        },

        clearError({ commit }) {
            commit('clearError')
        }
    },

    getters: {
        user(state) {
            return state.user;
        },

        error(state) {
            return state.error;
        },

        loading(state) {
            return state.loading;
        }
    }
})