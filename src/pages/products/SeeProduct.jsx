import React from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../store/actions/products';

const SeeProduct = (props) => {
    useEffect(() => {
        const { id } = props.location.state;
        props.getProduct(id)
    }, [])
    return (
        <Wrapper>
            <div className="strike-product">
                <div className="strike-product__header">{props.product && props.product.name}</div>
                <div className="strike-product__text"><b>Description: </b>{props.product && props.product.description}</div>
                <div className="strike-product__text"><b>Price: </b> {props.product && props.product.price} €</div>
                <div className="strike-product__text"><b>Size: </b> {props.product && props.product.size}</div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(SeeProduct);