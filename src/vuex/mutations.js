import {
  SET,
  COMMON
} from './mutation-types'
import Vue from 'vue'

const mutations = {
  [SET] (state, payload) {
    const func = (obj, i) => {
      return i < payload.path.length - 1 ? func(obj[payload.path[i]], i + 1) : { obj: obj, key: payload.path[i] }
    }
    const ret = func(state, 0)
    Vue.set(ret.obj, ret.key, payload.value)
  },
  [COMMON] (state, data) {
    Vue.set(state, data.key, data.value)
  }
}

export default mutations