import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login/Login';
import Vendors from './Pages/Vendors/Vendors/Vendors';

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
          <Route  path='/vendors'>
            <Vendors></Vendors>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
