<template>
  <div>
    <button @click="addFn">点击加2</button>
    <button @click="reduceFn">延迟减1</button>
  </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: 'Btn',
  // methods: {
  //   addFn () {
  //     // 使用$tore.commit调用store中的mutation中的increase方法
  //     // 传参的话 使用payload
  //     this.$store.commit('increase', 2)
  //   },
  //   reduceFn () {
  //     // 使用$store.dispatch调用store中的action中的异步方法
  //     this.$store.dispatch('decreaseAsync')
  //   }
  // },
  // Vue3.0 使用useStore 方法
  setup() {
    const store = useStore()

    const addFn = () => {
      store.commit('increase', 2)
    }

    const reduceFn = () => {
      store.dispatch('decreaseAsync')
    }

    return {
      addFn,
      reduceFn
    }
  }
}
</script>

<style scoped>

</style>
