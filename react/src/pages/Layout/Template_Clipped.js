import * as React from 'react'
import { Stack, Box, Drawer, AppBar, Toolbar, useTheme, useScrollTrigger } from '@mui/material'

const drawerWidth = 240

/**
 * 
 * @param noToolBar 顶部保留ToolBar控件
 * @returns 
 */
export default function Template ({ header, sider, main, footer, noToolBar }) {
  let theme = useTheme()
  const trigger = useScrollTrigger({ target: undefined, threshold: 100 })
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={
          noToolBar ? {
            zIndex: (theme) => theme.zIndex.drawer + 1,
            ...(trigger && {
              transition: theme.transitions.create('background-color', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              backgroundColor: theme.palette.primary.main
            }),
            ...(!trigger && {
              transition: theme.transitions.create('background-color', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen * 9,
              }),
              backgroundColor: 'transparent'
            }),
          } : {}
        }
      >
        < Toolbar >
          {header}
        </Toolbar>
      </AppBar>

      {
        sider ? <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {noToolBar ? <></> : <Toolbar />}
          {sider}
        </Drawer> : <></>
      }

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Stack direction='column' alignItems='stretch'>
          {noToolBar ? <></> : <Toolbar />}
          <Box>
            {main}
          </Box>
          <Box textAlign='center'>
            {footer}
          </Box>
        </Stack>
      </Box>
    </Box >
  )
}