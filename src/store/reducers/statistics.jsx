import { GET_DAILY_EARNINGS, GET_DAILY_ORDERS, GET_CITIES_STATISTICS } from '../actionTypes';
import moment from 'moment';

const initialState = {
    labels: ['06', '04', '06', '06'],
    datasets: [
        {
            label: "Completed",
            data: [1],
            fill: true,
            backgroundColor: "green",
            borderColor: "green"
        }
    ]
}

export function dailyEarnings(state = initialState, { type, data }) {
    switch (type) {
        case GET_DAILY_EARNINGS:
            let labels = [];
            let series = [];
            Object.keys(data).forEach(item => labels.push(moment(item).format('DD')));
            Object.values(data).forEach(item => series.push(item));
            return {
                data: {
                    labels,
                    datasets: [
                        {
                            label: "",
                            data: series,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        }
                    ]
                },
                options: { legend: { display: true } }
            }
        default: return state;
    }
}

export function dailyOrders(state = initialState, { type, data }) {
    switch (type) {
        case GET_DAILY_ORDERS:
            let labels = [];
            let datasets = [];
            Object.keys(data).forEach(dataItem => {
                if (dataItem === 'completed') {
                    let series = [];
                    Object.keys(data.completed).forEach(completed => {
                        labels.push(moment(completed).format('DD'));
                    })
                    Object.values(data.completed).forEach(completed => {
                        series.push(completed);
                    })
                    datasets.push({
                        label: "Completed",
                        data: series,
                        fill: false,
                        backgroundColor: "green",
                        borderColor: "green",
                        pointBorderColor: '#fff',
                    })
                }
                else if (dataItem === 'cancelled') {
                    let series = [];
                    Object.keys(data.cancelled).forEach(cancelled => {
                        labels.push(moment(cancelled).format('DD'));
                    })
                    Object.values(data.cancelled).forEach(cancelled => {
                        series.push(cancelled);
                    })
                    datasets.push({
                        label: "Cancelled",
                        data: series,
                        fill: false,
                        backgroundColor: "red",
                        borderColor: "red",
                        pointBorderColor: '#fff',
                    })
                }
                else if (dataItem === 'ongoing') {
                    let series = [];
                    Object.keys(data.ongoing).forEach(ongoing => {
                        labels.push(moment(ongoing).format('DD'));
                    })
                    Object.values(data.ongoing).forEach(ongoing => {
                        series.push(ongoing);
                    })
                    datasets.push({
                        label: "Ongoing",
                        data: series,
                        fill: false,
                        backgroundColor: "orange",
                        borderColor: "orange",
                        pointBorderColor: '#fff',
                    })
                }
                else if (dataItem === 'pending') {
                    let series = [];
                    Object.keys(data.pending).forEach(pending => {
                        labels.push(moment(pending).format('DD'));
                    })
                    Object.values(data.pending).forEach(pending => {
                        series.push(pending);
                    })
                    datasets.push({
                        label: "Pending",
                        data: series,
                        fill: false,
                        backgroundColor: "#259cdb",
                        borderColor: "#259cdb",
                        pointBorderColor: '#fff',
                    })
                }
                else if (dataItem === 'archived') {
                    let series = [];
                    Object.keys(data.archived).forEach(archived => {
                        labels.push(moment(archived).format('DD'));
                    })
                    Object.values(data.archived).forEach(archived => {
                        series.push(archived);
                    })
                    datasets.push({
                        label: "Archived",
                        data: series,
                        backgroundColor: "grey",
                        borderColor: "grey",
                        pointBorderColor: '#fff',
                    })
                }
            })
            const newData = {
                data: { labels, datasets },
                options: { legend: { display: true } }
            }
            return newData;
        default: return state;
    }
}


export function dailyCities(state = initialState, { type, data }) {
    switch (type) {
        case GET_CITIES_STATISTICS:
            let labels = [];
            let series = [];
            Object.keys(data).forEach(item => labels.push(item));
            Object.values(data).forEach(item => series.push(item));
            return {
                data: {
                    labels,
                    datasets: [
                        {
                            label: "",
                            data: series,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        }
                    ]
                },
                options: { legend: { display: true } }
            }
        default: return state;
    }
}