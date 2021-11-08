import React from 'react';
import Box from '@mui/material/Box';
import bgImg from '../../../../images/appointment-bg.png';
import { Button, TextField, Typography } from '@mui/material';


const BackGroundImg={
  background:`url${bgImg}`,
  height: '450px',
  backgroundColor:'rgba(45, 60, 82, 0.9)',
  backgroundBlendMode: 'darken'
}
const Contact = () => {
    return (
        <Box  style={BackGroundImg} sx={{mt:17,pt:6}}>
            <Typography variant="h6" sx={{color:'#46BCC1'}}>
         CONTACT US
            </Typography>
            <Typography variant="h4" sx={{mb:3,fontWeight: 'bold', color:'white' }}>
         Alwayse Connect With Us
            </Typography>
              <Box
      component="form"
      sx={{
        '& > :not(style)': {
             m: 1,     
             width: 750,
            maxWidth: '100%',
        backgroundColor:'white'
        },
      }}
    
    >
      <TextField id="outlined-basic" type="email" placeholder="Your Email"  variant="outlined" /> <br />
      <TextField id="outlined-basic" type="email" placeholder="Subject"  variant="outlined" /> <br />
      <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Your Message"
        /> <br />
    </Box>
    <Button sx={{backgroundColor:"#46BCC1"}} variant="contained">Submit</Button>
        </Box>
    );
};

export default Contact;