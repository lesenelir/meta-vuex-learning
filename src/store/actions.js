export default {
  decreaseAsync (context) { // 处理异步任务：延迟时间减少
    setTimeout(() => {
      context.commit('decrease')
    }, 1000)
  }
}
