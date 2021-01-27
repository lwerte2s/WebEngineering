vue ui
<template>
  <div id="app">
      <TheNavigation />
      <transition name="slide" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default {
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
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-enter,
.slide-leave-to  {
  opacity: 1.0;
  transform: translateX(-3%);
}


</style>
