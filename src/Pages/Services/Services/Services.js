import React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Service from './../Service/Service';

const Services = () => {
     const [loading,setLoading] = useState(false)
     const [services,setServices] = useState([])
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/admin/adminroute/allservice', {
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
               setServices(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <div>
               <Service services={services}></Service>
          </div>
     );
};

export default Services;