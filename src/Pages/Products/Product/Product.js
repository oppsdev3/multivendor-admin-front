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
import ProductEdit from '../ProductEdit/ProductEdit';
import ProductDelete from '../ProductDelete/ProductDelete';
import ProductDetails from '../ProductDetails/ProductDetails/ProductDetails';
import Typography from '@mui/material/Typography';


function Row(props) {
     const { product } = props;
     const [open, setOpen] = React.useState(false);

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
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {product.title}
               </Typography>
          </TableCell>
          <TableCell align="center">
               <Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {product.price}
               </Typography>
          </TableCell>
          <TableCell align="center">
               <Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {product.sold}
               </Typography>
          </TableCell>
          <TableCell align="center">
               <Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {product.description}
               </Typography>
          </TableCell>
          <TableCell align="center">
               <Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {product.views}
               </Typography>
          </TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 2, display:'flex' }}>
                    <ProductEdit></ProductEdit>
                    <ProductDelete product={product}></ProductDelete>
               </Box>
               <ProductDetails product={product}></ProductDetails>
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }

const Product = ({products}) => {
     console.log(products)
     return (
          <>
               <TableContainer sx={{mt:4,ml:2}} component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   TITLE
                              </Typography>
                         </TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   PRICE
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   CATEGORY
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   DESCRIPTION
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   VIEWS
                              </Typography></TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {products.map((product) => (
                              <Row key={product._id} product={product} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
};

export default Product;