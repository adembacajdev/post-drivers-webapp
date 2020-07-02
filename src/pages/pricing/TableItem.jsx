import React from 'react';
import './style.scss';

const TableItem = ({cancellation_price, country, shipment_price, size}) => {
    return (
        <div className="strike-pricing__table-item">
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{country}</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{size}</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{shipment_price}€</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{cancellation_price}€</div>
            </div>
        </div>
    )
}

export default TableItem