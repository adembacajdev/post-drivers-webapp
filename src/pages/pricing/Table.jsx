import React from 'react';
import i18n from '../../services/locales/i18n';
import './style.scss';
import TableItem from './TableItem';

const Table = ({ items }) => {
    return (
        <div className="strike-pricing__table">
            <div className="strike-pricing__table-header">
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.country')}</div>
                </div>
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.size')}</div>
                </div>
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.shipmentPrice')}</div>
                </div>
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.cancellationPrice')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem key={index} {...item} />
            })}
        </div>
    )
}

export default Table;