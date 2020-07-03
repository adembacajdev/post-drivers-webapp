import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import { getOrderByStatus, printOneOrder, deleteOrder, printSelectedOrders, deleteOrders } from '../../store/actions/orders';
import { saveAs } from 'file-saver';
import Table from './Table';
import Context from './Context';

const OrdersByStatus = (props) => {
    const { infoIcon } = images.orders;
    const [title, setTitle] = useState(i18n.t('orders.allOrders'));
    const [orders, setOrders] = useState(props.ordersByStatus);
    const [selected, setSelected] = useState([]);
    const [selectedAll, selectAll] = useState(false)

    useEffect(() => {
        if (props.location.state && props.location.state.title) {
            setTitle(props.location.state.title);
            props.getOrderByStatus(props.location.state.slug);
        }
    }, [])

    useEffect(() => { if (props.printOrder) saveAs(props.printOrder, 'newFile.pdf'); }, [props.printOrder]);

    useEffect(() => { 
        setOrders(props.ordersByStatus)
        selectAll(false);
        setSelected([])
     }, [props.ordersByStatus]);

    const deleteSelectedOrders = () => {
        props.deleteOrders(selected, props.location.state.slug);
        setSelected([])
        selectAll(false);
    }
    const printSelectedOrd = () => props.printSelectedOrders(selected);

    useEffect(() => {
        if (selectedAll && props.ordersByStatus) {
            let newArray = [];
            props.ordersByStatus.forEach(elem => {
                newArray.push(elem.id)
            })
            setSelected(newArray)
        }else{
            setSelected([])
        }
    }, [selectedAll])
    return (
        <Context.Provider value={{ selected, setSelected, selectAll, selectedAll }}>
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
                    <Table printOne={props.printOneOrder} deleteItem={props.deleteOrder} items={orders} />
                    <div className="strike-orders__footerbuttons">
                        <button onClick={deleteSelectedOrders} disabled={selected.length ? false : true} className="strike-orders__delete-selected">{i18n.t('orders.deleteOrders')}</button>
                        <button onClick={printSelectedOrd} disabled={selected.length ? false : true} className="strike-orders__print-selected">{i18n.t('orders.printSelected')}</button>
                    </div>
                </div>
            </Wrapper>
        </Context.Provider>
    )
}

const mapStateToProps = ({ printOrder, ordersPaginated, ordersByStatus }) => ({ printOrder, ordersPaginated, ordersByStatus });
const mapDispatchToProps = { deleteOrder, printOneOrder, getOrderByStatus, deleteOrders, printSelectedOrders };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersByStatus))