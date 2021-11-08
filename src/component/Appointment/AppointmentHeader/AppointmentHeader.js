import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
           <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item  xs={12} md={6}>
           <img width="100%" src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default AppointmentHeader;