
import { Box, Typography } from '@mui/material'
import React from 'react'
import '../App.css'

function Middle() {
  return (
    <Box flex={4}>
    <div >

      <p><br></br>
       <Typography variant='h2' color='primary' align='center' sx={{display: {xs:'none', sm:'block'}}}>We dont teach, we inspire</Typography><br></br>

        <Typography variant='h6' align='center'>Your Host Luke Byasse</Typography><br></br>
        <Typography variant='h5' color='secondary' align='center'> Welcome to Moonlight.</Typography><br></br>

        <Typography variant='h6' align='justify'>
        This school was developed to fill in the unacceptable holes in the standard schooling system.
        We offer regular online classes after hours to supplement our students’ learning,
        ensuring a comprehensive learning experience.</Typography><br></br>

        <Typography variant='h5'  color='secondary' align='center'>Why choose Moonlight</Typography><br></br>
        <Typography variant='h6' align='justify'>
        Mathematics is one of the most poorly taught subjects in Australia.
         This is no fault on the schooling system, but rather an inadequacy of resources.
         Unfortunately most people with the proper understanding of maths and appropriate skillset
         required to adequately teach it pursue more financially rewarding career pathways.
         This means that most primary school teachers are inadequately proficient in maths to teach it well.
         Our program was developed to address this deficit. Our curriculum covers all of the core mathematical
         principles in primary school and early highschool. Our curriculum starts from the ground up, to ensure absolutely
         no gaps in our teaching. This ensures our students are equipped with an airtight and concrete mathematical foundation
         should they choose to pursue further studies.The teaching is delivered regularly with 2-3 lessons per week.
         These lessons are delivered by teachers with not only a complete understanding of the content, but also with the
         ability to connect with students and pass on this knowledge effectively. These lessons are delivered live and online
         to classes of students, making our program affordable as well as providing a regularity and continuity to their
         learning from the convenience of their homes. As students are required to attend the lessons in person, this ensures
         full utility of our service - this is different to the self directed approach offered by other online tutoring services
         that offer online tutorials and resources.</Typography><br></br>
         <Typography variant='h5' color='secondary' align='center'>Our Program</Typography><br></br>
         <Typography variant='h6' align='justify'>
         Our program will commence a new academic program every term. A term over the summer will also be available
         depending on availability. Students can choose to sign up for twice weekly or three times a week lessons depending
         on their availability. The total basic curriculum is 100 lessons. An advanced curriculum is available to students
         wanting to further their education towards higher level mathematics. Our lessons are available to all school age
         students however it is primarily aimed at students aged 11 and above. Parents or siblings are encouraged to attend lessons.
         </Typography><br></br>
         <Typography variant='h5' color='secondary' align='center'>Costs</Typography><br></br>
         <Typography variant='h6' align='justify'>
         Lessons are priced at $30 with no lock in contracts, however students are encouraged to complete the program in full.
         </Typography><br></br>
         <Typography variant='h5' color='secondary' align='center'>Our Teachers</Typography><br></br>
         <Typography variant='h6' align='justify'>
         Our teachers are selected from a competitive pool of applicants. Our recruitment process is rigorous and our training ensures that our teachers have a complete understanding of our curriculum and the content. It also ensures our teachers have the communication skills and ability to connect with our students with a goal to inspire learning.
         </Typography>

      </p>

      </div>
      </Box>
  )
}

export default Middle