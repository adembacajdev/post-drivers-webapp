import { GET_DAILY_EARNINGS, GET_DAILY_ORDERS } from '../actionTypes';
import moment from 'moment';

const initialState = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [[1, 2, 4, 5],]
}
export function dailyEarnings(state = initialState, { type, data }) {
    switch (type) {
        case GET_DAILY_EARNINGS:
            let labels = [];
            let series = [[]];
            Object.keys(data).forEach(item => labels.push(moment(item).format('MMMM')));
            Object.values(data).forEach(item => series[0].push(item));
            return { labels, series }
        default: return state;
    }
}

export function dailyOrders(state = initialState, { type, data }) {
    switch (type) {
        case GET_DAILY_ORDERS: 
        let labels = [];
        let series = [[],[]];
        Object.keys(data).forEach(item => labels.push(item));
        Object.values(data.completed).forEach(item => series[0].push(item));
        Object.values(data.cancelled).forEach(item => series[1].push(item));
        return { labels, series };
        default: return state;
    }
}