import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Vendor from './../Vendor/Vendor';
import  Typography  from '@mui/material/Typography';
import Products from '../../Products/Products/Products';
import Customers from '../../Customers/Customers/Customers';
import Contacts from './../../Contacts/Contacts/Contacts';




const VendorsRoute = () => {
     let { path } = useRouteMatch();
     return (
          <>
             <Typography paragraph>
               <Grid container spacing={2}>
               {/* nested route */}
                    <Grid item xs={12} md={12}>
                         <Switch>
                              <Route exact path="/vendors">
                                   <Vendor></Vendor>
                              </Route>
                              <Route exact path={`${path}/products`}>
                                   <Products></Products>
                              </Route>
                              <Route exact path={`${path}/customer`}>
                                   <Customers></Customers>
                              </Route>
                              <Route exact path={`${path}/contact`}>
                                   <Contacts></Contacts>
                              </Route>
                              
                         </Switch>
                    </Grid>
               </Grid>
          </Typography>
          </>
     );
};

export default VendorsRoute;