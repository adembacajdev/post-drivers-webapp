import React from 'react';
import './customers.scss';
import Wrapper from '../../containers/wrapper/Wrapper';

const SeeCustomer = (props) => {
    return (
        <Wrapper>
            <div className="strike-customer">
                <div className="strike-customer__header">{'{customer name}'}</div>
                <div className="strike-customer__text"><b>ID: </b>{'{customer id}'}</div>
                <div className="strike-customer__text"><b>First Name: </b>{'{customer first name}'}</div>
                <div className="strike-customer__text"><b>Last Name: </b>{'{customer last name}'}</div>
                <div className="strike-customer__text"><b>Phone: </b>{'{customer phone}'}</div>
                <div className="strike-customer__text"><b>Address: </b>{'{customer address}'}</div>
                <div className="strike-customer__text"><b>City: </b>{'{customer city}'}</div>
            </div>
        </Wrapper>
    )
}

export default SeeCustomer;