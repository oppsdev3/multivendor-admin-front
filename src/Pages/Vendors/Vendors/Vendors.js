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
import  Typography  from '@mui/material/Typography';
import VendorsLink from '../VendorsLink/VendorsLink';
import VendorsRoute from '../VendorsRoute/VendorsRoute';
import logo from '../../../image/logo.png'


const drawerWidth = 220;

const Vendors = (props) => {
    
     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);
   
     const handleDrawerToggle = () => {
       setMobileOpen(!mobileOpen);
     };
   
     const drawer = (
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
          <Toolbar />
   
          <VendorsLink></VendorsLink>
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
          <VendorsRoute></VendorsRoute>
        </Box>
      </Box> 
          </>
     );
};

Vendors.propTypes = {
     window: PropTypes.func,
   };

export default Vendors;