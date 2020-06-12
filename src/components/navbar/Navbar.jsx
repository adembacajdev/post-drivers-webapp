import React from 'react';
import images from '../../assets/images';
import './navbar.scss';

export const Navbar = (props) => {
    const { avatar, onNotification, offNotification, downArrow } = images.navbar;
    return (
        <div className="strike-navbar">
            <div className="strike-navbar__left">
                <div className="strike-navbar__left-text">Online Shop</div>
            </div>
            <div className="strike-navbar__middle">
                <div className="strike-navbar__middle-text">Strike.</div>
            </div>
            <div className="strike-navbar__right">
                <div className="strike-navbar__right-notification">
                    <img className="strike-navbar__right-notification-icon" src={onNotification} />
                </div>
                <div className="strike-navbar__right-amount">
                    <div className="strike-navbar__right-amount-text">200.50$</div>
                </div>
                <div className="line" />
                <div className="strike-navbar__right-name">
                    <div className="strike-navbar__right-name-text">Filan Fisteku</div>
                    <img className="strike-navbar__right-name-downarrow" src={downArrow} />
                </div>
                <div className="strike-navbar__right-avatar">
                    <img className="strike-navbar__right-avatar-icon" src={avatar} />
                </div>
            </div>
        </div>
    )
}