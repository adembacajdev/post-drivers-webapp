import React from 'react';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import TableItem from './TableItem';
import Context from './Context';
import { useContext, useCallback } from 'react';

const Table = ({ items, deleteItem, printOne }) => {
    const { selectedAll, selectAll } = useContext(Context);
    const { tableArrow } = images.orders;
    const selectAllOrders = useCallback(() => { selectAll(!selectedAll) }, [selectedAll]);
    return (
        <div className="strike-orders__table">
            <div className="strike-orders__table-header">
                <div className="strike-orders__table-header-item">
                    <input type="checkbox" onChange={selectAllOrders} value={selectedAll} checked={selectedAll} />
                    <div style={{marginLeft: 15}} className="strike-orders__table-header-item-text">{i18n.t('orders.serialNumber')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.status')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.unitedPrice')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.date')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.time')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.customerName')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item centered">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.city')}</div>
                    {/* <img className="strike-orders__table-header-item-icon" src={tableArrow} /> */}
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item centered">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.actions')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem item={item} printOne={printOne} deleteItem={deleteItem} {...item} key={index} />
            })}
        </div>
    )
}

export default Table