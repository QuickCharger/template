import { BrowserRouter, useRoutes } from 'react-router-dom'
import { configure } from 'mobx'

import { Router as routerHome } from '@/pages/Home'

import { ThemeProvider } from 'react-bootstrap'

configure({
  enforceActions: 'never'
})

function Routes () {
  return useRoutes([
    ...routerHome,
    ...[{
      path: '/*',
      element: <>not found</>
    }]])
}

export default function App () {
  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
      >
        <Routes />
      </ThemeProvider>
    </BrowserRouter >
  )
}
