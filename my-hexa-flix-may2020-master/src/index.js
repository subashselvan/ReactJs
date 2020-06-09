// node modules imports   
import React from 'react';  // core react library -- used for working with comp 
import ReactDOM from 'react-dom'; // dom rendering package - browser to display
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';  // custom imports -- App Component 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
