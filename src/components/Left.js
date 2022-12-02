
import { Box } from '@mui/material'
import React from 'react'
import  Moonlight from '../images/moonlight-trans.png'


function Left() {
  return (
    <Box flex={1} sx={{ display: { xs: 'none', sm: 'block'}}}>

      <img src={Moonlight} width={350} height={350} alt='moon' className='image'/>

    </Box>
  )
}

export default Left