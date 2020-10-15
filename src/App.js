import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import Order from './components/OrderPage/Order/Order';
import { useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App ">
        <Router>
          <Switch>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order" >
              <Order />
            </PrivateRoute>

            <Route path="/addService">
              <AddService />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </div>
    </UserContext.Provider>

  );
}

export default App;
