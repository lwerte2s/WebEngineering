<template>
  <div id="app">
    <h1 class="head">9.2. Menü-Komponente</h1>
    <the-navigation></the-navigation>
    <the-navigation  v-bind:vertical="true"></the-navigation>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.head {
  border-bottom: 2px solid green;
}
</style>
