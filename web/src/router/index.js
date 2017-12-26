import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ArticlesRouter from '@/components/articles/router'
import TalksRouter from '@/components/talks/router'
import ManageRouter from '@/components/manage/router'
import MessageRouter from '@/components/message/router'
import TagRouter from '@/components/tag/router'

let scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
    ArticlesRouter,
    TalksRouter,
    ManageRouter,
    MessageRouter,
    TagRouter
  ],
  scrollBehavior: scrollBehavior
})
