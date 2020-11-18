import { Tracker, Posts, PostDetail } from 'pages'

export const routes = [
  {
    path: '/',
    component: Tracker,
    exact: true,
  },
  {
    path: '/posts',
    component: Posts,
    exact: true,
  },
  {
    path: '/post/:id',
    component: PostDetail,
    exact: true,
  },
]
