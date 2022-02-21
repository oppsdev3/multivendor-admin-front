import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Category from './../Category/Category';
import CategoryAdd from '../CategoryAdd/CategoryAdd/CategoryAdd';

const Categories = () => {
     const [categories,setCategories] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/admin/adminroute/allcategory', {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
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
               <CategoryAdd></CategoryAdd>
               <Category categories={categories}></Category> 
          </>
     );
};

export default Categories;