import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './customers.scss';
import { getAllCustomers, deleteCustomer } from '../../store/actions/customers';
import { useEffect, useState, useCallback } from 'react';

const Customers = (props) => {
    const [customers, setCustomers] = useState(props.allCustomers);
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;
    useEffect(() => { props.getAllCustomers(5, 1) }, []);

    useEffect(() => { setCustomers(props.allCustomers); }, [props.allCustomers]);

    const nextPage = useCallback(() => { if (customers.hasNextPage) props.getAllCustomers(5, customers.currentPage + 1) }, [customers]);
    const prevPage = useCallback(() => { if (customers.hasPrevPage) props.getAllCustomers(5, customers.currentPage - 1) }, [customers]);
    const number = useCallback((page) => { props.getAllCustomers(5, page) }, [customers]);
    return (
        <Wrapper>
            <div className="strike-customers">
                <div className="strike-customers__header">
                    <div className="strike-customers__header-left">
                        <div className="strike-customers__header-left-text">{i18n.t('customers.allCustomers')}</div>
                    </div>
                    <div className="strike-customers__header-right">
                        <img className="strike-customers__header-right-icon" src={infoIcon} />
                    </div>
                </div>
                <Table deleteCustomer={props.deleteCustomer} items={customers.data} />
                <div className="strike-customers__pagination">
                    <img onClick={prevPage} src={customers.hasPrevPage ? filledLeftArrow : unfilledLeftArrow} className='strike-customers__pagination-leftarrow' />
                    {customers && customers.lastPage.map(item => {
                        return <div onClick={() => number(item)} is-active={item === customers.currentPage ? 'true' : 'false'} key={item} className="strike-customers__pagination-number">{item}</div>
                    })}
                    <img onClick={nextPage} src={customers.hasNextPage ? filledRightArrow : unfilledRightArrow} className='strike-customers__pagination-rightarrow' />
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ allCustomers }) => ({ allCustomers });
const mapDispatchToProps = { getAllCustomers, deleteCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers));


const Table = ({ items, deleteCustomer }) => {
    const { tableArrow } = images.customers;
    return (
        <div className="strike-customers__table">
            <div className="strike-customers__table-header">
                <div is-responsive="true" className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.id')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.firstName')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.lastName')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.phone')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.address')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.city')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.actions')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <Item deleteCustomer={deleteCustomer} key={index} {...item} />
            })}
        </div>
    )
}

const Item = ({ id, first_name, last_name, phone, address, city, deleteCustomer }) => {
    const history = useHistory()
    const { threePoints } = images.customers;
    const deleteClient = () => deleteCustomer(id);
    const navigate = () => history.push('/customer', {id});
    return (
        <div className="strike-customers__table-item">
            <div onClick={navigate} is-responsive="true" className="strike-customers__table-item-container">
                <input className="strike-customers__table-item-container-checkbox" type="checkbox" />
                <div className="strike-customers__table-item-container-text">{id}</div>
            </div>
            <div onClick={navigate} className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">{first_name}</div>
            </div>
            <div onClick={navigate} className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">{last_name}</div>
            </div>
            <div onClick={navigate} className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">{phone}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">{address}</div>
            </div>
            <div onClick={navigate} className="strike-customers__table-item-container centered">
                <div className="strike-customers__table-item-container-text">{city}</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container centered">
                <div className="dropdown">
                    <img className="strike-customers__table-item-container-dots" src={threePoints} />
                    <div className="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('customers.openLocation')}</div>
                        <div onClick={deleteClient} className="dropdown-content-text">{i18n.t('customers.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}