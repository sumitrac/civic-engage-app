import React, { Fragment } from "react";
import Meeting from './components/Meeting';
import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
import { AuthProvider } from './auth/Auth';
import Login from "./auth/Login";
import Welcome from './Welcome';


// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';

function App() {
  // return (
  //   <Fragment>
  //     {<Meeting/>}
  //   </Fragment>
  // )}  
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/events' component={Events} />
          <Route path='/about' component={About} />
          {/* <Route path='/annual' component={AnnualReport} />
          <Route path='/team' component={Teams} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    
      <AuthProvider>
        <Welcome />
        <Login />
        {<Meeting/>}
      </AuthProvider>
    </div>

  );}

export default App;