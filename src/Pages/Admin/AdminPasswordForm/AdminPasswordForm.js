import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

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

const AdminPasswordForm = ({ open, handleClose }) => {
     const [passwordData, setPassword] = useState('')
     const token = localStorage.getItem('token')
     const handlePassword = (e) =>{
          let password = e.target.value
          setPassword(password)
     }

     const handleSubmitEmail = (e) =>{
          const password ={
               password : passwordData
          }
          console.log(password)
          fetch('https://multivendorapex.herokuapp.com/api/admin/v1/updateadminpassword', {
               method: 'PATCH',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(password),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               handleClose()
          })

          e.preventDefault()
     }

     return (
          <div>
               <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               >
               <Box sx={style}>
                    <Grid>
                    <Box>
                    <form onSubmit={handleSubmitEmail}>
                         <TextField
                              required
                              sx={{ width: '100%', m: 1 }}
                              id="outlined-size-small"
                              label="password"
                              type='password'
                              name="password"
                              defaultValue=""
                              size="small"
                              helperText="password"
                              onBlur={handlePassword}
                              variant="standard"
                         />
                         <div>
                              <Button
                                   sx={{ width: '25%', mt: 2 }}
                                   type="submit"
                                   variant="contained"
                                   size="small"
                              >
                                   Update
                              </Button>
                         </div>
                    </form>
                    </Box>
                    </Grid>
               </Box>
               </Modal>
          </div>
     );
};

export default AdminPasswordForm;
