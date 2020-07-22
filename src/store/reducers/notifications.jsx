import { GET_NOTIFICATIONS } from '../actionTypes';

export function allNotifications(state = [], { type, data }) {
    switch (type) {
        case GET_NOTIFICATIONS:
            let currentState = state;
            currentState.push(data);
            return currentState;
        default: return state;
    }
}