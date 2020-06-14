import React from 'react';
import './navbar.scss';

const Profile = ({profile}) => {
    return (
        <div is-active={profile ? "true" : 'false'} className="navbar-profile">
            <div className="navbar-profile__toparrow" />
            <div className="navbar-profile__body">
                <div className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text"><b>Status:</b> Online</div>
                </div>
                <div className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">Account settings</div>
                </div>
                <div className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">Feedback</div>
                </div>
                <div style={{borderBottom: 'none'}} className="navbar-profile__body-item">
                    <div className="navbar-profile__body-item-text">Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Profile