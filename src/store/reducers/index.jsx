import { combineReducers } from 'redux';
import isLoggedIn from './authenticate.reducer';
import sidebar from './toggle.sidebar';
import errorModal from './toggle.error.modal';
import successModal from './toggle.success.modal';
import shopInfo from './shop.info';
import { loggedIn, newPassword, user } from './authorization';
import { allProducts, product, productOrder } from './products';
import { allOrders, order, numberOfOrdersByStatus, ordersByCity, ordersByStatus, topCities, topProducts, printOrder, ordersPaginated, orderPosted } from './orders';
import { allCustomers, customer, recentCustomers, customerOrders } from './customers';
import { allLocations, location } from './location';
import { allUsers, selectedUser } from './users';
import { pricingTable } from './pricing';
import { allTransfers, transfer, balanceDetails } from './transfers';
import { dailyEarnings, dailyOrders } from './statistics';
import myProfile from './my.profile';

export default combineReducers({
    isLoggedIn, sidebar, errorModal, successModal,
    loggedIn, newPassword, user, shopInfo, myProfile,
    allProducts, product, productOrder,
    allOrders, order, numberOfOrdersByStatus, ordersByCity, ordersByStatus, topCities, topProducts, printOrder, ordersPaginated, orderPosted,
    allCustomers, customer, recentCustomers, customerOrders,
    allLocations, location,
    allUsers, selectedUser,
    pricingTable,
    allTransfers, transfer, balanceDetails,
    dailyEarnings, dailyOrders
});