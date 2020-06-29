import React from 'react';
import i18n from '../../services/locales/i18n';
import './transfers.scss';
import TableItem from './TableItem';


const Table = ({ items }) => {
    return (
        <div className="strike-transfers__table">
            <div className="strike-transfers__table-header">
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.amount')}</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.date')}</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.time')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem key={index} {...item} />
            })}
        </div>
    )
}

export default Table;