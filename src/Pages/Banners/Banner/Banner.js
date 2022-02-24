import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BannerEdit from './../BannerOperation/BannerEdit/BannerEdit/BannerEdit';
import BannerDelete from '../BannerOperation/BannerDelete/BannerDelete';


const Banner = ({banners}) => {
     
     return (
          <>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                  Banner Title
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                  Banner Id
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                  Banner Description
                              </Typography>
                         </TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {banners.map((banner,index) => (
                         <TableRow
                         key={banner._id}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell align="center">
                              <Typography
                                   sx={{ fontWeight:700 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {banner.title}
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ fontWeight:700 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   bann - {index+1}
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ fontWeight:700 }}
                                   variant="body1"
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
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
};

export default Banner;