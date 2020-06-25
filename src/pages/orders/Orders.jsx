import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import { getAllOrders, deleteOrder, printOneOrder } from '../../store/actions/orders';
import moment from 'moment';
import { saveAs } from 'file-saver';

const Orders = (props) => {
    const [title, setTitle] = useState(i18n.t('orders.allOrders'))
    const { innerWidth, innerHeight } = window;
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.orders;
    useEffect(() => {
        props.getAllOrders()
        if (props.location.state && props.location.state.title) {
            setTitle(props.location.state.title)
        }
    }, [])

    useEffect(() => {
        if (props.printOrder) {
            saveAs(props.printOrder, 'newFile.pdf')
        }
    }, [props.printOrder]);

    return (
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
                <Table printOne={props.printOneOrder} deleteItem={props.deleteOrder} items={props.allOrders} />
                <div className="strike-orders__pagination">
                    <img src={unfilledLeftArrow} className='strike-orders__pagination-leftarrow' />
                    <div is-active="true" className="strike-orders__pagination-number">1</div>
                    <div className="strike-orders__pagination-number">2</div>
                    <div className="strike-orders__pagination-number">3</div>
                    <div className="strike-orders__pagination-number">4</div>
                    <img src={filledRightArrow} className='strike-orders__pagination-rightArrow' />
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ allOrders, printOrder }) => ({ allOrders, printOrder });
const mapDispatchToProps = { getAllOrders, deleteOrder, printOneOrder };

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
                return <Item printOne={printOne} deleteItem={deleteItem} {...item} key={index} />
            })}
        </div>
    )
}

const Item = ({ id, status, updated_at, deleteItem, price, client, printOne }) => {
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

    const printOrder = () => printOne(id)
    return (
        <div className="strike-orders__table-item">
            <div onClick={navigate} className="strike-orders__table-item-container">
                <input className="strike-orders__table-item-container-checkbox" type="checkbox" />
                <div className="strike-orders__table-item-container-text">{id}</div>
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