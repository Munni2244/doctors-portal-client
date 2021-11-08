import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/treatment.png';

const Feature = () => {
    return (
<Container sx={{ flexGrow: 1 , mt:16 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6}>
         <img width="90%" height="550px" src={img} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sm={6} sx={{ textAlign:'left'}}>
      <Box sx={{mt:7}}>
      <Typography variant="h3" sx={{ mt: 6,}} >
            Exceptional Dental Care , On Your Treams
        </Typography>
      <Typography variant="h6" sx={{ mt: 2 , color:'gray' }} >
      The aligners gradually cause your teeth to shift their position slightly over a period of two weeks. Every two weeks, you will change your set of aligners and this will cause your teeth to move a little more. Over the weeks and months, your teeth will straighten into their proper positions, as prescribed by your dental practitioner.Over the weeks and months, your teeth will straighten into their proper positions, as prescribed by your dental practitioner </Typography>
      <Button sx={{backgroundColor:'#46BCC1', mt:2}} variant="contained"> Learn More</Button>
      </Box>
        </Grid>
      </Grid>
    </Container>

    );
};

export default Feature;