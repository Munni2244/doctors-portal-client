import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from '../../../images/cavity.png';
import img2 from '../../../images/whitening.png';
import img3 from '../../../images/fluoride.png';
import Service from '../Home/Service/Service';
import { Container, Typography } from '@mui/material';
  
const services = [
  {
      name: 'Fluoride Treatment',
      description: 'When foods with carbohydrates like bread, cereal, milk, soda, fruit, cake, or candy stay on your teeth, they cause decay. The bacteria in your mouth turn them into acids.',
      img: img1
  },
  {
      name: 'Cavity Filling',
      description: 'When foods with carbohydrates like bread, cereal, milk, soda, fruit, cake, or candy stay on your teeth, they cause decay. The bacteria in your mouth turn them into acids.',
      img: img2
  },
  {
      name: 'Teeth Whitening',
      description: 'When foods with carbohydrates like bread, cereal, milk, soda, fruit, cake, or candy stay on your teeth, they cause decay. The bacteria in your mouth turn them into acids.',
      img: img3
  }
]

const Services = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ color: '#46BCC1',m: 2}}>
                  Our Services
                </Typography>
            <Typography variant="h3" sx={{ fontWeight: 600,m: 5 }} >
                  Services We Provide
                </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
         services.map(service=> <Service 
         key={services.name}
         service={service}
         ></Service> )
         
       }
      </Grid>
    </Container>
    );
};

export default Services;