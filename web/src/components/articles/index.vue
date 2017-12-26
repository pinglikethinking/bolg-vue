<template>
  <div>
    <div class="text-center">
      <router-link :to="{name: ''}" class="mybtn" :class="{hover: hoverCSS}" target="_blank" @mouseover.native="isHoverring($event)" @mouseleave.native="endHover()">
        <span>了解详情</span>
        <div v-show="isHover" class="ripple" style="width: 196px; height: 196px;"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isHover: false,
        hoverCSS: false
      }
    },
    methods: {
      isHoverring (e) {
        this.isHover = true
        let _target = e.target
        let _left = e.offsetX - 98
        let _top = e.offsetY - 98
        $(_target).find('.ripple').css({
          left: _left + 'px',
          top: _top + 'px'
        })
        // this.hoverCSS = true
      },
      endHover () {
        this.hoverCSS = false
        this.isHover = false
      }
    },
    created () {
      console.log(slick)
    }
  }
</script>

<style lang="scss">
.mybtn {
  display: inline-block;
  width: 100px;
  height: 36px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #3388fb;
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  text-align: center;
  line-height: 36px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    color: #fff;
    text-decoration: none;
  }
  &.hover {
    background: #4d97ff !important;
  }
  span {
    position: relative;
  }
  .ripple {
    position: absolute;
    z-index: 0;
    color: #fff;
    background: #4d97ff !important;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: ripple 1s ease-out;
    -moz-animation: ripple 1s ease-out;
    animation: ripple 1s ease-out;
  }
}
</style>
