import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './customers.scss';
import Context from './Context';
import { useCallback } from 'react';

const TableItem = ({ id, first_name, last_name, phone, address, city, deleteCustomer, item }) => {
    const { selected, setSelected } = useContext(Context);
    const history = useHistory()
    const [checked, setChecked] = useState(item.checked);
    const { threePoints } = images.customers;

    const deleteClient = () => deleteCustomer(id);
    const navigate = useCallback(() => { history.push('/customer', { id }) }, [item.id])
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
        if (iAmSelected.length === 0) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }, [selected])

    return (
        <div className="strike-customers__table-item">
            <div className="strike-customers__table-item-container">
                <input onChange={check} value={checked} checked={checked} className="strike-customers__table-item-container-checkbox" type="checkbox" />
                <div onClick={navigate} className="strike-customers__table-item-container-text">{first_name}</div>
            </div>
            <div onClick={navigate} className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">{last_name}</div>
            </div>
            <div is-responsive="true" onClick={navigate} className="strike-customers__table-item-container">
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
                        <div onClick={deleteClient} className="dropdown-content-text">{i18n.t('customers.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TableItem;