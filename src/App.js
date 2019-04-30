import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/ Register';


function App() {
  return (
    <Router className="app">
 <Route exact path="/" componenet={Login}></Route>
 <Route exact path="/login" componenet={Login}></Route>
 <Route exact path="/user/:uid" componenet={Profile}></Route>
 <Route exact path="/register" componenet={Register}></Route>
 <Route exact path="/" componenet={Login}></Route>
    </Router>
  );
    
}

export default App;
