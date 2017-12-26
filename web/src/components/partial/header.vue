<template>
  <nav class="navbar fixed-top navbar-expand-lg" role="navigation" id="header">
    <div id="nav-header" :class="{ minify: options.minify }">
      <Logo></Logo>
    </div>
    <div class="collapse navbar-collapse main-header">
      <ul class="navbar-nav nav mr-3 ml-3">
        <li class="nav-item">
          <a class="nav-link" data-toggle="tooltip" data-placement="bottom" title="收起或展开侧边栏" @click="sidebarToggle()"><i class="fa fa-indent"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import store from '@/store'
  import Logo from '@/widgets/logo/logo'
  export default {
    name: 'appHeader',
    data () {
      return {
        options: store.menuOptions
      }
    },
    components: {
      Logo
    },
    methods: {
      sidebarToggle () {
        this.$set(this.options, 'minify', !this.options.minify)
      }
    },
    created () {}
  }
</script>

<style lang="scss">
  #header {
    background-color: #f5f5f5;
    padding: 0;
    .main-header {
      flex: 1
    }
  }
  #nav-header {
    width: 200px;
    height: 79px;
    overflow: hidden;
    padding: 15px 0;
    text-align: center;
    background-color: #222;
    &.minify {
      width: 50px;
      padding: 0;
    }
    .logo-brand {
      .logo-line-before, .logo-line-after {
        .logo-line {
          background: #87daff;
        }
      }
      .logo-title {
        color: #87daff;
      }
    }
  }
  // .sidebar-hidden #nav-header {
  //   .logo-brand {
  //     opacity: 0;
  //   }
  // }
</style>

