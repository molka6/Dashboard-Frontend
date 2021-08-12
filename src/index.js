import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard  from './pages/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


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

          <Route exact path="/dasboard">
            <Dashboard />
          </Route>


        </Switch>
      

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
