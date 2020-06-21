import { combineReducers } from 'redux';
import isLoggedIn from './authenticate.reducer';
import sidebar from './toggle.sidebar';

export default combineReducers({
    isLoggedIn, sidebar
});