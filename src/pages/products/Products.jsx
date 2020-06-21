import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './products.scss';

const Products = (props) => {
    return (
        <Wrapper>
            <div className="strike-products">
                <div className="strike-products__header">
                    <div className="strike-products__header-title">{i18n.t('products.topProducts')}</div>
                </div>
                <Table items={[1, 2, 3, 4]} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));

const Table = ({ items }) => {

    return (
        <div className="strike-products__table">
            <div className="strike-products__table-header">
                <div className="strike-products__table-header-item flex-1">#</div>
                <div className="strike-products__table-header-item flex-3">{i18n.t('products.product')}</div>
                <div className="strike-products__table-header-item flex-45">{i18n.t('products.description')}</div>
                <div className="strike-products__table-header-item flex-15">{i18n.t('products.price')}</div>
                <div is-action="true" className="strike-products__table-header-item flex-15 text-center">{i18n.t('products.actions')}</div>
            </div>
            {items && items.map(item => {
                return <TableItem item={item} />
            })}
            <div className="strike-products__showmore">{i18n.t('products.showMore')}</div>
        </div>
    )
}

const TableItem = ({ item }) => {
    const { testProduct, threePoints } = images.products;
    const [isOpen, open] = useState(false);
    const toggle = useCallback(() => { open(!isOpen) }, [isOpen]);

    return (
        <div className="strike-products__table-item">
            <div className="strike-products__table-item-content flex-1">
                <input type="checkbox" />
            </div>
            <div className="strike-products__table-item-content flex-3">
                <img className="strike-products__table-item-content-icon" src={testProduct} />
                <div className="strike-products__table-item-content-text ml-15">Women's Vintage Peacoat</div>
            </div>
            <div className="strike-products__table-item-content flex-45">
                <div className="strike-products__table-item-content-text">Women's Vintage Peacoat</div>
            </div>
            <div className="strike-products__table-item-content flex-15">
                <div className="strike-products__table-item-content-text">$29.192</div>
            </div>
            <div is-action="true" onClick={toggle} className="strike-products__table-item-content flex-15 text-center">
                <div class="dropdown">
                    <img className="strike-products__table-item-content-points" src={threePoints} />
                    <div class="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('products.copyLink')}</div>
                        <div className="dropdown-content-text">{i18n.t('products.edit')}</div>
                        <div className="dropdown-content-text">{i18n.t('products.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}