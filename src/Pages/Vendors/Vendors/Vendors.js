import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import { Switch,Link, Route, useRouteMatch } from 'react-router-dom';
import VendorManage from '../VendorAdd/VendorManage/VendorManage';
import VendorsPending from '../VendorsPending/VendorsPending';
import Vendor from './../Vendor/Vendor';
import Profile from '../../Profile/Profile/Profile';
import List from '@mui/material/List';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MessageIcon from '@mui/icons-material/Message';
import Messages from '../../Messages/Messages/Messages';
import  Typography  from '@mui/material/Typography';








const drawerWidth = 200;

const Vendors = (props) => {
     let { path, url } = useRouteMatch();
     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);
   
     const handleDrawerToggle = () => {
       setMobileOpen(!mobileOpen);
     };
   
     const drawer = (
          <div>
         
          <Toolbar />
   
          <List>
               <Link exact to="/vendors" style={{ textDecoration: 'none' }}>
               <Button color="inherit" sx={{ mb: 2, ml: 1 }}>
                    <VerifiedUserIcon sx={{mr:1}}></VerifiedUserIcon>
                    Vendors
               </Button>
               </Link>
               <Link exact to={`${url}/messages`} style={{ textDecoration: 'none' }}>
               <Button color="inherit" sx={{ mb: 2 }}>
                    <MessageIcon sx={{mr:1}}></MessageIcon>
                    Messages
               </Button>
               </Link>
               <Link exact to={`${url}/profile`} style={{ textDecoration: 'none' }}>
               <Button color="inherit" sx={{ mb: 2 }}>
               <AccountCircleIcon sx={{mr:1}}></AccountCircleIcon>
                    Profile
               </Button>
               </Link>
         </List>
       </div>
     );
   
     const container =
       window !== undefined ? () => window().document.body : undefined;
   
     function Item(props) {
          const { sx, ...other } = props;
          return (
          <Box
               sx={{
               bgcolor: 'primary.main',
               color: 'white',
               borderRadius: 1,
               textAlign: 'center',
               fontSize: '1rem',
               fontWeight: '700',
               ...sx,
               }}
               {...other}
          />
          );
          }
   
     Item.propTypes = {
          sx: PropTypes.oneOfType([
          PropTypes.arrayOf(
               PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
          ),
          PropTypes.func,
          PropTypes.object,
          ]),
          };
     
     return (
          <>
                <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              m: 1,
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Item>
                    <Typography variant="h5" noWrap component="div">
                    Welcome 
                    </Typography>
              </Item>
              <Item>
                <Button sx={{ ml: 1, color: 'white' }}>
                  
                </Button>
              </Item>
              <Item>
                
              </Item>
            </Toolbar>
          </Box>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
               <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
               keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
               display: { xs: 'block', sm: 'none' },
               '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
               },
               }}
               >
               {drawer}
               </Drawer>
               <Drawer
               variant="permanent"
               sx={{
               display: { xs: 'none', sm: 'block' },
               '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
               },
               }}
               open
               >
               {drawer}
               </Drawer>
          </Box>
          <Box
               component="main"
               sx={{
               flexGrow: 1,
               p: 3,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               }}
          >
          <Toolbar />
          <Typography paragraph>
               <Grid container spacing={2}>
               {/* nested route */}
                    <Grid item xs={12} md={12}>
                         <Switch>
                              <Route exact path="/vendors">
                                   <Vendor></Vendor>
                              </Route>
                              <Route exact path={`${path}/messages`}>
                                   <Messages></Messages>
                              </Route>
                              <Route exact path={`${path}/profile`}>
                                   <Profile></Profile>
                              </Route>
                              
                         </Switch>
                    </Grid>
               </Grid>
          </Typography>
        </Box>
      </Box> 
          </>
     );
};

Vendors.propTypes = {
     window: PropTypes.func,
   };

export default Vendors;