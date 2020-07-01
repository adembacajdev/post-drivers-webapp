import React from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../store/actions/products';
import i18next from '../../services/locales/i18n';

const SeeProduct = (props) => {
    useEffect(() => {
        const { id } = props.location.state;
        props.getProduct(id)
    }, [])
    return (
        <Wrapper>
            <div className="strike-product">
                <div className="strike-product__header">{i18next.t('products.productDetails')}</div>
                <div className="strike-product__body">
                    <div className="strike-product__body-left">
                        <div className="strike-product__body-label">{i18next.t('products.id')}</div>
                        <input disabled defaultValue={props.product && props.product.id} className="strike-product__body-input" placeholder="Field" />
                        <div className="strike-product__body-label">{i18next.t('products.name')}</div>
                        <input disabled defaultValue={props.product && props.product.name} className="strike-product__body-input" placeholder="Field" />
                        <div className="strike-product__body-label">{i18next.t('products.description2')}</div>
                        <input disabled defaultValue={props.product && props.product.description} className="strike-product__body-input" placeholder="Field" />
                        <div className="strike-product__body-label">{i18next.t('products.price2')}</div>
                        <input disabled defaultValue={props.product && props.product.price} className="strike-product__body-input" placeholder="Field" />
                        <div className="strike-product__body-label">{i18next.t('products.size')}</div>
                        <input disabled defaultValue={props.product && props.product.size} className="strike-product__body-input" placeholder="Field" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = { getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(SeeProduct);