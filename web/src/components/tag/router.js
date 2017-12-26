import Layout from '@/components/partial/layout'
import index from './index'

export default {
  path: '/tag',
  component: Layout,
  children: [{
    name: 'tag.index',
    path: '',
    component: index
  }]
}
