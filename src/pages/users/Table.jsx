import React from 'react';
import i18n from '../../services/locales/i18n';
import './style.scss';
import TableItem from './TableItem';

const Table = ({ items, deleteUser }) => {
    return (
        <div className="strike-users__table">
            <div className="strike-users__table-header">
                <div is-responsive="true" className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('customers.id')}</div>
                </div>
                <div className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.firstName')}</div>
                </div>
                <div className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.lastName')}</div>
                </div>
                <div className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.phone')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.email')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item centered">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.createdAt')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item centered">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.isAdmin')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item centered">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.actions')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem deleteUser={deleteUser} key={index} {...item} />
            })}
        </div>
    )
}

export default Table;