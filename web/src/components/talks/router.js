import Layout from '@/components/partial/layout'
import index from './index'
import View from './view'

export default {
  path: '/talks',
  component: Layout,
  children: [{
    name: 'talks.index',
    path: '',
    component: index
  },
  {
    name: 'talks.view',
    path: ':id/view',
    component: View
  }]
}
