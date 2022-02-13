import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import { Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';


function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
    </>
  );
}

export default App;
