import React, { Fragment } from "react";
import Meeting from './components/Meeting';
import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';

function App() {
  return (
    <Fragment>
      {<Meeting/>}
    </Fragment>
  )}

export default App;