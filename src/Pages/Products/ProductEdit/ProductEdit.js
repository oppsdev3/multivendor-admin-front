import React from 'react';
import ProductModal from '../ProductModal/ProductModal';
import  Button  from '@mui/material/Button';

const ProductEdit = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     // const handleUpdate = id => {
     // fetch(``, {
     //      method: 'PUT',
     //      headers: {
     //      'content-type': 'application/json',
     //      },
     //      body: JSON.stringify(),
         
     // })
     //      .then(res => res.json())
     //      .then(info => {
     //      console.log(info);
     //      });
     // };
     return (
          <div>
               <Button
                    onClick={handleOpen}
                    variant="contained"
                    sx={{mx:2}}
                    color="success"
                    size='small'
                    >
                    Edit
               </Button>
               <ProductModal open={open} handleClose={handleClose}></ProductModal>
          </div>
     );
};

export default ProductEdit;