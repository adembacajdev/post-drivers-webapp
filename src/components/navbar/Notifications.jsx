import React from 'react';
import i18n from '../../services/locales/i18n';
import './navbar.scss';

const Notificatons = ({ notifications }) => {
    return (
        <div is-active={notifications ? 'true' : 'false'} className="navbar-notifications">
            <div className="navbar-notifications__header">
            {i18n.t('navbar.notifications')}
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
                <div className="navbar-notifications__otheritems-text">{i18n.t('navbar.seeAll')}</div>
            </div>
        </div>
    )
}

export default Notificatons;