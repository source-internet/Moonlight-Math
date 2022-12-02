
//import  Moonlight from '../images/moonlight-trans.png'
import { AppBar, Avatar, styled, Toolbar, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from '../images/moonlight2-trans.png'
import Alex from '../images/alexByasse.jpg'
import React from 'react'


const StyledToolBar = styled(Toolbar) ({
  display:'flex',
  justifyContent:'space-between'
})

function NavBar() {
    return (

    <AppBar position='sticky'>

     <StyledToolBar>
      <Avatar  alt='moon' src={Logo} sx={{  ml: '15%', width: 80, height: 80, display: {xs:'none', sm:'block'}}} />
     <Typography variant='h4' sx={{display: {xs:'none', sm:'block'}}}>Moonlight School of Excellence</Typography>
     <Avatar alt='moon' src={Alex} sx={{ mr: '15%', width: 60, height: 60, display: {xs:'none', sm:'block'} }} />
     <DarkModeIcon sx={{display: {xs:'block', sm:'none'}}}/>
    </StyledToolBar>
    </AppBar>
  )
}

export default NavBar

// <Button  variant='contained' bgcolor='white' onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</Button>