import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './products.scss';
import { getAllProducts, deleteProduct } from '../../store/actions/products';
import { useEffect } from 'react';

const Products = (props) => {
    useEffect(() => { props.getAllProducts() }, []);
    return (
        <Wrapper>
            <div className="strike-products">
                <div className="strike-products__header">
                    <div className="strike-products__header-title">{i18n.t('products.products')}</div>
                </div>
                <Table items={props.allProducts} deleteProduct={props.deleteProduct} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ allProducts }) => ({ allProducts });
const mapDispatchToProps = { getAllProducts, deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));

const Table = ({ items, deleteProduct }) => {

    return (
        <div className="strike-products__table">
            <div className="strike-products__table-header">
                <div className="strike-products__table-header-item flex-1">#</div>
                <div className="strike-products__table-header-item flex-3">{i18n.t('products.product')}</div>
                <div is-responsive="true" className="strike-products__table-header-item flex-3">{i18n.t('products.description')}</div>
                <div className="strike-products__table-header-item flex-15">{i18n.t('products.price')}</div>
                <div is-responsive="true" className="strike-products__table-header-item flex-15 text-center">{i18n.t('products.actions')}</div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem key={index} item={item} deleteProduct={deleteProduct} />
            })}
            <div className="strike-products__showmore">{i18n.t('products.showMore')}</div>
        </div>
    )
}

const TableItem = ({ item, deleteProduct }) => {
    const history = useHistory()
    const { testProduct, threePoints } = images.products;
    const [isOpen, open] = useState(false);
    const toggle = useCallback(() => { open(!isOpen) }, [isOpen]);
    const navigate = useCallback(() => { history.push('/product', { id: item.id }) }, []);
    const edit = useCallback(() => { history.push('/edit-product', { id: item.id }) }, []);
    const deleteProd = useCallback(() => { deleteProduct(item.id) }, []);

    return (
        <div className="strike-products__table-item">
            <div onClick={navigate} className="strike-products__table-item-content flex-1">
                <input type="checkbox" />
            </div>
            <div onClick={navigate} className="strike-products__table-item-content flex-3">
                <img className="strike-products__table-item-content-icon" src={testProduct} />
                <div className="strike-products__table-item-content-text ml-15">{item.name}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-products__table-item-content flex-3">
                <div className="strike-products__table-item-content-text">{item.description}</div>
            </div>
            <div onClick={navigate} className="strike-products__table-item-content flex-15">
                <div className="strike-products__table-item-content-text">{`${item.price}€`}</div>
            </div>
            <div is-responsive="true" onClick={toggle} className="strike-products__table-item-content flex-15 text-center">
                <div className="dropdown">
                    <img className="strike-products__table-item-content-points" src={threePoints} />
                    <div className="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('products.copyLink')}</div>
                        <div onClick={edit} className="dropdown-content-text">{i18n.t('products.edit')}</div>
                        <div onClick={deleteProd} className="dropdown-content-text">{i18n.t('products.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}