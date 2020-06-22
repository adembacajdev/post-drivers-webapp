import React, { Suspense, lazy } from 'react';
import { Router as BaseRouter, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Loader from '../../components/loader/Loader';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Sidebar } from '../../components';

//pages
const Home = lazy(() => import('../../pages/home/Home'));
const Customers = lazy(() => import('../../pages/customers/Customers'));
const SeeCustomer = lazy(() => import('../../pages/customers/SeeCustomer'));
const Login = lazy(() => import('../../pages/login/Login'));
const Orders = lazy(() => import('../../pages/orders/Orders'));
const SeeOrder = lazy(() => import('../../pages/orders/SeeOrder'));
const AddOrder = lazy(() => import('../../pages/orders/AddOrder'));
const Products = lazy(() => import('../../pages/products/Products'));
const SeeProduct = lazy(() => import('../../pages/products/SeeProduct'));
const Statistics = lazy(() => import('../../pages/statistics/Statistics'));
const Transfers = lazy(() => import('../../pages/transfers/Transfers'));
const Users = lazy(() => import('../../pages/users/Users'));
const SeeUser = lazy(() => import('../../pages/users/SeeUser'));
const Pricing = lazy(() => import('../../pages/pricing/Pricing'));
const AddUser = lazy(() => import('../../pages/users/AddUser'));
const AddTransfer = lazy(() => import('../../pages/transfers/AddTransfer'));
const AddProduct = lazy(() => import('../../pages/products/AddProduct'));

function Router(props) {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        !isLoggedIn
            ?
            <BaseRouter history={history}>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path='/' exact component={Login} />
                    </Switch>
                </Suspense>
            </BaseRouter>
            :
            <BaseRouter history={history}>
                <Navbar />
                <Sidebar />
                <div>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/customers' exact component={Customers} />
                            <Route path='/customer' exact component={SeeCustomer} />
                            <Route path='/orders' exact component={Orders} />
                            <Route path='/order' exact component={SeeOrder} />
                            <Route path='/add-order' exact component={AddOrder} />
                            <Route path='/products' exact component={Products} />
                            <Route path='/product' exact component={SeeProduct} />
                            <Route path='/add-product' exact component={AddProduct} />
                            <Route path='/statistics' exact component={Statistics} />
                            <Route path='/transfers' exact component={Transfers} />
                            <Route path='/add-transfer' exact component={AddTransfer} />
                            <Route path='/pricing' exact component={Pricing} />
                            <Route path='/users' exact component={Users} />
                            <Route path='/user' exact component={SeeUser} />
                            <Route path='/add-user' exact component={AddUser} />
                            <Route path='/login' exact component={Login} />
                        </Switch>
                    </Suspense>
                </div>
            </BaseRouter>
    )
}

export default Router;