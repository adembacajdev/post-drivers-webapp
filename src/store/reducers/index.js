import { combineReducers } from 'redux';
import isLoggedIn from './authenticate.reducer';

export default combineReducers({
    isLoggedIn
});