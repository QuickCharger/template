import { BrowserRouter, useRoutes } from 'react-router-dom'
import { configure } from 'mobx'

import { Router as routerHome } from '@/pages/Home'
import { Router as HomeManage } from '@/pages/Manage'

configure({
  enforceActions: 'never'
})

function Routes () {
  return useRoutes([
    ...routerHome,
    ...HomeManage,
    ...[{
      path: '/*',
      element: <>not found</>
    }]])
}

export default function App () {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter >
  )
}
