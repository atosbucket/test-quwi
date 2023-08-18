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
        state.projects = state.projects.map(p => {
            if(p.id == project.id)
                return project;
            return p;
        });
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
    async getProjects({commit}){
        const res = await this.$axios.get('projects-manage/index?filters[is_active]=1&sort=dta_create');
        if(res.status == 200) {
            commit("setProjects", res.data.projects);
            return res.data.projects;
        }
    },
    async updateProject({commit}, data) {
        const res = await this.$axios.post(`projects-manage/update?id=${data.id}`, {
            name: data.name
        });
        if(res.status == 200) {
            commit("editProject", res.data.project);
            return res.data.project;
        }
    }
}
