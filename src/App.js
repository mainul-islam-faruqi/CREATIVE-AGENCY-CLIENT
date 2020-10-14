import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import AddService from './components/AddService/AddService';

function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>

          <Route path="/addService">
            <AddService/>
          </Route>

          <Route path="/admin">
            <Admin/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
