// import React, { Fragment } from "react";
// import Events from './components/Events';
// import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
import { AuthProvider } from './components/auth/Auth';
import Login from "./components/auth/Login";
import Welcome from './Welcome';
import Footer from "./components/footer/Footer"

// import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Switch, Route, Router} from 'react-router-dom';

import About from './components/pages/aboutPage';
import EventPage from './components/pages/eventPage';
// import Navbar from './components/layout/Navbar'
// // import Dashboard from './components/dashboard/Dashboard';
// import React, { Component } from 'react';
// import EventDetail from './components/event/EventDetail';
// import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp'
// import CreateEvent from './components/event/CreateEvent'
import React, { useContext } from "react";
// import { Router } from "@reach/router";

import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
// import Application from "./components/auth/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./components/auth/profilePage";
import { UserContext } from "./providers/UserProvider";

function App() {
    return (
      <div>
        {/* This is disable for now */}
        {/* <AuthProvider>
          <Welcome />
          <Login />
       </AuthProvider>  */}
        {/* <UserProvider>
          <Application />
        </UserProvider> */}
          
        <BrowserRouter>
        {/* <UserProvider>
          <Application />
        </UserProvider> */}
          <NavBar />
              <Switch>
                {/* <Route path='/' exact component={Home} /> */}
                  <Route path='/' exact component={About} />
                  <Route path='/EventPage' component={EventPage} />
                  {/* <Route path='/Application' component={Application} /> */}
                  <Route path='/SignUp' component={SignIn} />
                  <Route path='/SignIn' component={SignIn} />
              </Switch>
              
        </BrowserRouter>

          {/* <Footer/> */}
      </div>
  
  );
}
export default App;