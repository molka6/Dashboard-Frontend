import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const routes = [
  {
    path: 'app',
    children: [  
    //   { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ]
  }
];

export default routes;
