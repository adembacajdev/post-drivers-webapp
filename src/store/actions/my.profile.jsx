import { MY_PROFILE } from '../actionTypes';

export const setMyProfile = (data) => (dispatch) => {
    dispatch({ type: MY_PROFILE, data })
}