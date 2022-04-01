import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';


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


const VendorsPending = ({ open, handleClose,vendor }) => {
    
     let id = vendor._id
     
     console.log(id)
     const token = localStorage.getItem('token')
     const [status,setStatus] = useState('')
     const [role,setRole] = useState('')
     const [loading,setLoading] = useState(false)

     const handleOnChangeStatus = (e) => {
          const status = e.target.value
          setStatus(status)
        };

        const handleOnChangeRole = (e) =>{
          const role = e.target.value
          setRole(role)
        }
        
        const handleSubmit = e => {
          const updatedData ={
               status:String(status),
               role:Number(role),
              
          }
          console.log(updatedData)
          setLoading(true)   
          fetch(`https://multivendorapex.herokuapp.com/api/admin/adminroute/allvendor/${id}`, {
               method: 'PATCH',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(updatedData),

          })
               .then(res => res.json())
               .then(info => {
                    console.log(info)
                    setLoading(false)
            });
          e.preventDefault()
        };

        if(loading){
          <CircularProgress />
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
                    <form onSubmit={handleSubmit}>
                         <TextField
                              required
                              size="small"
                              id="outlined-required"
                              label="Status"
                              sx={{ width: '100%'}}
                              onChange={handleOnChangeStatus}
                              helperText="Status"
                              variant="filled"
                         />
                          <TextField
                              required
                              size="small"
                              id="outlined-required"
                              label="Role"
                              sx={{ width: '100%' }}
                              onChange={handleOnChangeRole}
                              otp="otp"
                              helperText="Role"
                              variant="filled"
                         />
                         <Button
                              sx={{ width: '50%', m: 2 ,}}
                              variant="contained"
                              type="submit"
                              size="small"
                         >
                              Submit
                         </Button>
                    </form>
               </Grid>
          </Box>
                   
          </Modal>   
          </>
     );
};

export default VendorsPending;