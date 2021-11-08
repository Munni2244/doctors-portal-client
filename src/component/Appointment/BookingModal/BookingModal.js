import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({ OpenBooking, handleClose, booking, date,successBooking}) => {
 const {user}=useAuth();

/////get field info
const InitialValue={patientName:user.displayName, email:user.email, phone:''}
const [bookingInfo, setBookingInfo]=useState(InitialValue);

     const HandleOnBlur=(e)=>{
    const field= e.target.name;
    const value= e.target.value;
    const newInfo={...bookingInfo};
    newInfo[field]=value;
    setBookingInfo(newInfo)
    }

    const HandleBookingSubmit=(e)=>{
      const appointment={
        ...bookingInfo,
        serviceName:booking.name,
        time:booking.time,
        date:date.toLocaleDateString()

      }
     fetch('https://shielded-shore-27798.herokuapp.com/appointments',{
       method: "POST",
       headers: {"content-type" :"application/json"},
       body: JSON.stringify(appointment)
     })
     .then(res =>res.json())
     .then(data=> {
       if(data.acknowledged){
        successBooking(true);
        handleClose()

       }
     })

      // alert("submited successfully");
      handleClose()
        e.preventDefault();
    }

    return (
        <div>
             <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={OpenBooking}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={OpenBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {booking.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {booking.time}
            </Typography>
            <form onSubmit={HandleBookingSubmit}>
            <TextField
                disabled
                 sx={{width:'90%', mt:2}}
                defaultValue={booking.time}
                 variant="standard"
                 color="warning"
                 focused
             />
            <TextField
                 sx={{width:'90%',mt:2}}
                 name="patientName"
                defaultValue={user.displayName}
                onBlur={HandleOnBlur}
                 variant="standard"
                 color="warning"
                 focused
             />
            <TextField
                 sx={{width:'90%',mt:2}}
                 name="email"
                defaultValue={user.email}
                onBlur={HandleOnBlur}
                 variant="standard"
                 color="warning"
                 focused
             />
            <TextField
                 sx={{width:'90%',mt:2}}
                 name="phone"
                 defaultValue="Phone No."
                 onBlur={HandleOnBlur}
                 variant="standard"
                 color="warning"
                 focused
             />
            <TextField
            disabled
                 sx={{width:'90%',mt:2}}
                defaultValue={date.toDateString()}
                 variant="standard"
                 color="warning"
                 focused
             />
             <Button type="submit" sx={{backgroundColor:'#46BCC1', mt:2}} variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
        </div>
    );
};

export default BookingModal;