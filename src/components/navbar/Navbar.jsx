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

const Navbar = (props) => {
    const [shopName, setShopName] = useState(Auth.getShopName());
    const [currentBalance, setCurrentBalance] = useState(Auth.getCurrentBalance());
    const { avatar, onNotification, offNotification, downArrow } = images.navbar;
    const [notifications, setNotifications] = useState(false);
    const [profile, setProfile] = useState(false);

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

    const goHome = useCallback(() => { history.push('/') }, [])

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
                    <img className="strike-navbar__right-notification-icon" src={onNotification} />
                </div>
                <Notifications notifications={notifications} onBlur={notificationBlur} />
                <div className="strike-navbar__right-amount">
                    <div className="strike-navbar__right-amount-text">{currentBalance}€</div>
                </div>
                <div className="line" />
                <div onClick={toggleProfile} tabIndex="1" onBlur={profileBlur} className="strike-navbar__right-name">
                    <div className="strike-navbar__right-name-text">Filan Fisteku</div>
                    <img is-active={profile ? 'true' : 'false'} className="strike-navbar__right-name-downarrow" src={downArrow} />
                <Profile logout={logout} profile={profile} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ sidebar, shopInfo }) => ({ sidebar, shopInfo });
const mapDispatchToProps = { toggleSidebar, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);