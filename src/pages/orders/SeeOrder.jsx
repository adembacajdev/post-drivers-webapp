import React from 'react';
import './orders.scss';
import Wrapper from '../../containers/wrapper/Wrapper';

const SeeOrder = (props) => {
    return (
        <Wrapper>
            <div className="strike-order">
                <div className="strike-order__header">{'{order name}'}</div>
                <div className="strike-order__text"><b>ID: </b>{'{order id}'}</div>
                <div className="strike-order__text"><b>Status: </b>{'{order status}'}</div>
                <div className="strike-order__text"><b>United price: </b>{'{order united price}'}</div>
                <div className="strike-order__text"><b>Date: </b>{'{order date}'}</div>
                <div className="strike-order__text"><b>Time: </b>{'{order time}'}</div>
                <div className="strike-order__text"><b>Customer Name: </b>{'{order customer name}'}</div>
                <div className="strike-order__text"><b>City: </b>{'{order city}'}</div>
            </div>
        </Wrapper>
    )
}

export default SeeOrder;