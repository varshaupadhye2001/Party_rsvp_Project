import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar' 
import Home from './components/pages/Home'
import GuestState from './context/guestContext/GuestState'
import AuthState from './context/authContext/authState';
import Register from './components/pages/Register';
import Login from './components/pages/Login'; 
import PrivateRoute from './components/pages/routes/PrivateRoutes';
import setToken from './utils/setToken';

if(localStorage.token){
 setToken(localStorage.token)
}  

function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
          <div >
            <Navbar />
            <Switch>
              <PrivateRoute exact path = '/' component= {Home}/>
              <Route exact path = '/register' component={Register}/>
              <Route exact path = '/login' component={Login}/>
            </Switch>
          </div>
        </Router>
      </GuestState>
    </AuthState>
  ); 
}

export default App;