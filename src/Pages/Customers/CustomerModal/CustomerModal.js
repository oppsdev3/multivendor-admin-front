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

const CustomerModal = ({ open, handleClose }) => {
     const [phone,setPhone] = useState('')
     const [email,setEmail] = useState('')
     const [address,setAddress] = useState('')
     const [image,setImage] = useState('')

     const handleOnChangePhone = (e) => {
          const phone = e.target.value
          setPhone(phone)
        };

     const handleOnChangeEmail = (e) =>{
          const email = e.target.value
          setEmail(email)
        }
     const handleOnChangeAddress = (e) =>{
          const address = e.target.value
          setAddress(address)
        }
     const handleOnChangeImage = (e) =>{
          const img = e.target.value
          setImage(img)
        }

     const handleUpdate = id => {
          const customerData ={
               phoneNo:Number(phone),
               email:String(email),
               address:address,
               profileImg:image
          }
          console.log(customerData)

          fetch(`https://multivendorapi.herokuapp.com/api/user/updateuser`, {
               method: 'PATCH',
               headers: {
               'content-type': 'application/json',
               },
               body: JSON.stringify(customerData),
              
          })
               .then(res => res.json())
               .then(info => {
               console.log(info);
               });
          };

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
                    <form onSubmit={handleUpdate}>
                         <TextField
                         sx={{ width: '100%', m: 1 }}
                         id="outlined-size-small"
                         label="Phone"
                         name="phone"
                         defaultValue=""
                         size="small"
                         helperText="phone"
                         onChange={handleOnChangePhone}
                         />
                         <TextField
                         sx={{ width: '100%', m: 1 }}
                         id="outlined-size-small"
                         label="Email"
                         name="email"
                         defaultValue=""
                         size="small"
                         helperText="Email"
                         onChange={handleOnChangeEmail}
                         />
                         <TextField
                         sx={{ width: '100%', m: 1 }}
                         id="outlined-size-small"
                         label="Address"
                         name="address"
                         defaultValue=""
                         size="small"
                         helperText="Address"
                         onChange={handleOnChangeAddress}
                         />
                         <TextField
                         sx={{ width: '100%', m: 1 }}
                         id="outlined-size-small"
                         label="Image Link"
                         name="image"
                         defaultValue=""
                         size="small"
                         helperText="Image Link"
                         onChange={handleOnChangeImage}
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

export default CustomerModal;