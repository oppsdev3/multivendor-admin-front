import React from 'react';
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

const ProductModal = ({ open, handleClose }) => {

     const handleBookingSubmit = e => {
          e.preventDefault();
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
                    <form onSubmit={handleBookingSubmit}>
                         <TextField
                         sx={{ width: '100%', m: 1 }}
                         id="outlined-size-small"
                         label="Name"
                         name="name"
                         defaultValue=""
                         size="small"
                         helperText="name"
                         />
                         <TextField
                         sx={{ width: '100%', m: 1 }}
                         id="outlined-size-small"
                         label="Name"
                         name="name"
                         defaultValue=""
                         size="small"
                         helperText="name"
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

export default ProductModal;