import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import { useEffect } from 'react'
import {
  Box, Button, Stack, Typography,
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { dLogin } from '@/data'

function TemplateManage (props) {
  const navigate = useNavigate()
  let { userInfo, children, ...other } = props

  const location = useLocation()
  const curPath = location.pathname

  useEffect(() => {
    if (!dLogin.isLogin()) {
      navigate('/manage/login', { replace: true })
    }
  })

  other.theme = 'responsive'

  if (!other.header) {
    other.header = (<>
      <Logo />
      <Box sx={{ flexGrow: 1, }}>
        <Stack direction='row' justifyContent="flex-end" alignItems="center">
          <Typography variant='b2'>Hi, {dLogin.getName()}</Typography>
          <Button key={1} sx={{ color: 'white', }} onClick={() => { dLogin.logout(); navigate('/manage/login') }}>退出</Button>
        </Stack>
      </Box>
    </>)
  }

  if (!other.sider) {
    other.sider = (
      <Stack sx={{ width: '100%', height: '100%' }}
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <img style={{ height: '64px', objectFit: 'cover' }}
          alt='pic' src='https://img.freepik.com/free-vector/v813-aew-05_53876-166405.jpg?w=740' />
        {[
          { content: '数据概览', jumpTo: '/manage', },
          { content: '用户管理', jumpTo: '/manage/usermanage', },
          { content: '用户服务管理', jumpTo: '/manage/userservicemanage', },
          { content: '服务管理', jumpTo: '/manage/service', },
          { content: '全局配置', jumpTo: '/manage/webconfig', },
        ].map((item, idx) => (
          <Button key={idx} variant={curPath === item.jumpTo ? 'contained' : 'text'} size='large' sx={{ color: 'black', }} onClick={() => { navigate(item.jumpTo) }}>{item.content}</Button>
        ))}
      </Stack>)
  }
  return (
    <Template {...other}>
      {children}
    </Template>
  )
}

export default TemplateManage
