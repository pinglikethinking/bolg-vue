import Layout from '@/components/partial/layout'
import index from './index'

export default {
  path: '/message',
  component: Layout,
  children: [{
    name: 'message.index',
    path: '',
    component: index
  }]
}
