import React from 'react';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Navbar />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
