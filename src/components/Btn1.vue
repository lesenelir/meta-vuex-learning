<template>
  <div>
    <button @click="increase()">点击加1</button>
    <button @click="decreaseAsync()">延迟减1</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Btn1',
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['decreaseAsync'])
  }
}
</script>

<style scoped>

</style>
