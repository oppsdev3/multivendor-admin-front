import React,{useState,useEffect} from 'react';
import Contact from './../Contact/Contact';

const Contacts = () => {
     const [contactVendor, setContactVendor] = useState({});
     // useEffect(()=>{
     //      fetch('https://multivendorapex.herokuapp.com//api/admin/adminroute/allvendorcontact')
     //      .then(res => res.json())
     //      .then(info => {
     //        console.log(info);
     //        setContactVendor()
     //      });
     // },[])

     return (
          <>
              <Contact contact={contactVendor}></Contact>
          </>
     );
};

export default Contacts;