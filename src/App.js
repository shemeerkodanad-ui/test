import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './PrivateRoute'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
//import 'primeicons/primeicons.css'
import Home from './Components/Home'
import LogIn from './Components/Login';
import Dashboard from './Components/Dashboard'

function App() {
const logedIn = localStorage.getItem('logedIn')
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>        
        <Route  path="/login"  component={LogIn} />
        <Route  path="/" exact component={LogIn} />
        <PrivateRoute path='/home'   component={() =>
          <Dashboard>
            <Route   component={Home} />
          </Dashboard>   
          
          } />
        </Switch>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
