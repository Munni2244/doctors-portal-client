import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';

const backGround= {
    background: `url(${bg})` ,
    backgroundColor:'rgba(45, 60, 82, 0.9)',
    backgroundBlendMode: 'darken',

}
const AppointmentBanner = () => {
   
    return (
        <div style={{marginTop:'180px'}}>
          
            <Box style={backGround} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} >
         <img width="400px" style={{marginTop:'-125px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={7} sx={{display: 'flex', alignItems: 'center' , textAlign:'left'}}>
        <Box>
        <Typography variant="h6" sx={{ fontWeight: 600,m:1, color:'#46BCC1 ' }} >
                  Appointment
                </Typography>
        <Typography variant="h3" sx={{ m: 1 , color:'white '}} >
                  Make An Appointment Today
                </Typography>
        <Typography variant="h6" sx={{ m: 1 , color:'white '}} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga sunt culpa porro enim natus dolorum voluptate quidem odit voluptatum!
                </Typography>
                <Button style={{marginLeft:'10px' ,backgroundColor:'#46BCC1'}}  variant="contained">See Details</Button>
                </Box>
        </Grid>
        
      </Grid>
  
            </Box>
        </div>
    );
};

export default AppointmentBanner;