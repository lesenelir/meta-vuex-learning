<template>
  <div class="home">
    <h1>Home页面的数据：{{$store.getters.getNum}} - {{$store.state.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
