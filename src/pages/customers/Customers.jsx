import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './customers.scss';
import { getAllCustomers, deleteCustomer, searchCustomers, deleteCustomers } from '../../store/actions/customers';
import { useForm } from "react-hook-form";
import Context from './Context';
import Table from './Table';

const Customers = (props) => {
    const [customers, setCustomers] = useState(props.allCustomers);
    const [selected, setSelected] = useState([]);
    const [selectedAll, selectAll] = useState(false)
    const { filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;

    const { register, handleSubmit } = useForm();
    const onSubmit = ({ type, search }) => { props.searchCustomers(type, search) };

    useEffect(() => { props.getAllCustomers(10, 1) }, []);
    useEffect(() => { if (props.deletedCustomer) { window.location.reload() } }, [props.deletedCustomer])
    useEffect(() => {
        setCustomers(props.allCustomers);
        selectAll(false);
        setSelected([])
    }, [props.allCustomers]);
    useEffect(() => {
        if (selectedAll) {
            let newArray = [];
            customers.data.forEach(elem => {
                newArray.push(elem.id)
            })
            setSelected(newArray)
        } else { setSelected([]) }
    }, [selectedAll])

    const deleteSelectedCustomers = () => {
        props.deleteCustomers(selected);
        selectAll(false);
        setSelected([])
    }

    const nextPage = useCallback(() => { if (customers.hasNextPage) props.getAllCustomers(10, customers.currentPage + 1) }, [customers]);
    const prevPage = useCallback(() => { if (customers.hasPrevPage) props.getAllCustomers(10, customers.currentPage - 1) }, [customers]);
    const number = useCallback((page) => { props.getAllCustomers(10, page) }, [customers]);
    return (
        <Context.Provider value={{ selected, setSelected, selectedAll, selectAll }}>
            <Wrapper>
                <div className="strike-customers">
                    <div className="strike-customers__header">
                        <div className="strike-customers__header-left">
                            <div className="strike-customers__header-left-text">{i18n.t('customers.allCustomers')}</div>
                        </div>
                        <div className="strike-customers__header-right">
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="strike-customers__search">
                        <select name="type" ref={register({ required: true })} className="strike-customers__search-select">
                            <option value="name">{i18n.t('customers.name')}</option>
                            <option value="phone">{i18n.t('customers.phone')}</option>
                            <option value="city">{i18n.t('customers.city')}</option>
                        </select>
                        <input name="search" ref={register({ required: true })} placeholder={i18n.t('customers.searchPlaceholder')} className="strike-customers__search-input" />
                        <button type="submit" className="strike-customers__search-button">{i18n.t('customers.search')}</button>
                    </form>
                    <Table deleteCustomer={props.deleteCustomer} items={customers.data} />
                    <div className="strike-customers__pagination">
                        <img onClick={prevPage} src={customers.hasPrevPage ? filledLeftArrow : unfilledLeftArrow} className='strike-customers__pagination-leftarrow' />
                        {customers && customers.lastPage.map(item => {
                            return <div onClick={() => number(item)} is-active={item === customers.currentPage ? 'true' : 'false'} key={item} className="strike-customers__pagination-number">{item}</div>
                        })}
                        <img onClick={nextPage} src={customers.hasNextPage ? filledRightArrow : unfilledRightArrow} className='strike-customers__pagination-rightarrow' />
                    </div>
                    <button onClick={deleteSelectedCustomers} disabled={selected.length ? false : true} className="strike-customers__delete-selected">{i18n.t('customers.deleteCustomers')}</button>
                </div>
            </Wrapper>
        </Context.Provider>
    )
}

const mapStateToProps = ({ allCustomers, deletedCustomer }) => ({ allCustomers, deletedCustomer });
const mapDispatchToProps = { getAllCustomers, deleteCustomer, searchCustomers, deleteCustomers };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers));