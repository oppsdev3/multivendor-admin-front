import React from 'react';
import Grid from '@mui/material/Grid';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import VendorManage from '../VendorAdd/VendorManage/VendorManage';
import VendorsPending from '../VendorsPending/VendorsPending';
import Vendor from './../Vendor/Vendor';

const VendorsRoute = () => {
     let { path } = useRouteMatch();
     return (
          <>
             <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Switch>
                  <Route exact path={`${path}`}>
                    <Vendor></Vendor>
                      <Route path={`${path}/pending-vendors`}>
                          <VendorsPending></VendorsPending>
                      </Route>
                  </Route>
                  <Route exact path={`${path}`}>
                    <VendorManage></VendorManage>
                    <Vendor></Vendor>
                      <Route path={`${path}/pending-vendors`}>
                          <VendorsPending></VendorsPending>
                      </Route>
                  </Route>
                  <Route path={`${path}/`}>
                    
                  </Route>
                  <Route path={`${path}/`}>
                    
                  </Route>
                </Switch>
              </Grid>
            </Grid>  
          </>
     );
};

export default VendorsRoute;