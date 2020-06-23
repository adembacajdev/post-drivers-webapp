import React from 'react';
import i18n from '../../services/locales/i18n';
import './navbar.scss';

const Profile = ({ profile, logout }) => {
    return (
        <div is-active={profile ? "true" : 'false'} className="navbar-profile">
            <div className="navbar-profile__toparrow" />
            <div className="navbar-profile__body">
                <div className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">{i18n.t('navbar.accountSettings')}</div>
                </div>
                <div onClick={logout} style={{ borderBottom: 'none' }} className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">{i18n.t('navbar.logout')}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile