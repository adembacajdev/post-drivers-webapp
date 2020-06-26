import React, { useEffect } from 'react';
import './customers.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import { getCustomer } from '../../store/actions/customers';

const SeeCustomer = (props) => {
    useEffect(() => { props.getCustomer(props.location.state.id); }, [])
    return (
        <Wrapper>
            <div className="strike-customer">
                <div className="strike-customer__header">{props.customer && props.customer.first_name}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >ID: </b>{props.customer && props.customer.id}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >First Name: </b>{props.customer && props.customer.first_name}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Last Name: </b>{props.customer && props.customer.last_name}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Phone: </b>{props.customer && props.customer.phone}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Country: </b>{props.customer && props.customer.country}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Address: </b>{props.customer && props.customer.address}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >City: </b>{props.customer && props.customer.city}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Building: </b>{props.customer && props.customer.building}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Location: </b>{props.customer && `[${props.customer.latitude}, ${props.customer.longitude}]`}</div>
                <div className="strike-customer__text"><b style={{marginRight: 10}} >Orders: </b>{props.customer && props.customer.orders}</div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ customer }) => ({ customer });
const mapDispatchToProps = { getCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(SeeCustomer);