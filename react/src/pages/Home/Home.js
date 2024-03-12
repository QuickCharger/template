import { observer } from 'mobx-react-lite'
import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonBase, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Experimental_CssVarsProvider, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, FormLabelRoot, GlobalStyles, Grid, Grow, Hidden, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, Popper, Portal, Radio, RadioGroup, Rating, ScopedCssBaseline, Select, Skeleton, Slide, Slider, SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepContext, StepIcon, StepLabel, Stepper, StepperContext, StyledEngineProvider, SvgIcon, SwipeableDrawer, Switch, THEME_ID, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Zoom, useTheme } from '@mui/material'
import { Diamond, PhoneAndroid, LocalPhone, AttachMoney, } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  let theme = useTheme()
  return (
    <Template
      theme='clipped'
      noToolBar
      header={(
        <Stack sx={{ width: '80%' }} margin='auto auto' direction='row' alignItems='center' justifyContent='space-between'>
          <Logo />
          <Stack direction='row' justifyContent='flex-end' spacing={2}>
            {[
              { content: 'Features', onClick: () => { navigate('/') } },
              { content: 'Plan', onClick: () => { navigate('/') } },
              { content: 'Contact Us', onClick: () => { navigate('/') } },
              // { content: 'LogIn', onClick: () => { navigate('/user') } },
              { content: 'ManageIn', onClick: () => { navigate('/manage') } },
            ].map((item, idx) => (
              <Button key={idx} sx={{ color: 'white', }} onClick={item.onClick}>{item.content}</Button>
            ))}
          </Stack>
        </Stack>
      )}
      main={(
        <Stack direction='column' justifyContent="center" alignItems="center">
          <Box sx={{ width: '100%', height: '750px', pb: '3em', backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-dense-blue-waving-fog_23-2148101969.jpg)', backgroundSize: 'cover' }}>
            <Stack sx={{ height: '100%', }} direction='column' alignItems='center' justifyContent='flex-end' spacing={6} >
              <Typography variant="h2">twothree</Typography>
              <Typography variant="h4"><pre>{`             A POWERFUL TOOLS.\nHIGH SPEED AND EASY TO USE. INSTANT SETUP.`}</pre></Typography>
              <Button variant="contained">BUY it</Button>
              <Typography>We support over Windows, Android, Mac</Typography>
            </Stack>
          </ Box>

          <Stack sx={{ width: '80%', height: '250px', paddingTop: '2em' }} direction="row" justifyContent="space-around" alignItems="center" >
            {[
              { icon: <Diamond fontSize="large" />, h1: 'Why twothree', h2: 'It will secure and encrypt your files.' },
              { icon: <PhoneAndroid fontSize="large" />, h1: 'Supported platforms', h2: 'PC, Mac, Android' },
              { icon: <LocalPhone fontSize="large" />, h1: 'Contact us', h2: 'Please feel free to contact us with any questions or technical issues you may have' },
            ].map((item, idx) =>
              <Stack key={idx} sx={{ width: '360px', height: '100%' }} direction="column" justifyContent="flex-start" alignItems="center" spacing={2} >
                {item.icon}
                <Typography>{item.h1}</Typography>
                <Typography>{item.h2}</Typography>
              </Stack>
            )}
          </Stack>

          <Stack sx={{ width: '80%', height: '300px' }} direction="row" justifyContent="center" alignItems="center" spacing={0} >
            <Stack sx={{ height: '100%', width: '100%' }} direction="column" justifyContent="center" alignItems="flex-start" spacing={2} >
              <Typography variant='p1'>Getting all status at a glance. -- The New twothree User Center</Typography>
              <Typography variant='p2'>The user centre is fully featured. You can manage your plans simultaneously. Meanwhile, it is easy to access helping centre, check servers status and contact a support. All the information you need to know about your plan is pinned on the wall. From your plan status page, you can also recharge your plan, purchase for extra plan.</Typography>
            </Stack>
            <Stack sx={{ height: '100%', width: '100%' }} direction="column" justifyContent="center" alignItems="center" >
              <img height='300px' width='300px' src='https://img.freepik.com/free-vector/hand-drawn-labor-day-background_60438-1793.jpg?w=740' alt='we celebrate labor day' />
            </Stack>
          </Stack>

          <Stack sx={{ mt: '120px', mb: '20px' }} direction="row" justifyContent="center" alignItems="center" spacing={5} >
            {[
              { time: '30', device: 'no limit', money: '5 bucks', GB: '50' },
              { time: '180', device: 'no limit', money: '25 bucks', GB: '50' },
              { time: '360', device: 'no limit', money: '40 bucks', GB: '100' },
            ].map((item, idx) => (
              <Stack key={idx} style={{ backgroundColor: '#F3F6Fa', padding: '20px' }}
                direction="column" justifyContent="center" alignItems="center" spacing={2}
              >
                <Typography variant='h5' sx={{ color: '#5d9cec', }}>ENTERPRISE</Typography>
                <Typography variant='h6'><Stack direction="row" justifyContent="center" alignItems="center" spacing={3}><AttachMoney />{item.money}</Stack></Typography>
                <Typography sx={{ color: '#496174', }}> {item.device} devices</Typography>
                {/* <Typography sx={{ color: '#496174', }}>{item.GB} GB/mo.</Typography> */}
                <Typography sx={{ color: '#496174', }}>{item.time} days</Typography>
              </Stack>
            ))}
            <Stack style={{ padding: '20px' }}
              direction="column" justifyContent="center" alignItems="center" spacing={2}
            >
              <Typography variant='h5' sx={{ color: '#496174', width: '150px', }}>另有更多套餐可供选择，详情请登录</Typography>
            </Stack>
          </Stack>

          <Box sx={{ height: '48px', width: '100%', backgroundColor: theme.palette.primary.main, paddingTop: '12px' }}>
            <Stack sx={{ height: '48px', width: '80%', margin: 'auto auto', backgroundColor: theme.palette.primary.main, }}
              direction='row' alignItems='center' justifyContent='space-between'
            >
              <Logo />
              <Typography sx={{ color: 'white' }}>©twothree</Typography>
              <Box width='100px' />
            </Stack>
          </Box>
        </ Stack >
      )
      }
    />
  )
}

export default observer(Home)
