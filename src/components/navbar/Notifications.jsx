import React from 'react';
import i18n from '../../services/locales/i18n';
import './navbar.scss';
import { useHistory } from 'react-router-dom';

const Notificatons = ({ notifications, data }) => {
    const history = useHistory();
    return (
        <div is-active={notifications ? 'true' : 'false'} className="navbar-notifications">
            <div className="navbar-notifications__header">
                {i18n.t('navbar.notifications')}
            </div>
            {data.map(item => {
                return (
                    <div onClick={() => history.push('/order', { id: item.order_id })} key={item.order_id} className="navbar-notifications__item">
                        <div className="navbar-notifications__item-title">{item.full_name}</div>
                        <div className="navbar-notifications__item-subtitle">{i18n.t('navbar.orders')} {item.product}</div>
                    </div>
                )
            })}
            <div className="navbar-notifications__otheritems">
                <div className="navbar-notifications__otheritems-text">{i18n.t('navbar.seeAll')}</div>
            </div>
        </div>
    )
}

export default Notificatons;