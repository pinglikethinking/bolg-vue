import Layout from '@/components/partial/layout'
import Article from './article'
import Talk from './talk'

export default {
  path: '/manage',
  component: Layout,
  children: [{
    name: 'manage.article',
    path: '',
    component: Article
  },
  {
    name: 'manage.talk',
    path: ':id/talk',
    component: Talk
  }]
}
