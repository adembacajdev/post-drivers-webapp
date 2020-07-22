import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION, STORAGE_NOTIFICATIONS } from '../actionTypes';

export const storeNotifications = (data) => (dispatch) => {
    dispatch({ type: GET_NOTIFICATIONS, data })
}

export const removeNotification = (data) => (dispatch) => {
    dispatch({ type: REMOVE_NOTIFICATION, data })
}

export const setStorageNotificaions = (data) => (dispatch) => {
    dispatch({ type: STORAGE_NOTIFICATIONS, data })
}