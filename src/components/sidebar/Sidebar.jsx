import React, { useEffect, useState } from 'react';
import images from '../../assets/images';
import { useHistory, useLocation } from 'react-router-dom';
import i18n from '../../services/locales/i18n';
import { useSelector, useDispatch, connect } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../../store/actionTypes';
import './sidebar.scss';
import { logout } from '../../store/actions/authorization';

const Sidebar = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const {
        homeIcon, customersIcon, statisticsIcon, productsIcon, transfersIcon, usersIcon, pricingIcon, ordersIcon
    } = images.sidebar;
    const { logoWithoutText } = images;

    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.sidebar);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (props.myProfile) {
            setIsAdmin(props.myProfile.is_admin == 1 ? true : false)
        }
    }, [props.myProfile])

    const menu = [
        { name: i18n.t('sidebar.home'), path: '/', icon: homeIcon, show: true },
        { name: i18n.t('sidebar.products'), path: '/products', icon: productsIcon, show: true },
        { name: i18n.t('sidebar.orders'), path: '/orders', icon: ordersIcon, show: true },
        { name: i18n.t('sidebar.customers'), path: '/customers', icon: customersIcon, show: true },
        { name: i18n.t('sidebar.transfers'), path: '/transfers', icon: transfersIcon, show: true },
        { name: i18n.t('sidebar.statistics'), path: '/statistics', icon: statisticsIcon, show: true },
        { name: i18n.t('sidebar.users'), path: '/users', icon: usersIcon, show: isAdmin },
        { name: i18n.t('sidebar.pricing'), path: '/pricing', icon: pricingIcon, show: true },
    ]
    return (
        <div is-open={sidebar ? 'true' : 'false'} className="strike-sidebar">
            {menu.map((item, index) => {
                if (item.show) {
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
                }
            })}
            <footer className="strike-sidebar__footer">
                <img className="strike-sidebar__footer-logo" src={logoWithoutText} />
                <div className="strike-sidebar__footer-text">Powered by Strike™</div>
            </footer>
        </div>
    )
}

const mapStateToProps = ({ user, myProfile }) => ({ user, myProfile });
const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);