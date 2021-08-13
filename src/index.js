import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Register from './pages/Register' ;
import Dashboard  from './pages/Dashboard';
import  Profile from './pages/Profile' ;
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateProfile  from './component/UpdateProfile' ;

ReactDOM.render(
  <React.StrictMode>
   <Router>
    
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route  path="/dashboard">
            <Dashboard />
          </Route>

          <Route  path="/profile">
            <Profile />
          </Route>


          <Route  path="/updateProfile">
            <UpdateProfile />
          </Route>


          
       



         
         
        </Switch>
      

    </Router>

    

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
