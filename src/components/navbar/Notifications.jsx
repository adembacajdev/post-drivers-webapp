import React from 'react';
import './navbar.scss';

const Notificatons = ({ notifications }) => {
    return (
        <div is-active={notifications ? 'true' : 'false'} className="navbar-notifications">
            <div className="navbar-notifications__header">
                Notifications
            </div>
            <div className="navbar-notifications__item">
                <div className="navbar-notifications__item-title">Filan Fisteku</div>
                <div className="navbar-notifications__item-subtitle">Orders a {"{product}"}</div>
            </div>
            <div className="navbar-notifications__item">
                <div className="navbar-notifications__item-title">Filan Fisteku</div>
                <div className="navbar-notifications__item-subtitle">Orders a {"{product}"}</div>
            </div>
            <div className="navbar-notifications__item">
                <div className="navbar-notifications__item-title">Filan Fisteku</div>
                <div className="navbar-notifications__item-subtitle">Orders a {"{product}"}</div>
            </div>
            <div className="navbar-notifications__item">
                <div className="navbar-notifications__item-title">Filan Fisteku</div>
                <div className="navbar-notifications__item-subtitle">Orders a {"{product}"}</div>
            </div>
            <div className="navbar-notifications__item">
                <div className="navbar-notifications__item-title">Filan Fisteku</div>
                <div className="navbar-notifications__item-subtitle">Orders a {"{product}"}</div>
            </div>
            <div className="navbar-notifications__item">
                <div className="navbar-notifications__item-title">Filan Fisteku</div>
                <div className="navbar-notifications__item-subtitle">Orders a {"{product}"}</div>
            </div>
            <div className="navbar-notifications__otheritems">
                <div className="navbar-notifications__otheritems-text">See all</div>
            </div>
        </div>
    )
}

export default Notificatons;