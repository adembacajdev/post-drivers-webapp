import React, { useState, useCallback, useEffect } from 'react';
import images from '../../assets/images';
import Notifications from './Notifications';
import Profile from './Profile';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/actions/toggle.sidebar';
import { logout } from '../../store/actions/authorization';
import Auth from '../../services/auth/Auth';
import './navbar.scss';
import { useHistory } from 'react-router-dom';
import { getShopInfo } from '../../store/actions/shop.info';

const Navbar = (props) => {
    const [shopName, setShopName] = useState('');
    const [currentBalance, setCurrentBalance] = useState('');
    const [name, setName] = useState('');
    const { avatar, onNotification, offNotification, downArrow } = images.navbar;
    const [notifications, setNotifications] = useState(false);
    const [profile, setProfile] = useState(false);
    const [notificationIcon, setNotificationIcon] = useState(offNotification);

    const history = useHistory();

    const toggleNotifications = useCallback(() => { setNotifications(!notifications) }, [notifications]);
    const toggleProfile = useCallback(() => { setProfile(!profile) }, [profile]);
    const profileBlur = useCallback(() => { setProfile(false) }, [profile]);
    const notificationBlur = useCallback(() => { setNotifications(false) }, [notifications]);
    const openSidebar = useCallback(() => { props.toggleSidebar() }, [props.sidebar]);
    const logout = useCallback(() => { props.logout() }, []);

    useEffect(() => {
        setShopName(Auth.getShopName());
        setCurrentBalance(Auth.getCurrentBalance());
    }, [props.shopInfo]);
    useEffect(() => {
        if (props.myProfile) {
            setShopName(props.myProfile.shop_name);
            setCurrentBalance(props.myProfile.current_balance);
            setName(`${props.myProfile.first_name} ${props.myProfile.last_name}`)
        }
    }, [props.myProfile])

    const goHome = useCallback(() => { history.push('/') }, []);

    useEffect(() => {
        const token = Auth.getToken();
        if (token) { props.getShopInfo() }
    }, []);
    useEffect(() => { if (props.shopInfo) { setCurrentBalance(props.shopInfo.current_balance); } }, [props.shopInfo]);

    return (
        <div className="strike-navbar">
            <div className="strike-navbar__left">
                <div onClick={goHome} className="strike-navbar__left-text">{shopName}</div>
                <div onClick={openSidebar} className="strike-navbar-left-menu-responsive">&#9776;</div>
            </div>
            <div className="strike-navbar__middle">
                <div onClick={openSidebar} className="strike-navbar__menu-responsive">&#9776;</div>
                <div onClick={goHome} className="strike-navbar__middle-text">{shopName}</div>
            </div>
            <div className="strike-navbar__right">
                <div tabIndex="0" onBlur={notificationBlur} onClick={toggleNotifications} className="strike-navbar__right-notification">
                    {props.allNotifications && <div className="strike-navbar__right-notification-icon-circle" />}
                    <img className="strike-navbar__right-notification-icon" src={offNotification} />
                </div>
                <Notifications data={props.allNotifications} notifications={notifications} onBlur={notificationBlur} />
                <div className="strike-navbar__right-amount">
                    <div className="strike-navbar__right-amount-text">{props.shopInfo && props.shopInfo.current_balance}€</div>
                </div>
                <div className="line" />
                <div onClick={toggleProfile} tabIndex="1" onBlur={profileBlur} className="strike-navbar__right-name">
                    <div className="strike-navbar__right-name-text">{name}</div>
                    <img is-active={profile ? 'true' : 'false'} className="strike-navbar__right-name-downarrow" src={downArrow} />
                    <Profile logout={logout} profile={profile} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ sidebar, shopInfo, myProfile, allNotifications }) => ({ sidebar, shopInfo, myProfile, allNotifications });
const mapDispatchToProps = { toggleSidebar, logout, getShopInfo };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);