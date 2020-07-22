import { GET_NOTIFICATIONS, REMOVE_NOTIFICATION } from '../actionTypes';

export function allNotifications(state = null, { type, data }) {
    switch (type) {
        case GET_NOTIFICATIONS:
            if (state) {
                let currentState = state;
                currentState.push(data);
                return currentState;
            } else {
                let currentState = [];
                currentState.push(data);
                return currentState;
            }
        case REMOVE_NOTIFICATION:
            const newState = state.filter(item => item.order_id !== data);
            if (newState.length === 0) return null;
            else return newState;
        default: return state;
    }
}