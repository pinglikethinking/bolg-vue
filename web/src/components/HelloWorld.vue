<template>
  <div class="hello">
    <div class="w-100 h-100">
      <div class="bg">
        <img src="../assets/circle1.png" class="circle circle1">
        <img src="../assets/circle2.png" class="circle circle2">
        <img src="../assets/circle3.png" class="circle circle3">
        <img src="../assets/circle4.png" class="circle circle4">
      </div>
      <div class="cover">
        <div class="w-100 text-center"><Logo></Logo></div>
        <div class="w-100 mt-3 hinge">
          <router-link :to="{name: 'articles.index'}" class="mx-4 gradient-font">访客</router-link>
          <router-link :to="{name: 'articles.index'}" class="mx-4 gradient-font">管理员</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/widgets/logo/logo'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  components: {
    Logo
  },
  methods: {},
  created () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  width: 100%;
  height: 100%;
  position: relative;
}
.bg{
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ecf3f7;
  .circle{
    position: absolute;
    &.circle1 {
      left: 50px;
      top: 50px;
      -webkit-animation: movingCircle 10s ease-in-out infinite alternate;
      -moz-animation: movingCircle 10s ease-in-out infinite alternate;
      animation: movingCircle 10s ease-in-out infinite alternate;
    }
    &.circle2 {
      right: 100px;
      top: 50px;
      -webkit-animation: movingCircle 25s ease-in-out infinite alternate;
      -moz-animation: movingCircle 25s ease-in-out infinite alternate;
      animation: movingCircle 25s ease-in-out infinite alternate;
    }
    &.circle3 {
      right: 150px;
      bottom: 50px;
      -webkit-animation: movingCircle 20s ease-in-out infinite alternate;
      -moz-animation: movingCircle 20s ease-in-out infinite alternate;
      animation: movingCircle 20s ease-in-out infinite alternate;
    }
    &.circle4 {
      left: 100px;
      bottom: 100px;
      -webkit-animation: movingCircle 15s ease-in-out infinite alternate;
      -moz-animation: movingCircle 15s ease-in-out infinite alternate;
      animation: movingCircle 15s ease-in-out infinite alternate;
    }
  }
}
.cover{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2c3e50;
  background-color: transparent;
}
</style>
