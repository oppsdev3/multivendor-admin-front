import React,{useState} from 'react';
import {Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contacts = () => {
     const [contactVendor, setContactVendor] = useState({});
     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newContactVendor = { ...contactVendor };
          newContactVendor[field] = value;
          console.log(newContactVendor);
          setContactVendor(newContactVendor);
        };
     const handleSubmit = e => {
          fetch('https://multivendorapi.herokuapp.com/api/contactvendor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(contactVendor),
          })
            .then(res => res.json())
            .then(info => {
              console.log(info.error);
             
            });
          e.preventDefault();
        };
     return (
          <>
               <Container className="login-style">
                    <Grid container spacing={2}>
                         <Grid sx={{ width: '100%', mt: 10 }} item xs={12} md={6}>
                              <form onSubmit={handleSubmit}>
                                   
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Title"
                                        sx={{ width: '75%', m: 1 }}
                                        onBlur={handleOnBlur}
                                        name="title"
                                        helperText="Title"
                                        variant="filled"
                                   />
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Query"
                                        sx={{ width: '75%', m: 1 }}
                                        onBlur={handleOnBlur}
                                        name="query"
                                        helperText="Query"
                                        variant="filled"
                                   />
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Product Id"
                                        sx={{ width: '75%', m: 1 }}
                                        onBlur={handleOnBlur}
                                        name="productId"
                                        helperText="Product ID"
                                        variant="filled"
                                   />
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Vendor Id"
                                        sx={{ width: '75%', m: 1 }}
                                        onBlur={handleOnBlur}
                                        name="vendorId"
                                        helperText="Vendor Id"
                                        variant="filled"
                                   />
                                   <Button
                                        sx={{ width: '50%', m: 2 }}
                                        variant="contained"
                                        type="submit"
                                        size="small"
                                   >
                                        Send
                                   </Button>
                              </form>
                         </Grid>

                    </Grid> 
               </Container>  
          </>
     );
};

export default Contacts;