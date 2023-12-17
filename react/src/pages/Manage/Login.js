import { Grid, Card, Stack, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import { dLogin } from '@/data'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import message from '@/components/Message'

function Login () {
  let navigate = useNavigate()
  let refUserName = useRef()
  let refPassword = useRef()

  const handleLogin = async () => {
    let ret = await dLogin.login(refUserName.current.value, refPassword.current.value)
    if (ret === 0) {
      await message.success('登录成功', 0.5)
      navigate('/manage', { replace: false })
    } else {
      message.error(ret)
    }
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0, top: 0,
      background: "center/cover url('https://img.freepik.com/free-vector/human-resources-website-page-template-headhunting-managers-cartoon-characters-job-searching-professional-resume-writing-assistance-recruitment-agency-homepage-concept_575670-2159.jpg?w=1920')"
    }}>
      <Card style={{
        width: "440px",
        height: "360px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 50px rgb(0 0 0 / 10%)",
        alignItems: 'center'
      }}>
        <Stack sx={{ width: '80%', margin: '40px auto' }}
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Typography variant="h4" sx={{ m: 'auto auto' }}>管理端登录</Typography>
          <TextField label="username" variant="outlined" inputRef={refUserName} />
          <TextField label="password" type='password' variant="outlined" inputRef={refPassword} />
          <Button variant="contained" onClick={handleLogin}> Submit </Button>
        </Stack>
      </Card>
    </div >
  )
}

export default observer(Login)