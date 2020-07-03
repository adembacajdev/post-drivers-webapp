import React, { useEffect } from 'react';
import Router from './services/routes/Routes';
import axios from 'axios';
import { connect } from 'react-redux';
import { authenticate } from './store/actions/authenticate.action';
import Auth from './services/auth/Auth';
import config from './config';
import { ErrorModal, SuccessModal } from './components/modals';

const App = ({ authenticate }) => {
  useEffect(() => {
    Auth.setLanguage();
    const token = Auth.getToken();
    axios.defaults.baseURL = config.baseURL;
    if (token) {
      axios.defaults.headers.common['Content-Type'] = "applicaton/json";
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      authenticate(true);
    } else {
      axios.defaults.headers.common = { 'Content-Type': 'applicaton/json' };
      authenticate(false);
    }
    const language = localStorage.getItem('language');
  }, [])

  
  return (
    <>
      <ErrorModal />
      <SuccessModal />
      <Router />
    </>
  )
}

const mapStateToProps = null;
const mapDispatchToProps = { authenticate };
export default connect(mapStateToProps, mapDispatchToProps)(App);