import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Banner from '../Banner/Banner';
import BannerAdd from '../BannerOperation/BannerAdd/BannerAdd/BannerAdd';

const Banners = () => {
     const [banners,setBanners] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/banner', {
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
               setBanners(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <div>
               <BannerAdd></BannerAdd>
               <Banner banners={banners}></Banner>
          </div>
     );
};

export default Banners;