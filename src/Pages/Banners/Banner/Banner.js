import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import BannerEdit from './../BannerOperation/BannerEdit/BannerEdit/BannerEdit';
import BannerDelete from '../BannerOperation/BannerDelete/BannerDelete';
import BannerDetails from '../BannerDetails/BannerDetails/BannerDetails';

function Row(props) {
     const { banner,index } = props;
     const [open, setOpen] = React.useState(false);
     console.log(banner)
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
                    sx={{  fontWeight:500 }}
                    variant="body2"
                    gutterBottom
                    component="div"
               >
                    {banner.title}
               </Typography></TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ fontWeight:500 }}
                    variant="body2"
                    gutterBottom
                    component="div"
               >
                    bann - {index+1} 
               </Typography></TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ fontWeight:500 }}
                    variant="body2"
                    gutterBottom
                    component="div"
               >
                    {banner.description}
               </Typography>
          </TableCell>
          <TableCell align="center">
               <BannerEdit banner={banner}></BannerEdit>
          </TableCell>
          <TableCell align="center">
               <BannerDelete banner={banner}></BannerDelete>
          </TableCell>
          </TableRow>

          <TableRow>
               <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                         <Box sx={{ margin: 2, display:'flex' }}>
                              <BannerDetails banner={banner}></BannerDetails>
                         </Box>  
                    </Collapse>
               </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }

const Banner = ({banners}) => {
     
     return (
          <>
               <TableContainer sx={{mt:1}} component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   BANNER TITLE
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   BANNER ID
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   BANNER DESCRIPTION
                              </Typography></TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {banners.map((banner, index) => (
                              <Row key={banner._id} index={index} banner={banner} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>  
          </>
     );
};

export default Banner;