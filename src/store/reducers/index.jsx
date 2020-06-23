import { combineReducers } from 'redux';
import isLoggedIn from './authenticate.reducer';
import sidebar from './toggle.sidebar';
import { loggedIn, newPassword, user } from './authorization';
import { allProducts, product, productOrder } from './products';
import { allOrders, order, numberOfOrdersByStatus, ordersByCity, ordersByStatus, topCities, topProducts } from './orders';
import { allCustomers, customer, recentCustomers, customerOrders } from './customers';
import { allLocations, location } from './location';
import { allUsers, selectedUser } from './users';
import { pricingTable } from './pricing';
import { allTransfers, transfer, balanceDetails } from './transfers';
import { dailyEarnings, dailyOrders } from './statistics';

export default combineReducers({
    isLoggedIn, sidebar,
    loggedIn, newPassword, user,
    allProducts, product, productOrder,
    allOrders, order, numberOfOrdersByStatus, ordersByCity, ordersByStatus, topCities, topProducts,
    allCustomers, customer, recentCustomers, customerOrders,
    allLocations, location,
    allUsers, selectedUser,
    pricingTable,
    allTransfers, transfer, balanceDetails,
    dailyEarnings, dailyOrders
});