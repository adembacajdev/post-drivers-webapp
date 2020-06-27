import React, { useEffect, useState, createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import { getAllOrders, deleteOrder, printOneOrder, getOrdersPaginated, searchOrders, printSelectedOrders, deleteOrders } from '../../store/actions/orders';
import moment from 'moment';
import { saveAs } from 'file-saver';
import { useCallback } from 'react';
import { useForm } from "react-hook-form";
const Context = createContext(null);


const Orders = (props) => {
    const [title, setTitle] = useState(i18n.t('orders.allOrders'));
    const [orders, setOrders] = useState(props.ordersPaginated);
    const [selected, setSelected] = useState([]);
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.orders;

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ type, search }) => {
        props.searchOrders(type, search)
    };
    useEffect(() => {
        props.getOrdersPaginated(5, 1)
        if (props.location.state && props.location.state.title) setTitle(props.location.state.title);
    }, [])

    useEffect(() => { if (props.printOrder) saveAs(props.printOrder); }, [props.printOrder]);

    useEffect(() => { setOrders(props.ordersPaginated); }, [props.ordersPaginated]);
    
    const deleteSelectedOrders = () => props.deleteOrders(selected);
    const printSelectedOrd = () => props.printSelectedOrders(selected);

    const nextPage = useCallback(() => { if (orders.hasNextPage) props.getOrdersPaginated(5, orders.currentPage + 1) }, [orders]);
    const prevPage = useCallback(() => { if (orders.hasPrevPage) props.getOrdersPaginated(5, orders.currentPage - 1) }, [orders]);
    const number = useCallback((page) => { props.getOrdersPaginated(5, page) }, [orders]);

    return (
        <Context.Provider value={{ selected, setSelected }}>
            <Wrapper>
                <div className="strike-orders">
                    <div className="strike-orders__header">
                        <div className="strike-orders__header-left">
                            <div className="strike-orders__header-left-text">{title}</div>
                        </div>
                        <div className="strike-orders__header-right">
                            <img className="strike-orders__header-right-icon" src={infoIcon} />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="strike-orders__search">
                        <select name="type" ref={register({ required: true })} className="strike-orders__search-select">
                            <option value="serial_number">{i18n.t('orders.serialNumber')}</option>
                            <option value="customer_name">{i18n.t('orders.customerName')}</option>
                            <option value="city">{i18n.t('orders.city')}</option>
                            <option value="status">{i18n.t('orders.status')}</option>
                            <option value="date">{i18n.t('orders.date')}</option>
                        </select>
                        <input name="search" ref={register({ required: true })} placeholder={i18n.t('orders.searchPlaceholder')} className="strike-orders__search-input" />
                        <button type="submit" className="strike-orders__search-button">{i18n.t('orders.search')}</button>
                    </form>
                    <Table printOne={props.printOneOrder} deleteItem={props.deleteOrder} items={orders.data} />
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

const mapStateToProps = ({ allOrders, printOrder, ordersPaginated }) => ({ allOrders, printOrder, ordersPaginated });
const mapDispatchToProps = { getAllOrders, deleteOrder, printOneOrder, getOrdersPaginated, searchOrders, printSelectedOrders, deleteOrders };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));


const Table = ({ items, deleteItem, printOne }) => {
    const { tableArrow } = images.orders;
    return (
        <div className="strike-orders__table">
            <div className="strike-orders__table-header">
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.id')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.status')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.unitedPrice')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.date')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.time')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.customerName')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item centered">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.city')}</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-orders__table-header-item centered">
                    <div className="strike-orders__table-header-item-text">{i18n.t('orders.actions')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <Item item={item} printOne={printOne} deleteItem={deleteItem} {...item} key={index} />
            })}
        </div>
    )
}

const Item = ({ id, serial_number, status, updated_at, deleteItem, price, client, printOne, item }) => {
    const { selected, setSelected } = useContext(Context);
    const [checked, setChecked] = useState(item.checked)
    const history = useHistory();
    const { threePoints } = images.orders;
    const date = moment(updated_at).format('DD/MM/YYYY');
    const time = moment(updated_at).format('HH:mm:ss');
    let newStatus;
    if (status === 'archived:completed') newStatus = 'completed';
    else if (status === 'archived:ongoing') newStatus = 'ongoing';
    else if (status === 'archived:cancelled') newStatus = 'cancelled';
    else if (status === 'archived:pending') newStatus = 'pending';
    else newStatus = status;
    const deleteThisItem = () => deleteItem(id);
    const navigate = () => history.push('/order', { id })
    const printOrder = () => printOne(id);
    const check = () => setChecked(!checked);
    useEffect(() => {
        if (checked) setSelected([...selected, id])
        else if (!checked) {
            const deletedCheck = selected.filter(el => el !== id);
            setSelected(deletedCheck);
        }
    }, [checked])
    return (
        <div className="strike-orders__table-item">
            <div className="strike-orders__table-item-container">
                <input onChange={check} value={checked} checked={checked} className="strike-orders__table-item-container-checkbox" type="checkbox" />
                <div className="strike-orders__table-item-container-text">{serial_number}</div>
            </div>
            <div onClick={navigate} className="strike-orders__table-item-container">
                <div className={newStatus} />
                <div className="strike-orders__table-item-container-text">{newStatus}</div>
            </div>
            <div onClick={navigate} className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">{price}€</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">{date}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">{time}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">{client.first_name}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-orders__table-item-container centered">
                <div className="strike-orders__table-item-container-text">{client.city}</div>
            </div>
            <div is-responsive="true" className="strike-orders__table-item-container centered">
                <div className="dropdown">
                    <img className="strike-orders__table-item-container-dots" src={threePoints} />
                    <div className="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('orders.openLocation')}</div>
                        <div className="dropdown-content-text">{i18n.t('orders.share')}</div>
                        <div onClick={printOrder} className="dropdown-content-text">{i18n.t('orders.print')}</div>
                        <div onClick={deleteThisItem} className="dropdown-content-text">{i18n.t('orders.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}