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
const Login = lazy(() => import('../../pages/login/Login'));
const Orders = lazy(() => import('../../pages/orders/Orders'));
const Products = lazy(() => import('../../pages/products/Products'));
const Statistics = lazy(() => import('../../pages/statistics/Statistics'));
const Transfers = lazy(() => import('../../pages/transfers/Transfers'));
const Users = lazy(() => import('../../pages/users/Users'));
const Pricing = lazy(() => import('../../pages/pricing/Pricing'));

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
                            <Route path='/orders' exact component={Orders} />
                            <Route path='/products' exact component={Products} />
                            <Route path='/statistics' exact component={Statistics} />
                            <Route path='/transfers' exact component={Transfers} />
                            <Route path='/pricing' exact component={Pricing} />
                            <Route path='/users' exact component={Users} />
                            <Route path='/login' exact component={Login} />
                        </Switch>
                    </Suspense>
                </div>
            </BaseRouter>
    )
}

export default Router;