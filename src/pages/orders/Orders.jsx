import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import {
    getAllOrders, deleteOrder, printOneOrder, getOrdersPaginated, searchOrders, printSelectedOrders, deleteOrders
} from '../../store/actions/orders';
import { useForm } from "react-hook-form";
import Context from './Context';
import Table from './Table';
import moment from 'moment';

const Orders = (props) => {
    const [title, setTitle] = useState(i18n.t('orders.allOrders'));
    const [orders, setOrders] = useState(props.ordersPaginated);
    const [selected, setSelected] = useState([]);
    const [selectedAll, selectAll] = useState(false)
    const [searchSelect, setSearchSelect] = useState('serial_number');
    const { filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.orders;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = ({ type, search }) => { props.searchOrders(type, search); };

    useEffect(() => {
        props.getOrdersPaginated(10, 1)
        if (props.location.state && props.location.state.title) setTitle(props.location.state.title);
    }, [])
    useEffect(() => { if (props.deletedOrder) window.location.reload() }, [props.deletedOrder])
    useEffect(() => {
        setOrders(props.ordersPaginated);
        selectAll(false);
        setSelected([])
    }, [props.ordersPaginated]);
    useEffect(() => {
        if (selectedAll) {
            let newArray = [];
            orders.data.forEach(elem => {
                newArray.push(elem.id)
            })
            setSelected(newArray)
        } else {
            setSelected([])
        }
    }, [selectedAll])

    const deleteSelectedOrders = () => {
        props.deleteOrders(selected);
        selectAll(false);
        setSelected([]);
    }
    const printSelectedOrd = () => {
        const stringSelected = JSON.stringify(selected);
        localStorage.setItem('printMultiple', stringSelected);
        window.open(`http://${window.location.host}/print/multiple`, 'Print Orders') //this should be https://
    }

    const nextPage = useCallback(() => { if (orders.hasNextPage) props.getOrdersPaginated(10, orders.currentPage + 1) }, [orders]);
    const prevPage = useCallback(() => { if (orders.hasPrevPage) props.getOrdersPaginated(10, orders.currentPage - 1) }, [orders]);
    const number = useCallback((page) => { props.getOrdersPaginated(10, page) }, [orders]);

    const handleSearchSelect = useCallback((e) => { setSearchSelect(e.target.value) }, [searchSelect])

    return (
        <Context.Provider value={{ selected, setSelected, selectedAll, selectAll }}>
            <Wrapper>
                <div className="strike-orders">
                    <div className="strike-orders__header">
                        <div className="strike-orders__header-left">
                            <div className="strike-orders__header-left-text">{title}</div>
                        </div>
                        <div className="strike-orders__header-right">
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="strike-orders__search">
                        <select defaultValue={searchSelect} onChange={handleSearchSelect} name="type" ref={register({ required: true })} className="strike-orders__search-select">
                            <option value="serial_number">{i18n.t('orders.serialNumber')}</option>
                            <option value="customer_name">{i18n.t('orders.customerName')}</option>
                            <option value="city">{i18n.t('orders.city')}</option>
                            <option value="status">{i18n.t('orders.status')}</option>
                            <option value="date">{i18n.t('orders.date')}</option>
                        </select>
                        <input defaultValue={searchSelect === 'date' ? moment().format('yyyy-MM-DD') : ''} type={searchSelect === 'date' ? 'date' : 'text'} name="search" ref={register({ required: true })} placeholder={i18n.t('orders.searchPlaceholder')} className="strike-orders__search-input" />
                        <button type="submit" className="strike-orders__search-button">{i18n.t('orders.search')}</button>
                    </form>
                    <Table printOne={props.printOneOrder} deleteItem={props.deleteOrder} items={orders?.data} />
                    <div className="strike-orders__pagination">
                        <img onClick={prevPage} src={orders.hasPrevPage ? filledLeftArrow : unfilledLeftArrow} className='strike-orders__pagination-leftarrow' />
                        {orders && orders.lastPage.map(item => {
                            return <div onClick={() => number(item)} is-active={item === orders.currentPage ? 'true' : 'false'} key={item} className="strike-orders__pagination-number">{item}</div>
                        })}
                        <img onClick={nextPage} src={orders.hasNextPage ? filledRightArrow : unfilledRightArrow} className='strike-orders__pagination-rightarrow' />
                    </div>
                    <div className="strike-orders__footerbuttons">
                        <button onClick={deleteSelectedOrders} disabled={selected.length ? false : true} className="strike-orders__delete-selected">{i18n.t('orders.deleteOrders')}</button>
                        <button onClick={printSelectedOrd} disabled={selected.length ? false : true} className="strike-orders__print-selected">{i18n.t('orders.printSelected')}</button>
                    </div>
                </div>
            </Wrapper>
        </Context.Provider>
    )
}

const mapStateToProps = ({
    allOrders, ordersPaginated, deletedOrder, printOrder
}) => ({
    allOrders, ordersPaginated, deletedOrder, printOrder
});
const mapDispatchToProps = {
    getAllOrders, deleteOrder, printOneOrder, getOrdersPaginated, searchOrders, printSelectedOrders, deleteOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));