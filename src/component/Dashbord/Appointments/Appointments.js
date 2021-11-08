import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  Box  from '@mui/material/Box';
import { Typography } from '@mui/material';

const Appointments = ({date}) => {
    const {user,token}=useAuth()
    const [appoinments, setAppointments]=useState([]);

    useEffect(()=>{
        fetch(`https://shielded-shore-27798.herokuapp.com/appointments?email=${user.email}&date=${date}`,{
          headers:{
            'authorization': `Bearer ${token}`
        },
        })
        .then(res=> res.json())
        .then(data=>setAppointments(data))
    },[date, user.email])
    return (
       <Box>
           <Typography>
               All Appointmets {appoinments.length}
           </Typography>
            <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Date</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       </Box>
    );
};

export default Appointments;