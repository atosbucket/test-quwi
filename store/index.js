import axios from 'axios'
import Cookies from 'js-cookie'
const apiURL = 'https://api.quwi.com/v2';

export const state = () => ({
    projects: [],
})

export const getters = {
    getProjects(state) {
        return state.projects
    },
    isAuthenticated(state) {
        return state.auth.loggedIn
    },
    loggedInUser(state) {
        return state.auth.user
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
}

export const actions = {
    async registerUser({ commit }, auth) {
        const res = await this.$axios.post('auth/signup', auth);

        if(res.status == 200) {
            const loginResult = await this.$auth.loginWith('local', {
                data: {
                    email: auth.email,
                    password: auth.password
                },
            });
            if(loginResult.status == 200) {
                return loginResult.data.token;
            }
        }
    },
    async loginUser({ commit }, auth) {
        const loginResult = await this.$auth.loginWith('local', {data: auth});
        if(loginResult.status == 200) {
            return loginResult.data.token;
        }
    },
    async logout({ commit, state }){
        await this.$auth.logout();
    },
}
