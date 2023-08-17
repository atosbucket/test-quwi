import axios from 'axios'
import Cookies from 'js-cookie'

export const state = () => ({
    postsLoaded: [],
    commentsLoaded: [],
    token: null // localStorage.getItem('token') || null
})

export const getters = {
    getPostsLoaded(state) {
        return state.postsLoaded
    },
    checkAuthUser(state) {
        return state.token != null // true если не равен null
    }

}

export const mutations = {
    setPosts(state, posts) {
        state.postsLoaded = posts
    },
    addPost(state, post) {
        state.postsLoaded.push(post)
    },

    editPost(state, editPost) {
        const postIndex = state.postsLoaded.findIndex(p => p.id === editPost.id)
        state.postsLoaded[postIndex] = editPost
    },
    addComment(state, comment) {
        state.commentsLoaded.push(comment)
    },
    setToken(state, token) {
        state.token = token
        //localStorage.setItem('token', token)
    },
    removeToken(state) {
        state.token = null
        localStorage.removeItem('token')
    }
}

export const actions = {

    // Забираю все посты с Бэка
    nuxtServerInit({ commit }, context) {
        return axios.get('https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
            .then(res => {
                // console.log('Посты из БД ', res)
                const postsArray = []
                for (let key in res.data) {
                    postsArray.push({ ...res.data[key], id: key })
                }
                commit('setPosts', postsArray)
            })
            .catch(e => {
                console.log(e)
            })
    },

    // Авторизация пользователя
    authUser({ commit }, authData) {
        const key = 'AIzaSyCcFderO-gm1_ki1Z1UhzpGfh0AXY9OKkw'
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, { ...authData, "returnSecureToken": true })
            .then(res => {

                const token = res.data.idToken
                commit('setToken', token)

                // token to local storage
                localStorage.setItem('token', token)

                // token to cookie
                Cookies.set('jwt', token, {sameSite: 'None', secure: true})
                // this.$cookies.set('jwt', token, {sameSite: 'none',
                // secure: true})

            })
            .catch(e => console.log(e))
    },

    initAuth({ commit }, req) {
        let token

        if (req) {

            // если есть сервер выполняем логику
            if (!req.headers.cookie) {
                return false
            } else {

                const jwtCookie = req.headers.cookie
                    .split(';')
                    .find(t => t.trim().startsWith('jwt='))
                if (!jwtCookie) {
                    return false
                } else {
                    token = jwtCookie.split('=')[1]
                }
            }
        }
        // если не серверный метод, то это условие
        else {
            token = localStorage.getItem('token')
            if (!token) {
                return false
            }
        }

        commit('setToken', token)

    },

    // Разлогиниваем пользователя
    logoutUser({ commit }) {
        commit('removeToken')
        localStorage.removeItem('token')
        Cookies.remove('jwt', {sameSite: 'None', secure: true})
    },
    // Добавлю пост 
    addPost({ commit, state }, post) {
        return axios.post('https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?auth=${state.token}', post)
            .then(res => {
                commit('addPost', { ...post, id: res.data.name })
            })
            .catch(e => {
                console.log(e)
            })
    },

    // Сохраняю отредактированный пост
    editPost({ commit, state }, post) {

        return axios.put(`https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${post.id}.json?auth=${state.token}`, post)
            .then(res => {
                commit('editPost', post)
            })
            .catch(e => console.log(e))
    },

    // Добавляю комментарий
    addComment({ commit }, comment) {
        return axios.post('https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json', comment)
            .then(res => {
                commit('addComment', { ...comment, id: res.data.name })
            })
            .catch(e => {
                console.log(e)
            })
    }
}