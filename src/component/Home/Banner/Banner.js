import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/appointment-bg.png';
import bg from '../../../images/bg.png';


const banner= {
    background: `url(${bg})` ,
    height:'500px'

}
const Banner = () => {
    return (

            
          
          <Container style={banner} sx={{ flexGrow: 1 }}>
 <Grid container spacing={2}>
      <Grid item xs={12} md={5} sx={{display: 'flex', marginTop:'50px', alignItems:'center' , textAlign:'left'}}>
      <Box>
      <Typography variant="h3" >
               Your New Smile Starts Here
              </Typography>
      <Typography variant="h6" sx={{ my:2 }} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga sunt culpa porro enim natus dolorum voluptate quidem odit voluptatum!
               
              </Typography>
              <Button style={{backgroundColor:'#46BCC1'}} variant="contained">See Details</Button>
              </Box>
      </Grid>
      
      <Grid item xs={12} md={7} sx={{display: 'flex',marginTop:'50px', alignItems:'center' , textAlign:'left'}}>
       <img width="100%" height="360px" src={chair} alt="" />
      
    </Grid>
    </Grid>
      

          </Container>

    
    );
};

export default Banner;