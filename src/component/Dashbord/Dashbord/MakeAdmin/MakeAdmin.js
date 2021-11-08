import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail]=useState('');
    const [success, setSuccess]=useState(false);
    const {token}=useAuth();

    const handleFieldBlur=(e)=>{
       setEmail(e.target.value)
    }

    const handleAdmin=(e)=>{
        const user= {email};

        fetch('https://shielded-shore-27798.herokuapp.com/users/admin', {
            method:'PUT',
            headers:{
                'authorization': `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount){
                setSuccess(true)
                
            }
            console.log(data)
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make a  Admin</h1>
            <form onSubmit={handleAdmin}>
            <TextField sx={{width:500}} onBlur={handleFieldBlur} id="standard-basic" label="Email" variant="standard" type="email" /> <br />
            <Button type='submit' variant="contained" sx={{m:2}}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully!</Alert>}

        </div>
    );
};

export default MakeAdmin;