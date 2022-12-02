import { Box, Typography } from '@mui/material'
import React from 'react'
import Left from './Left'
import Right from './Right'

function About() {
  return (


    <Box className='Flex-Container'>
    <Left />
    <Box>
    <br></br>
      <Typography variant='h2' color='primary' align='center'>A message from our founder</Typography><br></br>

      <Typography variant='h6' ml={20} mr={20} align='justify'>  I grew up in a financially disadvantaged household and used my education as an escape. My father is a maths teacher and instilled in my siblings and I a strong appreciation for the correct approach to learning - learning for understanding. From this I developed a passion for maths, appreciating it as the science of logic; the only perfect science. I duxed my school and continued on to complete medical school and now work as a doctor. During my studies I wanted to pass on my maths knowledge and experience and did so through private tutoring. I would typically assist with students in high school that were struggling and I found a common factor in almost all of my students - glaring gaps in their earlier mathematics education. Maths unfortunately is a subject which without a strong foundation can seem impossible to understand. My students would reach their highschool without an understanding of the basic principles such as fractions, percentages, length/area/volume, basic operations. Unfortunately the Australian primary school system is without the appropriate resources to ensure an adequate understanding of maths. Highschools will often have mathematics specific teachers however in primary schools these are few and far between.
I developed this program in answer to that. All students graduating in Australia are able to read and write. Mathematical aptitude is much less comparatively in our graduating students. Many students are discouraged in highschool to pursue mathematical studies due to a lack of confidence resulting from their inadequate earlier education. My goals with this program first and foremost is to address the deficit, and ensure all students are afforded a comprehensive education in maths.
Furthermore a strong understanding of maths has real world applications outside of academia. Being able to understand complicated mathematical problems teaches a logic which can be applied to the complicated problems of life.
</Typography><br></br>
</Box>
<Right />
         </Box>


  )
}

export default About