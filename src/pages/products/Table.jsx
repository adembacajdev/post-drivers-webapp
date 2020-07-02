import React, { useContext } from 'react';
import i18n from '../../services/locales/i18n';
import './products.scss';
import TableItem from './TableItem';
import Context from './Context';
import { useCallback } from 'react';

const Table = ({ items, deleteProduct }) => {
    const { selectedAll, selectAll } = useContext(Context);
    const selectAllProducts = useCallback(() => { selectAll(!selectedAll) }, [selectedAll]);
    return (
        <div className="strike-products__table">
            <div className="strike-products__table-header">
                <div className="strike-products__table-header-item flex-1">
                    <input type="checkbox" onChange={selectAllProducts} value={selectedAll} checked={selectedAll} />
                </div>
                <div className="strike-products__table-header-item flex-1">{i18n.t('products.id')}</div>
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