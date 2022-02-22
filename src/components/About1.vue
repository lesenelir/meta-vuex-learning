<template>
  <div class="about">
    <h1>About1页面的数据：{{getNum}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'About1',
  computed: {
    ...mapGetters(['getNum']) // 传递的数组是getters中的变量名字
  }
}
</script>

<style scoped>

</style>
