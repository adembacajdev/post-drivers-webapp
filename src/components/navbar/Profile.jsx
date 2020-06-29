import React, {useCallback} from 'react';
import i18n from '../../services/locales/i18n';
import './navbar.scss';
import { useHistory } from 'react-router-dom';

const Profile = ({ profile, logout }) => {
    const history = useHistory();
    const navigateToProfile = useCallback(() => { history.push('/profile') }, [])
    return (
        <div is-active={profile ? "true" : 'false'} className="navbar-profile">
            <div className="navbar-profile__toparrow" />
            <div className="navbar-profile__body">
                <div onClick={navigateToProfile} className="navbar-profile__body-item">
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