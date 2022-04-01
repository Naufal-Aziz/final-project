import axios from 'axios'

const state = {
    blogs: [],
};

const getters = {
    randomBlogs: (state) => state.blogs,
};

const actions = {
    async fetchRandomBlogs({ commit }) {
        const response = await axios.get('http://demo-api-vue.sanbercloud.com/api/v2/blog/random/3')

        commit('setRandomBlogs', response.data.blogs);
    },
};

const mutations = {
    setRandomBlogs: (state, randomBlogs) => (state.blogs = randomBlogs),
};

export default {
    state,
    getters,
    actions,
    mutations
}