import React, { useEffect } from 'react';
import Router from './services/routes/Routes';
import axios from 'axios';
import { connect } from 'react-redux';
import { authenticate } from './store/actions/authenticate.action';
import { setMyProfile } from './store/actions/my.profile';
import Auth from './services/auth/Auth';
import { ErrorModal, SuccessModal } from './components/modals';

const App = ({ authenticate, setMyProfile }) => {
  useEffect(() => {
    Auth.setLanguage();
    const token = Auth.getToken();
    if (token) {
      authenticate(true);
      const first_name = Auth.getFirstName();
      const last_name = Auth.getLastName();
      const is_admin = Auth.checkIsAdmin();
      const shop_name = Auth.getShopName();
      const current_balance = Auth.getCurrentBalance();
      setMyProfile({ first_name, last_name, is_admin, shop_name, current_balance })
    } else {
      axios.defaults.headers.common = { 'Content-Type': 'applicaton/json' };
      authenticate(false);
    }
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
const mapDispatchToProps = { authenticate, setMyProfile };
export default connect(mapStateToProps, mapDispatchToProps)(App);