import { Button } from '@mui/material';
import React from 'react';
import AdminEmailForm from '../AdminEmailForm/AdminEmailForm';

const AdminEmail = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
   
     return (
          <div>
             <Button 
             onClick={handleOpen}  
             variant="contained"
             size='small'
             >
               Change Email
             </Button>  
             <AdminEmailForm open={open} handleClose={handleClose}></AdminEmailForm>
          </div>
     );
};

export default AdminEmail;