import React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CategoryDetails = () => {
     const [categories,setCategories] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/products')
          .then(res => res.json())
          .then(data => {
               console.log(data.products)
               setCategories(data.products)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <div>
               
          </div>
     );
};

export default CategoryDetails;