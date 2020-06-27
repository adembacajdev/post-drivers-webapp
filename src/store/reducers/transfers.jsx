import {
    GET_ALL_TRANSFERS, GET_SELECTED_TRANSFERS, GET_BALANCE_DETAILS, SEARCH_TRANSFERS
} from '../actionTypes';

const initialState = {
    hasNextPage: false,
    hasPrevPage: false,
    currentPage: 1,
    data: [],
    lastPage: []
}

export function allTransfers(state = initialState, { type, data }) {
    switch (type) {
        case GET_ALL_TRANSFERS:
            let lastPages = [];
            for (var i = 0; i < (data.meta && data.meta.last_page); i++) {
                lastPages.push(i + 1);
            }
            return {
                hasNextPage: data.links && data.links.next !== null,
                hasPrevPage: data.links && data.links.prev !== null,
                currentPage: data.meta && data.meta.current_page,
                data: data && data.data,
                lastPage: lastPages
            }
        case SEARCH_TRANSFERS:
            let lastPages2 = [];
            for (var i = 0; i < (data.meta && data.meta.last_page); i++) {
                lastPages2.push(i + 1);
            }
            return {
                hasNextPage: data.links && data.links.next !== null,
                hasPrevPage: data.links && data.links.prev !== null,
                currentPage: data.meta && data.meta.current_page,
                data: data && data.data,
                lastPage: lastPages2
            }
        default: return state;
    }
}

export function transfer(state = null, { type, data }) {
    switch (type) {
        case GET_SELECTED_TRANSFERS: return data;
        default: return state;
    }
}

export function balanceDetails(state = null, { type, data }) {
    switch (type) {
        case GET_BALANCE_DETAILS: return data;
        default: return state;
    }
}