import React, { useEffect } from 'react';
import Router from './services/routes/Routes';
import axios from 'axios';
import { connect } from 'react-redux';
import { authenticate } from './store/actions/authenticate.action';
import { setMyProfile } from './store/actions/my.profile';
import Auth from './services/auth/Auth';
import config from './config';
import { ErrorModal, SuccessModal } from './components/modals';
//
import Echo from 'laravel-echo';
import client from 'pusher-js';
// import pusher from 'pusher-js';

const App = ({ authenticate, setMyProfile }) => {
  useEffect(() => {
    Auth.setLanguage();
    const token = Auth.getToken();
    axios.defaults.baseURL = config.baseURL;
    if (token) {
      axios.defaults.headers.common['Content-Type'] = "applicaton/json";
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      authenticate(true);
      const first_name = Auth.getFirstName();
      const last_name = Auth.getLastName();
      const is_admin = Auth.checkIsAdmin();
      const shop_name = Auth.getShopName();
      const current_balance = Auth.getCurrentBalance();
      setMyProfile({ first_name, last_name, is_admin, shop_name, current_balance })
      //////////PREJ QETU
      ///// Qetu ja jep options
      const options = {
        broadcaster: 'pusher',
        id: '1111',
        key: 'ABCD',
        secret: "EFGJ",
        cluster: 'mt1',
        forceTLS: false,
        client: client,
        authEndpoint: 'https://kn2jxedj.myhook.io:6001/api/broadcasting/auth',
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
      };

      const echo = new Echo(options);
      console.log('echo', echo)
      //Qetu posht po bahet sbscribe ne channelin benishop, ne console duhet met dal notifications
      echo.channel('benishop').listen('App\Events\NewOrder', (e) => {
          console.log('EchoLaravel', e);
        })

        //////////DERI QETU
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