<template>
  <div class="logo">
    <div>
      <a href="/" class="logo-brand">
        <span class="logo-line-before animated fadeInLeft">
          <i class="logo-line"></i>
        </span>
        <span class="logo-title">{{msg}}</span>
        <span class="logo-line-after animated fadeInRight">
          <i class="logo-line"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logo',
    data () {
      return {
        msg: 'ipo-blog'
      }
    }
  }
</script>

<style lang="scss">
.logo-brand {
  display: inline-block;
  background-color: transparent;
  text-decoration: none;
  padding: 2px 1px;
  .logo-line-before, .logo-line-after {
    display: block;
    width: 75%;
    margin: 0 auto;
    overflow: hidden;
    .logo-line {
      display: block;
      height: 2px;
      background: #222;
    }
  }
  .logo-title{
    font-size: 22px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    line-height: 36px;
  }
}
</style>

