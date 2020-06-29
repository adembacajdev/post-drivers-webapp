import React from 'react';
import './transfers.scss';
import moment from 'moment';


const TableItem = ({ amount, updated_at }) => {
    const date = moment(updated_at).format('DD/MM/YYYY');
    const time = moment(updated_at).format('HH:MM:ss');
    return (
        <div className="strike-transfers__table-item">
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">${amount}</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">{date}</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">{time}</div>
            </div>
        </div>
    )
}

export default TableItem