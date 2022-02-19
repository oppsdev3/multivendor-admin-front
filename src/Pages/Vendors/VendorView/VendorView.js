import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VendorProducts from '../VendorDetails/VendorProducts/VendorProducts';
import VendorProfile from '../VendorDetails/VendorProfile/VendorProfile';
import VendorEdit from '../VendorEdit/VendorEdit';
import VendorDelete from '../VendorDelete/VendorDelete';
import Typography from '@mui/material/Typography';


function Row(props) {
     const { vendor } = props;
     const [open, setOpen] = React.useState(false);
     console.log(vendor)

     return (
     <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
               <IconButton
               aria-label="expand row"
               size="small"
               onClick={() => setOpen(!open)}
               >
               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
          </TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ color: '#059862', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                     {vendor.name}
               </Typography>
         </TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ color: '#059862', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {vendor.email}
               </Typography>
          </TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ color: '#059862', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {vendor.phoneNo}
               </Typography></TableCell>
          
          <TableCell align="center">
          <Typography
                    sx={{ color: '#059862', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {vendor.address}
               </Typography></TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ color: '#059862', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {vendor.status}
               </Typography></TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <VendorEdit vendor={vendor}></VendorEdit>
               <Box sx={{ margin: 4, display:'flex' }}>
                    
                    {/* <VendorDelete vendor={vendor}></VendorDelete> */}
                    <VendorProfile vendor={vendor}></VendorProfile>
                    <VendorProducts vendor={vendor}></VendorProducts> 
               </Box>
               
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }



const VendorView = ({vendors}) => {
     return (
          <>
               <TableContainer sx={{mt:2, ml:2}} component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center"> 
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Vendor Name
                              </Typography>
                              </TableCell>
                         <TableCell align="center"> <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Vendor Email
                              </Typography></TableCell>
                         <TableCell align="center"> <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Vendor Phone
                              </Typography></TableCell>
                        
                         <TableCell align="center"> <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Vendor Address
                              </Typography></TableCell>
                         <TableCell align="center"> <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   Vendor Status
                              </Typography></TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {vendors.map((vendor) => (
                         <Row key={vendor._id} vendor={vendor} />
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
};

export default VendorView;