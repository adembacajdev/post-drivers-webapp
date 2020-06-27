import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './customers.scss';
import { getAllCustomers, deleteCustomer, searchCustomers, deleteCustomers } from '../../store/actions/customers';
import { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { useForm } from "react-hook-form";
const Context = createContext(null);

const Customers = (props) => {
    const [customers, setCustomers] = useState(props.allCustomers);
    const [selected, setSelected] = useState([]);
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ type, search }) => {
        props.searchCustomers(type, search)
    };
    useEffect(() => { props.getAllCustomers(5, 1) }, []);

    useEffect(() => { setCustomers(props.allCustomers); }, [props.allCustomers]);
    const deleteSelectedCustomers = () => props.deleteCustomers(selected)

    const nextPage = useCallback(() => { if (customers.hasNextPage) props.getAllCustomers(5, customers.currentPage + 1) }, [customers]);
    const prevPage = useCallback(() => { if (customers.hasPrevPage) props.getAllCustomers(5, customers.currentPage - 1) }, [customers]);
    const number = useCallback((page) => { props.getAllCustomers(5, page) }, [customers]);
    return (
        <Context.Provider value={{ selected, setSelected }}>
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

const mapStateToProps = ({ allCustomers }) => ({ allCustomers });
const mapDispatchToProps = { getAllCustomers, deleteCustomer, searchCustomers, deleteCustomers };

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
                return <Item item={item} deleteCustomer={deleteCustomer} key={index} {...item} />
            })}
        </div>
    )
}

const Item = ({ id, first_name, last_name, phone, address, city, deleteCustomer, item }) => {
    const { selected, setSelected } = useContext(Context);
    const [checked, setChecked] = useState(item.checked)
    const history = useHistory()
    const { threePoints } = images.customers;
    const deleteClient = () => deleteCustomer(id);
    const navigate = () => history.push('/customer', { id });
    const check = () => setChecked(!checked);
    useEffect(() => {
        if (checked) setSelected([...selected, id])
        else if (!checked) {
            const deletedCheck = selected.filter(el => el !== id);
            setSelected(deletedCheck);
        }
    }, [checked])
    return (
        <div className="strike-customers__table-item">
            <div is-responsive="true" className="strike-customers__table-item-container">
                <input onChange={check} value={checked} checked={checked} className="strike-customers__table-item-container-checkbox" type="checkbox" />
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