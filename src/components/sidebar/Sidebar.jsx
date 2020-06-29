import React, { useCallback } from 'react';
import images from '../../assets/images';
import { useHistory, useLocation } from 'react-router-dom';
import i18n from '../../services/locales/i18n';
import { useSelector, useDispatch, connect } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../../store/actionTypes';
import './sidebar.scss';
import { logout } from '../../store/actions/authorization';

const Sidebar = ({ logout }) => {
    const sidebar = useSelector(state => state.sidebar);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { homeIcon, customersIcon, statisticsIcon, productsIcon, transfersIcon, usersIcon, pricingIcon, ordersIcon } = images.sidebar;
    const menu = [
        { name: i18n.t('sidebar.home'), path: '/', icon: homeIcon },
        { name: i18n.t('sidebar.products'), path: '/products', icon: productsIcon },
        { name: i18n.t('sidebar.orders'), path: '/orders', icon: ordersIcon },
        { name: i18n.t('sidebar.customers'), path: '/customers', icon: customersIcon },
        { name: i18n.t('sidebar.transfers'), path: '/transfers', icon: transfersIcon },
        { name: i18n.t('sidebar.statistics'), path: '/statistics', icon: statisticsIcon },
        { name: i18n.t('sidebar.users'), path: '/users', icon: usersIcon },
        { name: i18n.t('sidebar.pricing'), path: '/pricing', icon: pricingIcon },
    ]
    const signout = useCallback(() => { logout() }, [])
    return (
        <div is-open={sidebar ? 'true' : 'false'} className="strike-sidebar">
            {menu.map((item, index) => {
                return (
                    <div key={index} onClick={() => {
                        history.push(item.path);
                        dispatch({ type: TOGGLE_SIDEBAR })
                    }} is-active={location.pathname === item.path ? 'true' : 'false'} className="strike-sidebar__item">
                        <div className="strike-sidebar__item-line" />
                        <img className="strike-sidebar__item-icon" src={item.icon} />
                        <div className="strike-sidebar__item-text">{item.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);