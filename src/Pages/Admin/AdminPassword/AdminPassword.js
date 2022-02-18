import React from 'react';
import { Button } from '@mui/material';
import AdminPasswordForm from '../AdminPasswordForm/AdminPasswordForm';
import  Box  from '@mui/material/Box';

const AdminPassword = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <Box sx={{ml:2}}>
               <Button 
                    onClick={handleOpen}  
                    variant="contained"
                    size='small'
               >
                    Change Password
               </Button>
               <AdminPasswordForm open={open} handleClose={handleClose}></AdminPasswordForm>  
          </Box>
     );
};

export default AdminPassword;