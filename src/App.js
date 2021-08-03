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

function App() {
  // return (
  //   <Fragment>
  //     {<Meeting/>}
  //   </Fragment>
  // )}  
  return (
    <>
      <AuthProvider>
        <Welcome />
        <Login />
        {<Meeting/>}
      </AuthProvider>
    </>
    );
    }

export default App;