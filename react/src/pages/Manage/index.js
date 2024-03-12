import { lazy } from 'react'
import Loadable from '@/components/Loadable'

const Login = Loadable(lazy(() => import('@/pages/Manage/Login')))
const Home = Loadable(lazy(() => import('@/pages/Manage/Home')))

const Router = [
  {
    path: 'manage',
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  }
]

export { Router }

export { default as Home } from './Home'
export { default as Login } from './Login'
