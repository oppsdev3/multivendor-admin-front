import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VendorProducts from '../VendorDetails/VendorProducts/VendorProducts';
import VendorProfile from '../VendorDetails/VendorProfile/VendorProfile';

function createData(name, calories, fat, carbs, protein, price) {
     return {
     name,
     calories,
     fat,
     carbs,
     protein,
     price,
     history: [
          {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
          },
          {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
          },
     ],
     };
     }

function Row(props) {
     const { row } = props;
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
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.calories}</TableCell>
          <TableCell align="center">{row.fat}</TableCell>
          <TableCell align="center">{row.carbs}</TableCell>
          <TableCell align="center">{row.protein}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 1 }}>
                    <VendorProfile></VendorProfile>
                    <VendorProducts></VendorProducts>
               </Box>
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }

Row.propTypes = {
     row: PropTypes.shape({
     calories: PropTypes.number.isRequired,
     carbs: PropTypes.number.isRequired,
     fat: PropTypes.number.isRequired,
     history: PropTypes.arrayOf(
          PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          }),
     ).isRequired,
     name: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     protein: PropTypes.number.isRequired,
     }).isRequired,
     };

const rows = [
     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
     ];

const VendorView = () => {
     return (
          <>
               <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">Dessert (100g serving)</TableCell>
                         <TableCell align="center">Calories</TableCell>
                         <TableCell align="center">Fat&nbsp;(g)</TableCell>
                         <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                         <TableCell align="center">Protein&nbsp;(g)</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {rows.map((row) => (
                         <Row key={row.name} row={row} />
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
};

export default VendorView;