import React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import Grid from '@mui/material/Grid';

const CategoryDetails = ({category}) => {
     const [categories,setCategories] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     let id = category._id
     useEffect(()=>{
          setLoading(true)
          fetch(`https://multivendorapex.herokuapp.com/api/admin/adminroute/allcategory/${id}`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data.productcount)
               setCategories(data.category)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <>
               <Grid  container spacing={2}>
                    <CategoryDetail categories={categories}></CategoryDetail> 
               </Grid>  
              
          </>
     );
};

export default CategoryDetails;