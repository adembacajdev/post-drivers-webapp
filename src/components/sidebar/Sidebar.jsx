import React from 'react';
import images from '../../assets/images';
import { useHistory, useLocation } from 'react-router-dom';
import './sidebar.scss';

export const Sidebar = (props) => {
    const { homeIcon, customersIcon, ordersIcon, productsIcon, transfersIcon } = images.sidebar;
    const menu = [
        { name: 'Home', path: '/', icon: homeIcon },
        { name: 'Products', path: '/products', icon: productsIcon },
        { name: 'Orders', path: '/orders', icon: ordersIcon },
        { name: 'Customers', path: '/customers', icon: customersIcon },
        { name: 'Transfers', path: '/transfers', icon: transfersIcon },
        { name: 'Statistics', path: '/statistics', icon: null },
    ]
    const history = useHistory();
    const location = useLocation();
    return (
        <div className="strike-sidebar">
            {menu.map((item, index) => {
                return (
                    <div key={index} onClick={() => history.push(item.path)} is-active={location.pathname === item.path ? 'true' : 'false'} className="strike-sidebar__item">
                        <div className="strike-sidebar__item-line" />
                        <img className="strike-sidebar__item-icon" src={item.icon} />
                        <div className="strike-sidebar__item-text">{item.name}</div>
                    </div>
                )
            })}
        </div>
    )
}