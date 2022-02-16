import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';

const ProductDetails = ({product}) => {
     let id = product._id
     console.log(id)
     const [products,setProducts] = useState([])
     const token = localStorage.getItem('token')
     useEffect(()=>{
          fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/allproduct/${id}`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               setProducts(data)
          })
     },[])

     return (
          <>
               <Grid container spacing={2}>
                    {/* {
                         products.map(product => )
                    } */}
               </Grid>   
          </>
     );
};

export default ProductDetails;