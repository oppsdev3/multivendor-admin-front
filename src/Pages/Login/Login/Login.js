import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const Login = () => {
     const [loginData, setLoginData] = useState({});
     const [error, setError] = useState('');
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
          fetch('', {
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
                    const destination = location?.state?.from || '/dashboard';
                    history.replace(destination);
               } else {
                    setError(info.error);
              }
             
            });
          const destination = location?.state?.from || '/vendors';
          history.replace(destination);
          e.preventDefault();
        };
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
                                        helperText="Email ID / Phone Number"
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
                         </Grid>

                    </Grid>
                    {error ? (
                         <Alert severity="error">{error}</Alert>
                    ) : (
                         <Alert severity="success">user logged in successfully</Alert>
                    )}
                   
               </Container>  
          </>
     );
};

export default Login;