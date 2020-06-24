import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import { getAllOrders, deleteOrder } from '../../store/actions/orders';
import moment from 'moment';

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

    useEffect(() => { console.log('allOrders', props.allOrders) }, [props.allOrders])
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
                <Table deleteItem={props.deleteOrder} items={props.allOrders} />
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

const mapStateToProps = ({ allOrders }) => ({ allOrders });
const mapDispatchToProps = { getAllOrders, deleteOrder };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));


const Table = ({ items, deleteItem }) => {
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
                return <Item deleteItem={deleteItem} {...item} key={index} />
            })}
        </div>
    )
}

const Item = ({ id, description, product_id, serial_number, status, updated_at, client_id, deleteItem }) => {
    const history = useHistory();
    const { threePoints } = images.orders;
    const date = moment(updated_at).format('DD/MM/YYYY');
    let newStatus = status === 'archived:completed' ? 'completed' : status === 'archived:cancelled' ? 'cancelled' : status;
    const deleteThisItem = () => deleteItem(id);
    return (
        <div className="strike-orders__table-item">
            <div className="strike-orders__table-item-container">
                <input className="strike-orders__table-item-container-checkbox" type="checkbox" />
                <div className="strike-orders__table-item-container-text">{id}</div>
            </div>
            <div className="strike-orders__table-item-container">
                <div className="cancelled" />
                <div className="strike-orders__table-item-container-text">{newStatus}</div>
            </div>
            <div className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">5.23</div>
            </div>
            <div is-responsive="true" className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">{date}</div>
            </div>
            <div is-responsive="true" className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">Time</div>
            </div>
            <div is-responsive="true" className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">{client_id}</div>
            </div>
            <div is-responsive="true" className="strike-orders__table-item-container centered">
                <div className="strike-orders__table-item-container-text">Prishtine</div>
            </div>
            <div is-responsive="true" className="strike-orders__table-item-container centered">
                <div className="dropdown">
                    <img className="strike-orders__table-item-container-dots" src={threePoints} />
                    <div className="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('orders.openLocation')}</div>
                        <div className="dropdown-content-text">{i18n.t('orders.share')}</div>
                        <div className="dropdown-content-text">{i18n.t('orders.print')}</div>
                        <div onClick={deleteThisItem} className="dropdown-content-text">{i18n.t('orders.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}