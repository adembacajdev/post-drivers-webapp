import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import './products.scss';

const Products = (props) => {
    return (
        <Wrapper>
            <div className="strike-products">
                <div className="strike-products__header">
                    <div className="strike-products__header-title">Top Products</div>
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
                <div className="strike-products__table-header-item flex-3">PRODUCT</div>
                <div className="strike-products__table-header-item flex-3">DESCRIPTION</div>
                <div className="strike-products__table-header-item flex-15">PRICE</div>
                <div className="strike-products__table-header-item flex-15 text-center">ACTIONS</div>
            </div>
            {items && items.map(item => {
                return <TableItem item={item} />
            })}
            <div className="strike-products__showmore">Show more</div>
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
                <div className="strike-products__table-item-content-text">{item}</div>
            </div>
            <div className="strike-products__table-item-content flex-3">
                <img className="strike-products__table-item-content-icon" src={testProduct} />
                <div className="strike-products__table-item-content-text ml-15">Women's Vintage Peacoat</div>
            </div>
            <div className="strike-products__table-item-content flex-3">
                <div className="strike-products__table-item-content-text">Women's Vintage Peacoat</div>
            </div>
            <div className="strike-products__table-item-content flex-15">
                <div className="strike-products__table-item-content-text">$29.192</div>
            </div>
            <div onClick={toggle} className="strike-products__table-item-content flex-15 text-center">
                <div class="dropdown">
                    <img className="strike-products__table-item-content-points" src={threePoints} />
                    <div class="dropdown-content">
                        <div className="dropdown-content-text">Copy link</div>
                        <div className="dropdown-content-text">Edit</div>
                        <div className="dropdown-content-text">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}