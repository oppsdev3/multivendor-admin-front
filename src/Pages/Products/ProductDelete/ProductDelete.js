import React,{useEffect} from 'react';
import  Button  from '@mui/material/Button';


const ProductDelete = ({product}) => {
     const token = localStorage.getItem('token')
     let id = product._id
     useEffect(()=>{
          fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/allproduct/${id}`, {
               method: 'DELETE',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
          })
     },[])
   
     
     return (
          <>
               <Button
                    color="error"
                    variant="contained"
                    size='small'
                    >
                    Delete
               </Button>
          </>
     );
};

export default ProductDelete;