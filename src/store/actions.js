export default {
  // 改变是否正在加载的状态
  setLoading ({commit}, loadstate) {
    commit('SET_LOADING', loadstate)
  }
}
