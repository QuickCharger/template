import { Alert, Snackbar, Stack, Box, Typography, Switch as _switch, } from '@mui/material'
import { useEffect, useState, useRef, forwardRef, useImperativeHandle, Dialog } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { styled } from '@mui/material/styles'

const AntSwitch = styled(_switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

function Switch ({ checked, onMsg = 'on', offMsg = 'off', ...other }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{offMsg}</Typography>
      <AntSwitch checked={checked} inputProps={{ 'aria-label': 'ant design' }} {...other} />
      <Typography>{onMsg}</Typography>
    </Stack>
  )
}

export default Switch