//Sheik
import React from 'react';


import './App.css';

import Home from './pages/Home';
import PropList from './pages/PropList';
import SingleProp from './pages/SingleProp';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Navbar from './components/Navbar';

import {Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/proplist/" component={PropList}/>
      <Route exact path="/Login/" component={LoginPage}/>
      <Route exact path="/Register/" component={RegisterPage}/>
      <Route exact path="/proplist/:slug" component={SingleProp}/>
      <Route component={ErrorPage}/>
      </Switch>
    </div>
  ); 
}

export default App;
