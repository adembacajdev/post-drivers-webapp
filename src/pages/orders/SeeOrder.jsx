import React from 'react';
import './orders.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { useEffect } from 'react';
import { getOrder } from '../../store/actions/orders';
import { connect } from 'react-redux';
import moment from 'moment'

const SeeOrder = (props) => {
    useEffect(() => {
        props.getOrder(props.location.state.id);
    }, [])
    return (
        <Wrapper>
            <div className="strike-order">
                <div className="strike-order__header">{props.order && props.order.product.name}</div>
                <div className="strike-order__text"><b>ID: </b>{props.order && props.order.id}</div>
                <div className="strike-order__text"><b>Description: </b>{props.order && props.order.description}</div>
                <div className="strike-order__text"><b>Status: </b>{props.order && props.order.status}</div>
                <div className="strike-order__text"><b>United price: </b>{props.order && props.order.price}</div>
                <div className="strike-order__text"><b>Date: </b>{props.order && moment(props.order.updated_at).format('DD/MM/YYYY')}</div>
                <div className="strike-order__text"><b>Time: </b>{props.order && moment(props.order.updated_at).format('HH:MM:SS')}</div>
                <div className="strike-order__text"><b>Customer Name: </b>{props.order && props.order.client.first_name}{props.order && props.order.client.last_name}</div>
                <div className="strike-order__text"><b>City: </b>{props.order && props.order.client.city}</div>
                <div className="strike-order__text"><b>Address: </b>{props.order && props.order.client.address}</div>
                <div className="strike-order__text"><b>Building: </b>{props.order && props.order.client.building}</div>
                <div className="strike-order__text"><b>Country: </b>{props.order && props.order.client.country}</div>
                <div className="strike-order__text"><b>Phone: </b>{props.order && props.order.client.phone}</div>
                <div className="strike-order__text"><b>Serial number: </b>{props.order && props.order.serial_number}</div>
                <div className="strike-order__text"><b>Product ID: </b>{props.order && props.order.product_id}</div>
                <div className="strike-order__text"><b>Driver ID: </b>{props.order && props.order.driver_id}</div>
                <div className="strike-order__text"><b>Location: </b>[{props.order && props.order.location.latitude}, {props.order && props.order.location.longitude}]</div>
                <div className="strike-order__text"><b>Product Name: </b>{props.order && props.order.product.name}</div>
                <div className="strike-order__text"><b>Product Price: </b>{props.order && props.order.product.price}</div>
                <div className="strike-order__text"><b>Product Size: </b>{props.order && props.order.product.size}</div>
                <div className="strike-order__text"><b>Product Slug: </b>{props.order && props.order.product.slug}</div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = { getOrder };

export default connect(mapStateToProps, mapDispatchToProps)(SeeOrder);