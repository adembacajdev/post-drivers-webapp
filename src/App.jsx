import React, { useEffect } from 'react';
import Router from './services/routes/Routes';
import { connect } from 'react-redux';
import { authenticate } from './store/actions/authenticate.action';
import { setMyProfile } from './store/actions/my.profile';
import Auth from './services/auth/Auth';
import { ErrorModal, SuccessModal } from './components/modals';
import { storeNotifications } from './store/actions/notifications';
import Echo from 'laravel-echo'
window.io = require('socket.io-client');

const echo = new Echo({
  broadcaster: 'socket.io',
  host: 'https://strike.strikecourier.com:6001',
  encrypted: true
});

const App = ({ authenticate, setMyProfile, isLoggedIn, storeNotifications }) => {
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
      authenticate(false);
    }
  }, [])

  useEffect(() => {
    let host = window.location.host;
    let parts = host.split(".");
    if (isLoggedIn) {
      echo.channel(`${parts[0]}`).listen('.NewOrder', (res) => {
        storeNotifications(res);
        console.log('res', res)
      });
      console.log('socket', echo)
    } else {
      echo.leave('strike');
      echo.leaveChannel('strike');
    }
  }, [isLoggedIn])

  return (
    <>
      <ErrorModal />
      <SuccessModal />
      <Router />
    </>
  )
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
const mapDispatchToProps = { authenticate, setMyProfile, storeNotifications };
export default connect(mapStateToProps, mapDispatchToProps)(App);