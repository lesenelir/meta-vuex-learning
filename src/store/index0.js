/**
 *  store文件夹下的index.js是用来做状态管理的
 *  store仓库 用来存放数据
 *  该文件可以把getters、mutations、actions等比较复杂的文件进行拆分
 */
import { createStore } from 'vuex'

export default createStore({
  // 1. state相当于组件中的data，专门用来存放全局的数据
  state: {
    num: 0,
    name: 'lesenelir'
  },
  // 2. getters 相当于组件中的computed，getters是全局的，computed是组件内部使用的
  getters: {
    getNum (state) {
      // return this.$store.state.num
      return state.num
    }
  },
  // 3. mutations 相当于组件中的methods，但不能实现异步方法（定时器、axios）
  // mutations 是修改state中的数据的唯一方案
  mutations: {
    increase (state, payload = 1) { // 默认参数是1
      state.num += payload
    },
    decrease (state, payload = 1) {
      state.num -= payload
    }
  },
  // 4. actions 用来处理异步，实际修改状态值依然是mutations
  actions: {
    decreaseAsync (context) { // 处理异步任务：延迟时间减少
      setTimeout(() => {
        context.commit('decrease')
      }, 1000)
    }
  },
  modules: {
  }
})
