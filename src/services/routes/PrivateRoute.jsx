import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function PrivateRoute({ component: Component, ...rest }) {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <>
            <Navbar />
            <Sidebar />
            <Route
                {...rest}
                render={props =>
                    isLoggedIn ? (
                        <Component {...props} />
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
        </>
    );
}

export default PrivateRoute;