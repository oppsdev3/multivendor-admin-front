import React,{useEffect} from 'react';
import  Button  from '@mui/material/Button';


const ProductDelete = ({product}) => {
     const token = localStorage.getItem('token')
     let id = product._id
          const handleClick = e =>{
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
                    if(data){
                         alert("Product deleted successfully")
                    }
               })
               // e.preventDefault()
          }

   
     
     return (
          <>
               <Button
                    color="error"
                    variant="contained"
                    size='small'
                    onClick={handleClick}
                    >
                    Delete
               </Button>
          </>
     );
};

export default ProductDelete;