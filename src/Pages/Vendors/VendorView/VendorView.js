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
          <TableCell align="center">{vendor.name}</TableCell>
          <TableCell align="center">{vendor.email}</TableCell>
          <TableCell align="center">{vendor.phone}</TableCell>
          <TableCell align="center">{vendor.role}</TableCell>
          <TableCell align="center">{vendor.address}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 4 }}>
                    <VendorProfile></VendorProfile>
                    {/* <VendorEdit vendor={vendor}></VendorEdit>
                    <VendorDelete vendor={vendor}></VendorDelete> */}
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
               <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">Name</TableCell>
                         <TableCell align="center">Email</TableCell>
                         <TableCell align="center">Phone</TableCell>
                         <TableCell align="center">Role</TableCell>
                         <TableCell align="center">Address</TableCell>
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