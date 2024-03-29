import React from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './style.scss';
import moment from 'moment';
import { useCallback } from 'react';


const TableItem = ({ created_at, email, first_name, last_name, id, phone, deleteUser, is_admin, item }) => {
    const history = useHistory();
    const { threePoints } = images.customers;
    const date = moment(created_at).format('DD/MM/YYYY')
    const deleteUsr = () => deleteUser(id);
    const editUsr = useCallback(() => { history.push('/edit-user', { id }) }, [item.id])
    return (
        <div className="strike-users__table-item">
            <div onClick={editUsr} is-responsive="true" className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{id}</div>
            </div>
            <div onClick={editUsr} className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{first_name}</div>
            </div>
            <div onClick={editUsr} className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{last_name}</div>
            </div>
            <div onClick={editUsr} className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{phone}</div>
            </div>
            <div onClick={editUsr} is-responsive="true" className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{email}</div>
            </div>
            <div onClick={editUsr} is-responsive="true" className="strike-users__table-item-container centered">
                <div className="strike-users__table-item-container-text">{date}</div>
            </div>
            <div onClick={editUsr} is-responsive="true" className="strike-users__table-item-container centered">
                {<div className="strike-users__table-item-container-text">{is_admin ? i18n.t('users.yes') : i18n.t('users.no')}</div>}
            </div>
            <div is-responsive="true" className="strike-users__table-item-container centered">
                <div className="dropdown">
                    <img className="strike-users__table-item-container-dots" src={threePoints} />
                    <div className="dropdown-content">
                        <div onClick={editUsr} className="dropdown-content-text">{i18n.t('users.edit')}</div>
                        <div onClick={deleteUsr} className="dropdown-content-text">{i18n.t('users.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableItem;