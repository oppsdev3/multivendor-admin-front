import React from 'react';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Typography from '@mui/material/Typography';
import './VendorManage.css'
import VendorForm from '../VendorForm/VendorForm';

const VendorManage = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <>
               <div className='btn-container'>
                    <button className="addButton" variant="contained" onClick={handleOpen}>
                         <Typography sx={{ mr: 1 }} variant="body1" gutterBottom>
                              Add New Vendor
                         </Typography>
                         <AddCircleOutlineTwoToneIcon></AddCircleOutlineTwoToneIcon>
                    </button> 
               </div> 
               <VendorForm open={open} handleClose={handleClose}></VendorForm>
          </>
     );
};

export default VendorManage;