import React from 'react';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './customers.scss';
import TableItem from './TableItem';

const Table = ({ items, deleteCustomer }) => {
    const { tableArrow } = images.customers;
    return (
        <div className="strike-customers__table">
            <div className="strike-customers__table-header">
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.firstName')}</div>
                    <img className="strike-customers__table-header-item-icon responsive" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.lastName')}</div>
                    <img className="strike-customers__table-header-item-icon responsive" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.phone')}</div>
                    <img className="strike-customers__table-header-item-icon responsive" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.address')}</div>
                    <img className="strike-customers__table-header-item-icon responsive" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.city')}</div>
                    <img className="strike-customers__table-header-item-icon responsive" src={tableArrow} />
                </div>
                <div is-responsive="false" className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.actions')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem item={item} deleteCustomer={deleteCustomer} key={index} {...item} />
            })}
        </div>
    )
}

export default Table;