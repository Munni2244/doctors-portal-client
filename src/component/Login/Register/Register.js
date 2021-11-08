import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import register from '../../../images/login.png';


const Register = () => {
  const {user,RegisterUser,loading, error}= useAuth();
  const [RegisterData, setRegisterData]=useState({});
const history= useHistory();
    const HandleOnChanges=(e)=>{
        const field= e.target.name;
        const value= e.target.value;
       const newLoginData= {...RegisterData};
       newLoginData[field]=value;
       console.log(newLoginData);
       setRegisterData(newLoginData)
    }
    
        const HandleForm=(e)=>{
          if(RegisterData.password !== RegisterData.password2){
  
            alert("password don't macthed")
            return
          }
          RegisterUser(RegisterData.email, RegisterData.password, RegisterData.name, history)
            e.preventDefault();
        }
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6} sx={{p:5}}>
          <Typography variant="body1" sx={{mt:10}}> 
       Register
            </Typography>
      {!loading && <form onSubmit={HandleForm}>
      <TextField onBlur={HandleOnChanges} name="name" sx={{width:1 }} id="standard-basic" label="Your Name" variant="standard" /> <br />

      <TextField onBlur={HandleOnChanges} type="email" name="email" sx={{width:1 }} id="standard-basic" label="Your Email" variant="standard" /> <br />

      <TextField  onBlur={HandleOnChanges} type="password" name="password" sx={{width:1 }} id="standard-basic" label="Your Password" variant="standard" /> <br />

      <TextField  onBlur={HandleOnChanges} type="password" name="password2" sx={{width:1 }} id="standard-basic" label="Confirm Your Password" variant="standard" /> <br />

      <NavLink to="/login"> <Button sx={{m:2}} variant="text">Are You Registerd? Please login</Button></NavLink>
      <Button type="submit" sx={{width:1 ,m:1}} variant="contained">Register</Button>
      </form>}
      {user?.email && <Alert severity="success">Account Created Successfully!</Alert>
       }
       {error && <Alert severity="error">{error}</Alert>
      }
       {
        loading &&<CircularProgress />
      }

          </Grid>
          <Grid item  xs={12} md={6}>
        <img src={register} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Register;