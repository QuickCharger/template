import { observer } from 'mobx-react-lite'
import { useEffect, useState, useRef, forwardRef, useImperativeHandle, Fragment } from 'react'
import { Alert, Grid, Card, Stack, Snackbar, useTheme, Button, TextField, TextareaAutosize } from '@mui/material'
import Template from './_template'
import message from '@/components/Message'

function Home () {
  let c = 0
  return (
    <Template
      main={
        <div width='100%' height='100%'>
          <Button onClick={() => {
            if (c % 4 === 0)
              message.info('this is a message from home')
            else if (c % 4 === 1)
              message.success('this is a message from home')
            else if (c % 4 === 2)
              message.warning('this is a message from home')
            else if (c % 4 === 3)
              message.error('this is a message from home')
            c++
          }}
          >show</Button>
          统计数据
        </ div>
      }
    >
    </Template >
  )
}

export default observer(Home)
