import axios from 'axios'
import Cookies from 'js-cookie'
const apiURL = 'https://api.quwi.com/v2';

export const state = () => ({
    projects: [],
    currentUser: null,
    token: null // localStorage.getItem('token') || null
})

export const getters = {
    getProjects(state) {
        return state.projects
    },
    checkAuthUser(state) {
        return state.token != null
    }

}

export const mutations = {
    setProjects(state, projects) {
        state.projects = projects
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
    loginUser({ commit }, auth){
        return axios.post(`${apiURL}/auth/login`, auth)
            .then(res => {
                if(res.status == 200) {
                    console.log("result of login action", res.data);
                    commit('setToken', res.data.token);
                }
            })
            .catch(e => console.log(e));
    },
}
