// import React, { Fragment } from "react";
// import Events from './components/Events';
// import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
// import { AuthProvider } from './components/auth/Auth';
// import Login from "./components/auth/Login";
// import Welcome from './Welcome';
import Footer from "./components/footer/Footer"

// import React from 'react';
import './App.css';
import Navbar from './components/navbar/navBar';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import About from './components/pages/About';
import EventPage from './components/pages/EventPage';
// import Navbar from './components/layout/Navbar'
// // import Dashboard from './components/dashboard/Dashboard';
// import React, { Component } from 'react';
// import EventDetail from './components/event/EventDetail';
// import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp'
// import CreateEvent from './components/event/CreateEvent'
import React, { useContext } from "react";
// import { Router } from "@reach/router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./providers/UserProvider";

function App() {
    return (
      <div>
        {/* This is disable for now */}
        {/* <AuthProvider>
          <Welcome />
          {/* <Login /> */}
        {/* </AuthProvider>  */} 
        <UserProvider>
          <Application />
        </UserProvider>
          
        <Router>
          <Navbar />
              {/* <Switch> */}
                {/* <Route path='/' exact component={Home} /> */}
            <Route path='/' component={About} />
            <Route path='/EventPage' component={EventPage} />
                {/* <Route path='/about' component={About} /> */}
              {/* </Switch> */}
          </Router>

          <Footer/>
      </div>
  
  );
}
export default App;