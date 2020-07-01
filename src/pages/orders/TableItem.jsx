import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './orders.scss';
import moment from 'moment';
import Context from './Context';

const TableItem = ({ id, serial_number, status, updated_at, deleteItem, price, client, printOne, item }) => {
    const { selected, setSelected } = useContext(Context);
    const [checked, setChecked] = useState(false)
    const history = useHistory();
    const { threePoints } = images.orders;
    const date = moment(updated_at).format('DD/MM/YYYY');
    const time = moment(updated_at).format('HH:mm:ss');
    let newStatus;
    if (status === 'archived:completed') newStatus = 'archived';
    else if (status === 'archived:ongoing') newStatus = 'archived';
    else if (status === 'archived:cancelled') newStatus = 'archived';
    else if (status === 'archived:pending') newStatus = 'archived';
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
    }, [checked]);

    useEffect(() => {
        const iAmSelected = selected.filter(item => item === id);
        if(iAmSelected.length === 0){
            setChecked(false)
        }
    }, [selected])
    return (
        <div className="strike-orders__table-item">
            <div className="strike-orders__table-item-container">
                <input onChange={check} value={checked} checked={checked} className="strike-orders__table-item-container-checkbox" type="checkbox" />
                <div className="strike-orders__table-item-container-text">{serial_number}</div>
            </div>
            <div onClick={navigate} className="strike-orders__table-item-container">
                <div className={newStatus} />
                <div className="strike-orders__table-item-container-text">{status}</div>
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
            <div is-responsive="false" className="strike-orders__table-item-container centered">
                <div className="dropdown">
                    <img className="strike-orders__table-item-container-dots" src={threePoints} />
                    <div className="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('orders.openLocation')}</div>
                        <div onClick={printOrder} className="dropdown-content-text">{i18n.t('orders.print')}</div>
                        <div onClick={deleteThisItem} className="dropdown-content-text">{i18n.t('orders.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableItem;