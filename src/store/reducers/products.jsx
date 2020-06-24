import {
    GET_ALL_PRODUCTS, GET_PRODUCT, GET_PRODUCT_ORDER,
    POST_STORE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCTS //for these types,we should add later when we console all data
} from '../actionTypes';

export function allProducts(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_PRODUCTS: return data;
        case DELETE_PRODUCT:
            const { id } = data
            const newProducts = state.filter(item => item.id !== id);
            return newProducts;
        case POST_STORE_PRODUCT:
            let storeProduct = state;
            storeProduct.push(data);
            return storeProduct;
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