import React, { useState, useCallback, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './products.scss';
import Context from './Context';
import config from '../../config';
import copy from "copy-to-clipboard";
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

const TableItem = ({ item, deleteProduct }) => {
    let host = window.location.host;
    const { selected, setSelected, selectedAll } = useContext(Context);
    const history = useHistory();
    const { threePoints } = images.products;

    const [copyText, setCopyText] = useState(`${host}/add-order/${item.id}`)
    const [checked, setChecked] = useState(item.checked)
    const [isOpen, open] = useState(false);

    const toggle = useCallback(() => { open(!isOpen) }, [isOpen]);
    const edit = useCallback(() => { history.push('/edit-product', { id: item.id }) }, [item.id]);
    const deleteProd = useCallback(() => { deleteProduct(item.id) }, []);
    const check = () => setChecked(!checked);
    const copyLink = () => {
        toast.notify('Link copied!', { position: 'bottom-right' });
        copy(copyText);
    }
    const addOrder = () => history.push('/add-order-by-shop', { id: item.id })

    useEffect(() => {
        if (checked) setSelected([...selected, item.id])
        else if (!checked) {
            const deletedCheck = selected.filter(el => el !== item.id);
            setSelected(deletedCheck);
        }
    }, [checked]);

    useEffect(() => {
        const iAmSelected = selected.filter(el => el === item.id);
        if (iAmSelected.length === 0) {
            setChecked(false)
        } else {
            setChecked(true);
        }
    }, [selected])

    return (
        <div className="strike-products__table-item">
            <div className="strike-products__table-item-content flex-1">
                <input type="checkbox" onChange={check} value={checked} checked={checked} />
            </div>
            <div onClick={edit} className="strike-products__table-item-content flex-1">
                <div className="strike-products__table-item-content-text">{item.id}</div>
            </div>
            <div onClick={edit} className="strike-products__table-item-content flex-3">
                <div className="strike-products__table-item-content-text ml-15">{item.name}</div>
            </div>
            <div onClick={edit} is-responsive="true" className="strike-products__table-item-content flex-3">
                <div className="strike-products__table-item-content-text">{item.description}</div>
            </div>
            <div onClick={edit} className="strike-products__table-item-content flex-15">
                <div className="strike-products__table-item-content-text">{`${item.ks_price}€`}</div>
            </div>
            <div is-responsive="true" onClick={toggle} className="strike-products__table-item-content flex-15 text-center">
                <div className="dropdown">
                    <img className="strike-products__table-item-content-points" src={threePoints} />
                    <div id="dropdown-content" className="dropdown-content">
                        <div onClick={copyLink} className="dropdown-content-text">{i18n.t('products.copyLink')}</div>
                        <div onClick={edit} className="dropdown-content-text">{i18n.t('products.edit')}</div>
                        <div onClick={addOrder} className="dropdown-content-text">{i18n.t('products.addOrder')}</div>
                        <div onClick={deleteProd} className="dropdown-content-text">{i18n.t('products.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableItem;