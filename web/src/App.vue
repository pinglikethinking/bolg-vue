<template>
  <div id="app">
    <router-view :class="{ 'sidebar-hidden': options.minify }"></router-view>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'app',
  data () {
    return {
      options: store.menuOptions
    }
  }
}
</script>
<style lang="scss">
@import "./main.scss";
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
