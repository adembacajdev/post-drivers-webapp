import {
    GET_ALL_PRODUCTS, GET_PRODUCT, GET_PRODUCT_ORDER,
    POST_STORE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, SELECT_ALL_PRODUCTS, SEARCH_PRODUCTS //for these types,we should add later when we console all data
} from '../actionTypes';

const initialState = {
    hasNextPage: false,
    hasPrevPage: false,
    currentPage: 1,
    data: [],
    lastPage: []
}

export function allProducts(state = initialState, { type, data }) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            let lastPages = [];
            for (var i = 0; i < (data.meta && data.meta.last_page); i++) {
                lastPages.push(i + 1);
            }
            data.data.forEach(item => item.checked = false);
            return {
                hasNextPage: data.links && data.links.next !== null,
                hasPrevPage: data.links && data.links.prev !== null,
                currentPage: data.meta && data.meta.current_page,
                data: data && data.data,
                lastPage: lastPages
            }
        case SEARCH_PRODUCTS:
            return {
                hasNextPage: false,
                hasPrevPage: false,
                currentPage: 1,
                data: data,
                lastPage: [1]
            }
        case POST_STORE_PRODUCT:
            let storeProduct = state;
            storeProduct.push(data);
            return storeProduct;
        case SELECT_ALL_PRODUCTS:
            let selectProduct = state;
            selectProduct.data.forEach(item => item.checked = data);
            return selectProduct;
        default: return state;
    }
}

export function product(state = null, { type, data }) {
    switch (type) {
        case GET_PRODUCT: return data;
        default: return state;
    }
}

export function productOrder(state = null, { type, data }) {
    switch (type) {
        case GET_PRODUCT_ORDER: return data;
        default: return state;
    }
}

export function deletedProduct(state=false, {type, data}){
    switch(type){
        case DELETE_PRODUCT: return data;
        default: return false;
    }
}