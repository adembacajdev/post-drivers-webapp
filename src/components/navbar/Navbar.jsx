import React, { useState, useCallback } from 'react';
import images from '../../assets/images';
import Notifications from './Notifications';
import Profile from './Profile';
import i18n from '../../services/locales/i18n';
import './navbar.scss';

export const Navbar = (props) => {
    const { avatar, onNotification, offNotification, downArrow } = images.navbar;
    const [notifications, setNotifications] = useState(false);
    const [profile, setProfile] = useState(false);
    const toggleNotifications = useCallback(() => { setNotifications(!notifications) }, [notifications]);
    const toggleProfile = useCallback(() => { setProfile(!profile) }, [profile]);
    const profileBlur = useCallback(() => { setProfile(false) }, [profile]);
    const notificationBlur = useCallback(() => { setNotifications(false) }, [notifications]);

    return (
        <div className="strike-navbar">
            <div className="strike-navbar__left">
                <div className="strike-navbar__left-text">{i18n.t('navbar.onlineShop')}</div>
            </div>
            <div className="strike-navbar__middle">
                <div className="strike-navbar__middle-text">{i18n.t('navbar.strike')}</div>
            </div>
            <div className="strike-navbar__right">
                <div tabIndex="0" onBlur={toggleNotifications} onClick={toggleNotifications} className="strike-navbar__right-notification">
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
                <Profile profile={profile} />
                <div className="strike-navbar__right-avatar">
                    <img className="strike-navbar__right-avatar-icon" src={avatar} />
                </div>
            </div>
        </div>
    )
}