import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Vendors from './Pages/Vendors/Vendors/Vendors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Vendors></Vendors>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
