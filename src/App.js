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
import OrderList from './components/OrderPage/OrderList/OrderList';

import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import Review from './components/OrderPage/AddReview/AddReview';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(()=> {
    const userData = () => {
      const token = sessionStorage.getItem('token');
      if(token){
        const decodedToken = jwt_decode(token);
        const {email, name, picture} = decodedToken;
        const loggedInData = {email, name, picture};
        setLoggedInUser(loggedInData);
      }
  }
  userData();


  },[])


  useEffect(()=> {
    loggedInUser.email && fetch('http://localhost:5000/getAdmin?email='+loggedInUser.email,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data[0]);
      const adminData = data[0]
      console.log(adminData)
      setLoggedInUser({...loggedInUser , adminEmail: adminData?.email})
    })
  }, [loggedInUser.email])
 
console.log(loggedInUser)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App ">
        <Router>
          <Switch>
               
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order" >
              {!loggedInUser.adminEmail && <Order />}
            </PrivateRoute>

            <PrivateRoute path="/orderList">
             {!loggedInUser.adminEmail && <OrderList/>}
            </PrivateRoute>

            <PrivateRoute  path="/review">
              { !loggedInUser.adminEmail && <Review/>}
            </PrivateRoute>

            <PrivateRoute path="/admin">
             { loggedInUser.adminEmail && <Admin />}
            </PrivateRoute>

            <PrivateRoute path="/addService">
             { loggedInUser.adminEmail && <AddService />}
            </PrivateRoute>

            <PrivateRoute path="/makeAdmin">
              { loggedInUser.adminEmail && <MakeAdmin/>}
            </PrivateRoute>


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
