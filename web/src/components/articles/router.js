import Layout from '@/components/partial/layout'
import index from './index'
import View from './view'

export default {
  path: '/articles',
  component: Layout,
  children: [{
    name: 'articles.index',
    path: '',
    component: index
  },
  {
    name: 'articles.view',
    path: ':id/view',
    component: View
  }]
}
