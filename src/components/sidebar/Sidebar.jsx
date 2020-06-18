import React from 'react';
import images from '../../assets/images';
import { useHistory, useLocation } from 'react-router-dom';
import i18n from '../../services/locales/i18n';
import './sidebar.scss';

export const Sidebar = (props) => {
    const { homeIcon, customersIcon, ordersIcon, productsIcon, transfersIcon } = images.sidebar;
    const menu = [
        { name: i18n.t('sidebar.home'), path: '/', icon: homeIcon },
        { name: i18n.t('sidebar.products'), path: '/products', icon: productsIcon },
        { name: i18n.t('sidebar.orders'), path: '/orders', icon: ordersIcon },
        { name: i18n.t('sidebar.customers'), path: '/customers', icon: customersIcon },
        { name: i18n.t('sidebar.transfers'), path: '/transfers', icon: transfersIcon },
        { name: i18n.t('sidebar.statistics'), path: '/statistics', icon: null },
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