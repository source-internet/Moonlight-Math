import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import  Moonlight from '../images/moonlight2-trans.png'
//import Alex from '../images/alexByasse.jpg'
import Alex1 from '../images/alex-cart.png'
import { Box, Button } from '@mui/material'

function Right() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
    const navigate = useNavigate()
  return (
    <Box flex={1} sx={{ display: { xs: 'none', sm: 'block'}}}>
      <center>



       <img src={Alex1} width={350} height={350} alt='moon' className='image'/>

       <br></br><br></br><br></br>
       <Button variant='contained' size='small' onClick={() => navigate('about')}>Luke About</Button>

      <p>
                Your host can be reached via email at{' '}
                <a href='mailto:thecafelifestyle@gmail.com'>thecafelifestyle@gmail.com</a>
      </p><br></br><br></br>
      <Button variant='contained' size='small' onClick={() => setDarkMode(!darkMode)}>Mode</Button>
      <br></br><br></br>
      <Button variant='contained'  onClick={() => navigate(-1)}>Home</Button>
      </center>
    </Box>
  )
}

export default Right