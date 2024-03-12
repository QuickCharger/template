import AdbIcon from '@mui/icons-material/Adb'
import { Box, Typography, Stack } from '@mui/material'

export default function Logo () {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}>
        <AdbIcon color='#f8f8f8' />
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#f8f8f8',
            textDecoration: 'none',
          }}
        >
          twothree
        </Typography>
      </Stack>
    </Box>
  )
}