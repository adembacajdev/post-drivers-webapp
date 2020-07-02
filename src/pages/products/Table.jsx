import React from 'react';
import i18n from '../../services/locales/i18n';
import './products.scss';
import TableItem from './TableItem';


const Table = ({ items, deleteProduct }) => {
    return (
        <div className="strike-products__table">
            <div className="strike-products__table-header">
                <div className="strike-products__table-header-item flex-1">#</div>
                <div className="strike-products__table-header-item flex-3">{i18n.t('products.product')}</div>
                <div is-responsive="true" className="strike-products__table-header-item flex-3">{i18n.t('products.description')}</div>
                <div className="strike-products__table-header-item flex-15">{i18n.t('products.price')}</div>
                <div is-responsive="false" className="strike-products__table-header-item flex-15 text-center">{i18n.t('products.actions')}</div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem key={index} item={item} deleteProduct={deleteProduct} />
            })}
        </div>
    )
}

export default Table;