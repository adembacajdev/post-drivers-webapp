import React, { Suspense, lazy } from 'react';
import { Router as BaseRouter, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Loader from '../../components/loader/Loader';
import PrivateRoute from './PrivateRoute';

//pages
const Home = lazy(() => import('../../pages/home/Home'));
const Customers = lazy(() => import('../../pages/customers/Customers'));
const SeeCustomer = lazy(() => import('../../pages/customers/SeeCustomer'));
const Login = lazy(() => import('../../pages/login/Login'));
const Orders = lazy(() => import('../../pages/orders/Orders'));
const SeeOrder = lazy(() => import('../../pages/orders/SeeOrder'));
const AddOrder = lazy(() => import('../../pages/orders/AddOrder'));
const VerifyOrder = lazy(() => import('../../pages/orders/VerifyOrder'));
const OrderByStatus = lazy(() => import('../../pages/orders/OrdersByStatus'));
const Products = lazy(() => import('../../pages/products/Products'));
const SeeProduct = lazy(() => import('../../pages/products/SeeProduct'));
const Statistics = lazy(() => import('../../pages/statistics/Statistics'));
const Transfers = lazy(() => import('../../pages/transfers/Transfers'));
const Users = lazy(() => import('../../pages/users/Users'));
const SeeUser = lazy(() => import('../../pages/users/SeeUser'));
const Pricing = lazy(() => import('../../pages/pricing/Pricing'));
const AddUser = lazy(() => import('../../pages/users/AddUser'));
const EditUser = lazy(() => import('../../pages/users/EditUser'));
const AddTransfer = lazy(() => import('../../pages/transfers/AddTransfer'));
const AddProduct = lazy(() => import('../../pages/products/AddProduct'));
const EditProduct = lazy(() => import('../../pages/products/EditProduct'));
const Profile = lazy(() => import('../../pages/profile/Profile'));
const PDFViewer = lazy(() => import('../../pages/PDF/PDFViewer'));

function Router({ location }) {
    const protectedRoutes = [
        { path: '/', exact: true, component: Home },
        { path: '/customers', exact: true, component: Customers },
        { path: '/customer', exact: true, component: SeeCustomer },
        { path: '/orders', exact: true, component: Orders },
        { path: '/order', exact: true, component: SeeOrder },
        { path: '/order-by-status', exact: true, component: OrderByStatus },
        { path: '/products', exact: true, component: Products },
        { path: '/product', exact: true, component: SeeProduct },
        { path: '/add-product', exact: true, component: AddProduct },
        { path: '/edit-product', exact: true, component: EditProduct },
        { path: '/statistics', exact: true, component: Statistics },
        { path: '/transfers', exact: true, component: Transfers },
        { path: '/add-transfer', exact: true, component: AddTransfer },
        { path: '/pricing', exact: true, component: Pricing },
        { path: '/users', exact: true, component: Users },
        { path: '/user', exact: true, component: SeeUser },
        { path: '/add-user', exact: true, component: AddUser },
        { path: '/edit-user', exact: true, component: EditUser },
        { path: '/profile', exact: true, component: Profile },
    ]
    return (
        <BaseRouter history={history}>
                <Suspense fallback={<Loader />}>
                    <Switch location={location}>
                        <Route path="/login" component={Login} exact />
                        <Route path="/add-order/:productId" component={AddOrder} exact />
                        <Route path="/add-order" component={AddOrder} exact />
                        <Route path="/order/verify" component={VerifyOrder} exact />
                        <Route path="/print/:type" component={PDFViewer} exact />
                        <Route path="/print" component={PDFViewer} exact />
                        {protectedRoutes.map((route, idx) => {
                            return <PrivateRoute key={idx} {...route} />
                        })}
                    </Switch>
                </Suspense>
        </BaseRouter>
    )
}

export default Router;