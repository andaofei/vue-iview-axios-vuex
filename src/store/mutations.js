/**
 * Created by Administrator on 2018/3/8 0008.
 */
import * as types from './mutation-types'
const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}
export default mutations
