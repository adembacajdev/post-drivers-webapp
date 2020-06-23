import React, { useState, useCallback } from 'react';
import images from '../../assets/images';
import Notifications from './Notifications';
import Profile from './Profile';
import i18n from '../../services/locales/i18n';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/actions/toggle.sidebar';
import { logout } from '../../store/actions/authorization';
import './navbar.scss';

const Navbar = (props) => {
    const { avatar, onNotification, offNotification, downArrow } = images.navbar;
    const [notifications, setNotifications] = useState(false);
    const [profile, setProfile] = useState(false);
    const toggleNotifications = useCallback(() => { setNotifications(!notifications) }, [notifications]);
    const toggleProfile = useCallback(() => { setProfile(!profile) }, [profile]);
    const profileBlur = useCallback(() => { setProfile(false) }, [profile]);
    const notificationBlur = useCallback(() => { setNotifications(false) }, [notifications]);

    const openSidebar = useCallback(() => { props.toggleSidebar() }, [props.sidebar]);
    const logout = useCallback(() => { props.logout() }, [])

    return (
        <div className="strike-navbar">
            <div className="strike-navbar__left">
                <div className="strike-navbar__left-text">{i18n.t('navbar.onlineShop')}</div>
            </div>
            <div className="strike-navbar__middle">
                {/* <div className="strike-navbar__middle-text">&#9776;</div> */}
                <div onClick={openSidebar} className="strike-navbar__menu-responsive">&#9776;</div>
            </div>
            <div className="strike-navbar__right">
                <div tabIndex="0" onBlur={notificationBlur} onClick={toggleNotifications} className="strike-navbar__right-notification">
                    <img className="strike-navbar__right-notification-icon" src={onNotification} />
                </div>
                <Notifications notifications={notifications} onBlur={notificationBlur} />
                <div className="strike-navbar__right-amount">
                    <div className="strike-navbar__right-amount-text">200.50$</div>
                </div>
                <div className="line" />
                <div onClick={toggleProfile} tabIndex="1" onBlur={profileBlur} className="strike-navbar__right-name">
                    <div className="strike-navbar__right-name-text">Filan Fisteku</div>
                    <img is-active={profile ? 'true' : 'false'} className="strike-navbar__right-name-downarrow" src={downArrow} />
                </div>
                <Profile logout={logout} profile={profile} />
            </div>
        </div>
    )
}

const mapStateToProps = ({ sidebar }) => ({ sidebar });
const mapDispatchToProps = { toggleSidebar, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);