import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  getters: {
    theme: state => state.theme,
    isDark: state => state.theme === 'dark'
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    initTheme({ commit }) {
      // Load theme from localStorage or system preference
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        commit('setTheme', savedTheme)
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        commit('setTheme', 'dark')
      }
    },
    changeTheme({ commit, state }) {
      commit('toggleTheme')
      localStorage.setItem('theme', state.theme)
      
      // Apply theme to document
      const html = document.documentElement
      if (state.theme === 'dark') {
        html.classList.add('dark')
        html.setAttribute('data-theme', 'dark')
      } else {
        html.classList.remove('dark')
        html.setAttribute('data-theme', 'light')
      }
    }
  },
  modules: {
  }
})
