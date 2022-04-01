import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CircularProgress, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import './Login.css'


const Login = () => {
     const [loginData, setLoginData] = useState({});
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false)
     const history = useHistory();
     const location = useLocation();

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          console.log(newLoginData);
          setLoginData(newLoginData);
        };

        const handleSubmit = e => {
          setLoading(true)
          fetch('https://multivendorapex.herokuapp.com/api/admin/v1/adminlogin', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(loginData),
          })
            .then(res => res.json())
            .then(info => {
              let value = info.token;
              console.log(info.error);
               if (value) {
                    localStorage.setItem('token', value);
                    const destination = location?.state?.from || '/vendors';
                    history.replace(destination);
                    setLoading(false)
               } else {
                    setError(info);
                    setLoading(false)
              }

            });
          e.preventDefault();
        };

        if(loading){
             return <CircularProgress></CircularProgress>
        }
     return (
          <>
               <Container className="login-style">

                    <Grid container spacing={2}>
                         <Grid sx={{ width: '100%', mt: 10 }} item xs={12} md={6}>
                              <form onSubmit={handleSubmit}>
                                   <Typography
                                        sx={{ textAlign: 'center' }}
                                        color="RGB(155, 35, 53)"
                                        variant="body1"
                                        gutterBottom
                                   >
                                        Please Login
                                   </Typography>
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Email"
                                        sx={{ width: '75%', m: 1 }}
                                        onBlur={handleOnBlur}
                                        name="email"
                                        helperText="Email ID"
                                        variant="filled"
                                   />
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        autoComplete="current-password"
                                        sx={{ width: '75%', m: 1 }}
                                        helperText="Password"
                                        variant="filled"
                                   />
                                   <Button
                                        sx={{ width: '50%', m: 2 }}
                                        variant="contained"
                                        type="submit"
                                        size="small"
                                   >
                                        Login
                                   </Button>
                              </form>
                              {
                                   error &&
                                   <Alert severity="error">Invalid username or password</Alert>
                              }
                         </Grid>



                    </Grid>


               </Container>
          </>
     );
};

export default Login;
