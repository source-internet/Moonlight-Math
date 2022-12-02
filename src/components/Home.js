
import React from 'react'
//import { useNavigate } from 'react-router-dom'
//import  Moonlight from '../images/moonlight2-trans.png'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'

export const Home = () => {
  //const navigate = useNavigate()
  return (

    <div className='Flex-Container'>

      <Left />
      <Middle/>
      <Right />
    </div>

  )
}
