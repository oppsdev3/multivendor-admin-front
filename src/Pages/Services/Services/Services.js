import React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Services = () => {
     const [loading,setLoading] = useState(false)
     const [services,setServices] = useState([])
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/admin/adminroute/allservice')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setServices(data)
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

export default Services;