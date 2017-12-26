<template>
  <aside id="sidebar" :class="{ minify: options.minify }">
    <div class="content py-5">
      <ul class="sidebar-nav animated fadeInLeft">
        <li v-b-tooltip.hover.top="'文章'" class="mb-3">
          <router-link :to="{name: 'articles.index'}" class="nav-link">
            <span class="nav-icon"><i class="fa fa-fw fa-slideshare" aria-hidden="true"></i></span>
            <span class="title">文章</span>
          </router-link>
        </li>
        <li v-b-tooltip.hover.top="'视频'" class="mb-3">
          <router-link :to="{name: ''}" class="nav-link">
            <span class="nav-icon"><i class="fa fa-fw fa-ravelry" aria-hidden="true"></i></span>
            <span class="title">视频</span>
          </router-link>
        </li>
        <li v-b-tooltip.hover.top="'管理'" class="mb-3">
          <router-link :to="{name: ''}" class="nav-link">
            <span class="nav-icon"><i class="fa fa-fw fa-ravelry" aria-hidden="true"></i></span>
            <span class="title">管理</span>
            <em class="fa fa-angle-right"></em>
          </router-link>
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link :to="{ name: '' }" class="nav-link" :class="{ active: true }">
                写文章
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: '' }" class="nav-link" :class="{ active: false }">
                传视频
              </router-link>
            </li>
          </ul>
        </li>
        <li v-b-tooltip.hover.top="'标签'" class="mb-3">
          <router-link :to="{name: ''}" class="nav-link">
            <span class="nav-icon"><i class="fa fa-fw fa-tag" aria-hidden="true"></i></span>
            <span class="title">标签</span>
          </router-link>
        </li>
        <li v-b-tooltip.hover.top="'关于我'" class="mb-3">
          <router-link :to="{name: ''}" class="nav-link">
            <span class="nav-icon"><i class="fa fa-fw fa-user" aria-hidden="true"></i></span>
            <span class="title">关于我</span>
          </router-link>
        </li>
        <li v-b-tooltip.hover.top="'友情链接'" class="mb-3">
          <router-link :to="{name: ''}" class="nav-link">
            <span class="nav-icon"><i class="fa fa-fw fa-globe" aria-hidden="true"></i></span>
            <span class="title">友情链接</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import store from '@/store'
export default {
  name: 'sidebar',
  data () {
    return {
      options: store.menuOptions
    }
  },
  mounted () {
    // 左侧菜单展开收拢
    $('.sidebar-nav').on('click', '.nav-link', function () {
      if ($('#sidebar').hasClass('minify') === false) {
        $(this).parent().toggleClass('expanded')
      }
    })
  },
  destroyed () {
  }
}
</script>

<style lang="scss">
#sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  left: 0;
  top: 79px;
  background-color: #222;
  &.minify{
    width: 50px;
  }
  a.nav-link {
    color: #999;
    &:hover{
      color: #ccc;
      .title{
        border-bottom: 1px solid #ccc;
      }
    }
    &:before{
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      content: " ";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #2bff33;
    }
    .nav-icon{
      font-size: 12px;
    }
  }
}
.sidebar-hidden #sidebar {
  .sidebar-nav {
    padding-left: 10px;
    .nav-link {
      padding: 0;
      .title{
        display: none;
      }
      .nav-icon{
        font-size: 18px;
      }
    }
  }
}
</style>

