import { Box, Typography, TextField, FormControlLabel, Checkbox, FormGroup, Button, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
 import {allstyles} from '../style/MuiStyle'
import Users from './Users';
 import { addFormAsync, SubmitFormType } from '../redux/FormSlicse';
import { useAppDispatch } from '../redux/hooks';

export default function SubmitForm() {
  //External Mui
  const MuiStyle = allstyles();

  const[email,setEmail] = useState<string>();
  const[password,setPassword] = useState<string>();
  const[age,setAge] = useState<string>();
  const[gender, setGender] = useState<string>();

  const newUser:SubmitFormType = {
    // id:0,
    email:'',
    password:'',
    age:'',
    gender:''
  }

  const dispatch = useAppDispatch();

  const onsubmit=(e:any)=>{
    // newUser.id = Date.now();
    newUser.email = email;
    newUser.age = age;
    newUser.password=password;
    newUser.gender = gender;

    dispatch(addFormAsync(newUser));
    
    e.preventDefault();
  }
 
 
  return (
    <>
   <form onSubmit={(e)=>onsubmit(e)} >
    <Box    sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}> 
    <TextField type='email' id="outlined-basic" label="EMAIL" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setEmail(e.target.value)} />
    <TextField type='password' id="outlined-basic" label="PASSWORD" variant="outlined" className={MuiStyle.classes.submitFormElements} onChange={(e)=>setPassword(e.target.value)} />
    <TextField type='number' id="outlined-basic" label="AGE" variant="outlined"  className={MuiStyle.classes.submitFormElements} onChange={(e)=>setAge(e.target.value)} />
    <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onChange={(e)=>setGender(e.target.value)}
  >
    <FormControlLabel value="F" control={<Radio />} label="F" />
    <FormControlLabel value="M" control={<Radio />} label="M" />
    <FormControlLabel value="O" control={<Radio />} label="O" />
  </RadioGroup>
</FormControl>
<Button type='submit'variant="contained">Sign In</Button>
    </Box>
    </form>

    <Users    />
    </>
  )
}
