import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './store/reducers/rootReducer'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig'

// const store = createStore(rootReducer, 
//   compose( 
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(fbConfig),
//     reduxFirestore(fbConfig)
//   )
// );

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
