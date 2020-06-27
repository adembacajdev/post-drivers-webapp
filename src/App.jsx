import React, { useEffect } from 'react';
import Router from './services/routes/Routes';
import axios from 'axios';
import { connect } from 'react-redux';
import { authenticate } from './store/actions/authenticate.action';

const App = ({ authenticate }) => {
  useEffect(() => {
    axios.defaults.baseURL = 'https://dxwxjirx.myhook.io/api';
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      axios.defaults.headers.common['Content-Type'] = "applicaton/json"
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      authenticate(true);
    } else {
      axios.defaults.headers.common = { 'Content-Type': 'applicaton/json' };
      authenticate(false);
    }
  }, [])
  return (
    <>
      <Router />
    </>
  )
}

const mapStateToProps = null;
const mapDispatchToProps = { authenticate };
export default connect(mapStateToProps, mapDispatchToProps)(App);