import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>

          <Route path="/admin">
            <Admin/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
