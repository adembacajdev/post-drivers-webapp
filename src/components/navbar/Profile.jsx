import React, { useCallback, useState } from 'react';
import i18n from '../../services/locales/i18n';
import './navbar.scss';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/auth/Auth';

const Profile = ({ profile, logout }) => {
    const [language, setLanguage] = useState(Auth.getLanguage())
    const history = useHistory();
    const navigateToProfile = useCallback(() => { history.push('/profile') }, []);
    const changeLanguage = useCallback((e) => {
        localStorage.setItem('language', e.target.value)
        window.location.reload();
    }, [])
    return (
        <div is-active={profile ? "true" : 'false'} className="navbar-profile">
            <div className="navbar-profile__toparrow" />
            <div className="navbar-profile__body">
                <div onClick={navigateToProfile} className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">{i18n.t('navbar.accountSettings')}</div>
                </div>
                <div style={{ borderBottom: 'none' }} className="navbar-profile__body-item">
                    <select defaultValue={language} onChange={changeLanguage} className="navbar-profile__body-item-select">
                        <option value="en">English</option>
                        <option value="al">Albania</option>
                    </select>
                </div>
                <div onClick={logout} style={{ borderBottom: 'none' }} className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">{i18n.t('navbar.logout')}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile