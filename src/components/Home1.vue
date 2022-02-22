<template>
  <div class="home">
    <h1>Home1页面的数据：{{num}} - {{name}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home1',
  computed: {
    ...mapState(['num', 'name']) // 传递的数组是state的变量名
  }
}
</script>

<style scoped>

</style>
