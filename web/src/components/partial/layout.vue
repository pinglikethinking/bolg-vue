<template>
  <div>
    <AppHeader></AppHeader>
    <Sidebar></Sidebar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/partial/header'
  import Sidebar from '@/components/partial/sidebar'
  export default {
    components: {
      AppHeader,
      Sidebar
    }
  }
</script>

<style lang="scss">
.main-content {
  width: 100%;
  height: 100%;
  padding-left: 200px;
  padding-top: 100px;
}
.sidebar-hidden .main-content {
  padding-left: 50px;
}
</style>

