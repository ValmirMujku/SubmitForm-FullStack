import { TableRow, TableCell, Box, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deletFormAsync, forms, getFormsAsync,modifyFormAsync,SubmitFormType } from '../redux/FormSlicse';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
 

export default function UserRow({id,email,password,gender,age}:SubmitFormType) {

    const[openDiv, setOpenDiv] = useState<boolean>(true);

    const dispatch = useAppDispatch();

    const deleteUser=(id:number | undefined)=>{
      if(id){
        dispatch(deletFormAsync(id));
    
      }
    }

    const[email1,setEmail] = useState<string>();
    const[password1,setPassword] = useState<string>();

    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        const modifiedUser:SubmitFormType={id:id,email:email1,password:password1,age:age, gender:gender};
        dispatch(modifyFormAsync(modifiedUser))
    }

  return (
    <><TableRow
    key={id}
  >
    <TableCell>{email}</TableCell>
    <TableCell>{password}</TableCell>
    <TableCell>{age}</TableCell>
    <TableCell>{gender}</TableCell>
    <TableCell><Button onClick={() => deleteUser(id)} sx={{ color: 'black', backgroundColor: 'red' }}>DELETE</Button></TableCell>
    <TableCell><Button onClick={() => setOpenDiv(!openDiv)} sx={{ color: 'black', backgroundColor: 'green' }}>EDIT</Button></TableCell>
  </TableRow>
    <div hidden={openDiv}>
        <form onSubmit={(e)=>onSubmit(e)}>
       <TableCell><TextField type='email' id="outlined-basic" label="EMAIL" variant="outlined" onChange={(e)=>setEmail(e.target.value)}  /></TableCell>
       <TableCell> <TextField type='password' id="outlined-basic" label="PASSWORD" variant="outlined" onChange={(e)=>setPassword(e.target.value)}  /></TableCell>
       <TableCell><Button type='submit' onClick={() => setOpenDiv(!openDiv)} sx={{ color: 'black', backgroundColor: 'green' }}>SAVE</Button></TableCell>
       </form>
    </div>
  <TableRow>

    </TableRow></>
  )
}
