import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import OtpVerification from './Pages/Login/OtpVerification/OtpVerification';
import Register from './Pages/Login/Register/Register';
import Vendors from './Pages/Vendors/Vendors/Vendors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Register></Register>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/otp'>
            <OtpVerification></OtpVerification>
          </Route>
          <Route path='/vendors'>
            <Vendors></Vendors>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
