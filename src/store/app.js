const app = {
  namespaced: true,
  state: {
    tabbar: 'home',
    title: '首页'
  },
  mutations: {
    setTab (state, tab) {
      const titleMap = {
        my: '我的',
        order: '订单',
        verification: '核销',
        home: '首页'
      }
      state.title = titleMap[tab] || '---'
      state.tabbar = tab
    },
    setTitle (state, title) {
      state.title = title
    }
  },
  actions: {
    selectTab ({commit}, tab) {
      commit('setTab', tab)
    },
    setTtile ({commit}, title) {
      commit('setTitle', title)
    }
  },
  getters: {}
}
export default app
