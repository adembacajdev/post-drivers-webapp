import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION } from '../actionTypes';

export const storeNotifications = (data) => (dispatch) => {
    dispatch({ type: GET_NOTIFICATIONS, data })
}

export const removeNotification = (data) => (dispatch) => {
    dispatch({ type: REMOVE_NOTIFICATION, data })
}