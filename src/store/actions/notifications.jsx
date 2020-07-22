import { GET_NOTIFICATIONS } from '../actionTypes';

export const storeNotifications = (data) => (dispatch) => {
    dispatch({ type: GET_NOTIFICATIONS, data })
}