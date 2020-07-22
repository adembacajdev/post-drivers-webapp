import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION, CLEAR_NOTIFICATION, STORAGE_NOTIFICATIONS } from '../actionTypes';

export function allNotifications(state = null, { type, data }) {
    switch (type) {
        case GET_NOTIFICATIONS:
            if (state) {
                let currentState = state;
                currentState.push(data);
                let stringState = JSON.stringify(currentState);
                localStorage.setItem('notifications', stringState);
                return currentState;
            } else {
                let currentState = [];
                currentState.push(data);
                let stringState = JSON.stringify(currentState);
                localStorage.setItem('notifications', stringState);
                return currentState;
            }
        case REMOVE_NOTIFICATION:
            const newState = state.filter(item => item.order_id !== data);
            const stringState = JSON.stringify(newState);
            if (newState.length === 0) {
                localStorage.removeItem('notifications');
                return null
            } else {
                localStorage.setItem('notifications', stringState);
                return newState;
            }
        case CLEAR_NOTIFICATION:
            localStorage.removeItem('notifications');
            return null;
        case STORAGE_NOTIFICATIONS: return data;
        default: return state;
    }
}