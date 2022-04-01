import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Vendors from './Pages/Vendors/Vendors/Vendors';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Otp from './Pages/Login/OtpVerification/OtpVerification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='/vendors'>
            <Vendors></Vendors>
          </Route>
          // <Route path='/register'>
          //   <Register></Register>
          // </Route>
          // <Route path='/otp'>
          //   <Otp></Otp>
          // </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
