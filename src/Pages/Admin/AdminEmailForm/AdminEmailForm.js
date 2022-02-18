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

const AdminEmailForm = ({ open, handleClose }) => {
     const [emailData, setEmailData] = useState('')
     const token = localStorage.getItem('token')
     const handleEmail = (e) =>{
          let email = e.target.value
          setEmailData(email)
     }

     const handleSubmitEmail = (e) =>{
          const email ={
               email : emailData
          }
          console.log(email)
          fetch('https://multivendorapi.herokuapp.com/api/admin/v1/updateadminemail', {
               method: 'PATCH',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(email),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               handleClose()
          })
          
          e.preventDefault()
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
                    <form onSubmit={handleSubmitEmail}>
                         <TextField
                              required
                              sx={{ width: '100%', m: 1 }}
                              id="outlined-size-small"
                              label="email"
                              name="email"
                              defaultValue=""
                              size="small"
                              helperText="email"
                              onBlur={handleEmail}
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
          </>
     );
};

export default AdminEmailForm;