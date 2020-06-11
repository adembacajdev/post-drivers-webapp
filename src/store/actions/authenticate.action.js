import { IS_LOGGED_IN } from '../actionTypes';

export const authenticate = (data) => (dispatch) => {
    dispatch({ type: IS_LOGGED_IN, data })
}