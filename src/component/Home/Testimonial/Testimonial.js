import { Container, Grid, Paper, Typography,Box } from '@mui/material';
import React from 'react';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'

const Testimonial = () => {
    return (
           
            <Container sx={{ flexGrow: 1, mt:14}}>
              
              <Box sx={{textAlign:'left' , my:8}}>
              <Typography sx={{color:'#46BCC1' ,my:2}}>
                TESTIMONIAL
              </Typography>
              <Typography variant="h4" sx={{}}>
                What's Our Patients Says
              </Typography>
              </Box>
      <Grid container spacing={3}>

        <Grid item xs={12} md={4} sm={6} sx={{textAlign:'left'}}>
         <Paper elevation={3}>
       <Typography variant="h6" sx={{p:5, color:'gray'}}>
       Everyone at the Breast Care Center has always been reassuring and quick to respond whenever I’ve needed some extra help – this means 
       </Typography>
       <Box sx={{display:'flex', p:2}}>
       <img style={{marginLeft:'30px'}} src={person1} alt="" />
       <Box sx={{m:2}} >
       <Typography variant="h6" sx={{color:'#46BCC1'}}>
           Winson Herry
       </Typography >
       <Typography variant="body1"sx={{color:'gray'}}>
           California
       </Typography>
       </Box>
       </Box>
         </Paper>
        </Grid>

        <Grid item xs={12} md={4} sm={6} sx={{textAlign:'left'}}>
         <Paper elevation={3}>
       <Typography variant="h6" sx={{p:5,color:'gray' }}>
       Everyone at the Breast Care Center has always been reassuring and quick to respond whenever I’ve needed some extra help – this means 
       </Typography>
       <Box sx={{display:'flex', p:2}}>
       <img style={{marginLeft:'30px'}} src={person2} alt="" />
       <Box sx={{m:2}} >
       <Typography variant="h6" sx={{color:'#46BCC1'}}>
           Winson Herry
       </Typography >
       <Typography variant="body1"sx={{color:'gray'}}>
           California
       </Typography>
       </Box>
       </Box>
         </Paper>
        </Grid>

        <Grid item xs={12} md={4} sm={6} sx={{textAlign:'left'}}>
         <Paper elevation={3}>
       <Typography variant="h6" sx={{p:5, color:'gray'}}>
       Everyone at the Breast Care Center has always been reassuring and quick to respond whenever I’ve needed some extra help – this means
       </Typography>
       <Box sx={{display:'flex', p:2}}>
       <img style={{marginLeft:'30px'}} src={person3} alt="" />
       <Box sx={{m:2}} >
       <Typography variant="h6" sx={{color:'#46BCC1'}}>
           Winson Herry
       </Typography >
       <Typography variant="body1"sx={{color:'gray'}}>
           California
       </Typography>
       </Box>
       </Box>
         </Paper>
        </Grid>
      </Grid>
    </Container>
           
    
    );
};

export default Testimonial;