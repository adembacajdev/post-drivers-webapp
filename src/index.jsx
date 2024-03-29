import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from './config';
import axios from 'axios';
import Auth from './services/auth/Auth';

const token = Auth.getToken();

if(token){
  axios.defaults.headers.common['Content-Type'] = "applicaton/json";
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axios.defaults.baseURL = config.baseURL;

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
