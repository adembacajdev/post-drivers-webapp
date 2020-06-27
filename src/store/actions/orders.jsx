import {
    GET_ALL_ORDERS, GET_ORDER, NUMBER_OF_ORDERS_BY_STATUS, POST_ORDER, GET_ORDERS_BY_CITY, GET_ORDER_BY_STATUS, DELETE_ORDER,
    DELETE_ORDERS, GET_TOP_CITIES, GET_TOP_PRODUCTS, IS_LOGGED_IN, PRINT_ONE_ORDER, GET_ALL_ORDERS_PAGINATED, SEARCH_ORDERS,
    PRINT_SELECTED_ORDERS
} from '../actionTypes';
import axios from 'axios';

export const getAllOrders = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/orders');
        if (data.success) {
            dispatch({ type: GET_ALL_ORDERS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const searchOrders = (type, text) => async (dispatch) => {
    try {
        let url = '';
        if (type === 'status') url = `/orders/status?status=${text}`;
        if (type === 'city') url = `/orders/city?city=${text}`;
        if (type === 'serial_number') url = `/orders/serial/number?serial_number=${text}`;
        if (type === 'customer_name') url = `/orders/customer/name?customer_name=${text}`;
        if (type === 'date') url = `/orders/date?date=${text}`;

        const { data } = await axios.post(url);

        if (data.success) {
            dispatch({ type: SEARCH_ORDERS, data: data.data })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getOrdersPaginated = (limit, page) => async (dispatch) => {
    try {
        const data = await axios.get(`orders/paginate/${limit}?page=${page}`);
        if (data.status === 200) {
            dispatch({ type: GET_ALL_ORDERS_PAGINATED, data: data.data })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/orders/${id}`);
        if (data.success) {
            dispatch({ type: GET_ORDER, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getNumberOfOrdersByStatus = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/orders/status/count`);
        if (data.success) {
            dispatch({ type: NUMBER_OF_ORDERS_BY_STATUS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const postOrder = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post(`/orders`, body);
        if (data.success) {
            dispatch({ type: POST_ORDER, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getOrderByStatus = (status) => async (dispatch) => {
    try {
        const { data } = await axios.post(`/orders/status`, { status });
        if (data.success) {
            dispatch({ type: GET_ORDER_BY_STATUS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getOrderByCity = (city) => async (dispatch) => {
    try {
        const { data } = await axios.post(`/orders/${city}`);
        if (data.success) {
            dispatch({ type: GET_ORDERS_BY_CITY, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getTopCities = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/top/cities`);
        if (data.success) {
            dispatch({ type: GET_TOP_CITIES, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getTopProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/top/products`);
        if (data.success) {
            dispatch({ type: GET_TOP_PRODUCTS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/orders/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_ORDER, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteOrders = (order_ids) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/orders/${order_ids}`);
        if (data.success) {
            dispatch({ type: DELETE_ORDERS, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const printOneOrder = (id) => async (dispatch) => {
    try {
        const data = await axios.get(`/orders/${id}/print`, { responseType: 'blob' });
        // console.log('onePrint', data)
        dispatch({ type: PRINT_ONE_ORDER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const printSelectedOrders = (order_ids) => async (dispatch) => {
    try {
        var query = '';
        order_ids.forEach(item => {
            if (query === '') query = `order_ids[]=${item}`;
            else query = `${query}&order_ids[]=${item}`;
        });
        const { data } = await axios.post(`/orders/print/selected?${query}`, { responseType: 'blob' });
        dispatch({ type: PRINT_SELECTED_ORDERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}