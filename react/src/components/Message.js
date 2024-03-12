import { Alert, Snackbar, Stack, Box } from '@mui/material'
import { useEffect, useState, useRef, forwardRef, useImperativeHandle, Dialog } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

class MessageData {
  constructor() {
    this.d = [{ severity: 'success', message: 'message2', createAt: new Date().getTime() - 9999 }]
    makeAutoObservable(this)
    const msgLiveMS = 2000
    setInterval(() => {
      let now = new Date().getTime()
      let _d = this.d.filter(item => ((item.createAt + msgLiveMS) > now) ? true : false)
      if (_d.length !== this.d.length) {
        this.d = _d
      }
    }, 100)
  }

  Push (severity, message) {
    this.d.push({ severity, message, createAt: new Date().getTime() })
  }
}
let messageData = new MessageData()


function MessageView () {
  return (
    <Box position='fixed' sx={{ zIndex: 9999999999, top: '10px', left: '50%', transform: 'translate(-50%, 0)' }} >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {messageData.d.map((item, idx) => (
          <Alert key={idx} severity={item.severity} sx={{ width: '100%', }}>
            {item.message}
          </Alert>
        ))}
      </Stack>
    </Box>
  )
}
let ObsMessageView = observer(MessageView)


function Message () {
  if (document.getElementById('divMessage'))
    return
  let t = document.createElement('div')
  t.id = 'divMessage'
  document.body.appendChild(t)

  const root = ReactDOM.createRoot(document.getElementById('divMessage'))
  root.render(
    <ObsMessageView />
  )
}
new Message()

export default {
  info: (message) => {
    messageData.Push('info', message)
  },
  success: (message) => {
    messageData.Push('success', message)
  },
  warning: (message) => {
    messageData.Push('warning', message)
  },
  error: (message) => {
    messageData.Push('error', message)
  }
}
