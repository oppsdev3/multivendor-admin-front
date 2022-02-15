import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


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

const VendorForm = ({ open, handleClose }) => {
     const token = localStorage.getItem('token')
     console.log(token)
     const { register, handleSubmit } = useForm();
     const onSubmit = data => {
          
          console.log(data)
          fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/allvendor`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': token
               },
               body: JSON.stringify(data),
               })
               .then(res => res.json())
               .then(info => {
                    console.log(info);
                    handleClose();
               });
     }

     return (
          <>
          <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
               <Grid>
                    <Box> 
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <Box sx={{textAlign:'center'}}>
                                   <TextField 
                                   sx={{mb:3,width:'75%'}}  
                                   required
                                   id="filled-required"
                                   label="name"
                                   
                                   defaultValue=""
                                   variant="filled"
                                   size='small' {...register("name", { required: true, maxLength: 20 })} />

                                   <TextField 
                                   sx={{mb:3,width:'75%'}}  
                                   required
                                   id="filled-required"
                                   label="img-url"
                                   defaultValue=""
                                  
                                   variant="filled"
                                   size='small'{...register("email", { required: true })} />

                                   
                              </Box>

                              <Box sx={{ textAlign:'center'}}>
                                   <input type="submit" />
                              </Box>
                         </form>
                    </Box>
               </Grid>
          </Box>
          </Modal>   
          </>
     );
};

export default VendorForm;