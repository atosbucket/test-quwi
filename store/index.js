import axios from 'axios'
import Cookies from 'js-cookie'
const apiURL = 'https://api.quwi.com/v2';

export const state = () => ({
    projects: [],
    currentUser: null,
    token: null
})

export const getters = {
    getProjects(state) {
        return state.projects
    },
    getCurrentUser(state) {
        return state.currentUser
    },
    checkAuthUser(state) {
        return state.token != null
    }

}

export const mutations = {
    setProjects(state, projects) {
        state.projects = projects
    },
    setCurrentUser(state, user) {
        state.currentUser = user
    },
    addProject(state, project) {
        state.projects.push(project)
    },
    editProject(state, project) {
        // const postIndex = state.postsLoaded.findIndex(p => p.id === editPost.id)
        // state.postsLoaded[postIndex] = editPost
    },
    setToken(state, token) {
        state.token = token
        localStorage.setItem('token', token)
    },
    removeToken(state) {
        state.token = null
        localStorage.removeItem('token')
    }
}

export const actions = {
    registerUser({ commit }, auth){
        return axios.post(`${apiURL}/auth/signup`, auth)
            .then(res => {
                if(res.status == 200) {
                    console.log("result of register action", res.data);
                    commit('setToken', res.data.token);
                }
            })
            .catch(e => console.log(e));
    },
    loginUser({ commit }, auth) {
        return axios.post(`${apiURL}/auth/login`, auth)
            .then(res => {
                if(res.status == 200) {
                    console.log("result of login action", res.data);
                    commit('setToken', res.data.token);
                }
            })
            .catch(e => console.log(e));
    },
    getCurrentUser({commit, state}) {
        return axios.post(`${apiURL}/auth/init`, {
            headers: {
                Authorization: `Bearer ${state.token}`
            }
        })
            .then(res => {
                if(res.status == 200) {
                    console.log("result of getuser action", res.data);
                    commit('setCurrentUser', res.data);
                }
            })
            .catch(e => console.log(e));
    },
    logout({ commit, state }){
        return axios.post(`${apiURL}/auth/logout`, {
            headers: {
                Authorization: `Bearer ${state.token}`
            },
            anywhere: true
        })
            .then(res => {
                if(res.status == 200) {
                    console.log("result of logout action", res.data);
                    commit('removeToken');
                }
            })
            .catch(e => console.log(e));
    },
}
