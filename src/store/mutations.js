export default {
  increase (state, payload = 1) { // 默认参数是1
    state.num += payload
  },
  decrease (state, payload = 1) {
    state.num -= payload
  }
}
