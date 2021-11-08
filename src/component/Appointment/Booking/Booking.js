import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date, successBooking}) => {
    const{name, time,space}=booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
    <>
    
    <Grid item xs={12} md={4} sm={6}>
                    <Paper sx={{py:5}}  elevation={3} >
                    <Typography sx={{color:'#46BCC1'}} variant="h6" gutterBottom component="div">
                     {name}
                   </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                     {time}
                   </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                     {space}  SPACE AVAILABLE
                   </Typography>
                   <Button onClick={handleOpen} style={{backgroundColor:'#46BCC1'}} variant="contained">BOOK APPOINTMENT</Button>
                    </Paper>

            </Grid>
            <BookingModal 
            date={date}
             OpenBooking={open}
             handleClose={handleClose}
             booking={booking}
             successBooking={successBooking}
            >
    
            </BookingModal>
    </>
    
    );
};

export default Booking;