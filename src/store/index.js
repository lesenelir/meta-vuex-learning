/**
 *  store文件夹下的index.js是用来做状态管理的
 *  store仓库 用来存放数据
 */
import { createStore } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  // 1. state相当于组件中的data，专门用来存放全局的数据
  state: {
    num: 0,
    name: 'lesenelir'
  },
  // 2. getters 相当于组件中的computed，getters是全局的，computed是组件内部使用的
  getters,
  // 3. mutations 相当于组件中的methods，但不能实现异步方法（定时器、axios）
  // mutations 是修改state中的数据的唯一方案
  mutations,
  // 4. actions 用来处理异步，实际修改状态值依然是mutations
  actions,
  modules: {
  }
})
