import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Logo from '../images/logo.svg'



function AppBarBottom() {
  
  return (
    <AppBar position="sticky" color="primary"   sx={{  top: 'auto', bottom: 0 }}>
        <Toolbar >
            <Box  sx={{ display: 'flex', gap: 9}}>
            <Typography sx={{ mt: 2 ,p: 1, fontSize: 12}}>Website Creators</Typography>
            <Link href='https://sourceinternet.com.au/'>
            <img  sx={{ mt: 3}} src={Logo} width={90} height={65} alt='logo' className='image' />
            </Link>
            </Box>
          </Toolbar>
          </AppBar>
  )
}

export default AppBarBottom