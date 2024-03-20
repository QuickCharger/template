import { lazy } from 'react'
import Loadable from '@/components/Loadable'
let Home = Loadable(lazy(() => import('@/pages/Home/Home')))
let Router = [{
  path: '/',
  element: <Home />
}]
export { Router }

export { default as Home } from './Home'
