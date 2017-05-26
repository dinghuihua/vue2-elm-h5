import {
  SET_LOADING
} from './mutation_types.js'

export default {
  // 设置是否正在加载
  [SET_LOADING] (state, loadstate) {
    state.isLoading = loadstate
  }
}
