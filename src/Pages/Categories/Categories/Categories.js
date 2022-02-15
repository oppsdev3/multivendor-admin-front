import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Category from './../Category/Category';

const Categories = () => {
     const [categories,setCategories] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com//api/admin/adminroute/allcategory')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setCategories(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <>
              <Category categories={categories}></Category> 
          </>
     );
};

export default Categories;