<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
  <home></home>
  <about></about>
  <btn></btn>
  <hr>
  <home1></home1>
  <about1></about1>
  <btn1></btn1>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
import Btn from './views/Btn'
import Home1 from './components/Home1'
import About1 from './components/About1'
import Btn1 from './components/Btn1'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Btn,
    Home1,
    About1,
    Btn1
  }
}
</script>

<style scoped>

</style>
