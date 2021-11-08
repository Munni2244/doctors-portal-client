import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
  const [loginData, setLoginData]=useState({});
  const {user, loading, error,login,signInWithGoogle}=useAuth();
const OnChanges=(e)=>{
    const field= e.target.name;
    const value= e.target.value;
   const newLoginData= {...loginData};
   newLoginData[field]=value;
   setLoginData(newLoginData)
}

const location=useLocation();
const history= useHistory();

    const HandleForm=(e)=>{
        login(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    //sign with google
    const SignInGoogle=()=>[
      signInWithGoogle(location,history)
    ]
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6} sx={{p:5}}>
          <Typography variant="body1" sx={{mt:10}}> 
       Login
            </Typography>
     { !loading && <form onSubmit={HandleForm}>
      <TextField onBlur={OnChanges} type="email"  name="email" sx={{width:1 }} id="standard-basic" label="Your Email" variant="standard" /> <br />

      <TextField  onBlur={OnChanges} type="password"  name="password" sx={{width:1 }} id="standard-basic" label="Your Password" variant="standard" /> <br />
      
      <NavLink to="/register"> <Button sx={{m:2}} variant="text">Are You New User? Please Register</Button></NavLink>

      <Button type="submit" sx={{width:1 ,m:1}} variant="contained">Submit</Button>
      </form>}
      -------------------------------------------  <br/>
      <Button onClick={SignInGoogle} sx={{ m:1}} variant="contained">Sign With Google</Button>

      {
        loading &&<CircularProgress />
      }
      {user?.email && <Alert severity="success">Login Successfully!</Alert>
       }
       {error && <Alert severity="error">{error}</Alert>
      }
          </Grid>
          <Grid item  xs={12} md={6}>
        <img src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;