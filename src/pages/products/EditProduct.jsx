import React, { useEffect, useState, useCallback } from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { useForm } from "react-hook-form";
import { updateProduct, getProduct, deleteProduct } from '../../store/actions/products';
import copy from "copy-to-clipboard";
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

const EditProduct = (props) => {
    let host = window.location.host;
    const [copyText, setCopyText] = useState(`${host}/add-order/${props.location.state.id}`)
    const [data, setData] = useState({ name: '', decription: '', size: '', openable: '', ks_price: '', al_price: '', mk_price: '' })
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ name, description, size, ks_price, al_price, mk_price, openable }) => {
        const { id } = props.location.state;
        if (name !== '' && description !== '' && size !== '' && ks_price !== '' && al_price !== '' && mk_price !== '' && openable !== '') {
            props.updateProduct({ name: name, description, size, ks_price, al_price, mk_price, openable, id, history: props.history });
        }
    };

    useEffect(() => { props.getProduct(props.location.state.id) }, [])
    useEffect(() => { setData(props.product) }, [props.product]);

    const handleSelect = (e) => setData({ ...data, size: e.target.value });
    const handleOpenable = (e) => setData({ ...data, openable: e.target.value });
    const delProduct = useCallback(() => {
        props.deleteProduct(props.location.state.id);
        props.history.goBack();
    }, [])

    const copyLink = () => {
        toast.notify('Link copied!', { position: 'bottom-right' });
        copy(copyText);
    }

    const addOrder = () => props.history.push('/add-order-by-shop', { id: props.location.state.id })

    return (
        <Wrapper>
            <div className="strike-addproduct">
                <div className="strike-addproduct__title">{i18n.t('addProductForm.editProduct')}</div>
                <div className="strike-addproduct__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.productId')}</div>
                        <input disabled defaultValue={data && data.id} has-error={errors.product_id ? 'true' : 'false'} name="product_id" ref={register({ required: false })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.productId')} />
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.name')}</div>
                        <input defaultValue={data && data.name} has-error={errors.name ? 'true' : 'false'} name="name" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.name')} />
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.description')}</div>
                        <input defaultValue={data && data.description} has-error={errors.description ? 'true' : 'false'} name="description" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.description')} />
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.price')}</div>
                        <div className="strike-addproduct__form-input-multiple">
                            <div className="strike-addproduct__form-input-multiple-item">
                                <div className="strike-addproduct__form-input-multiple-item-label">{i18n.t('addProductForm.ks')}</div>
                                <input defaultValue={data && data.ks_price} disabled has-error={errors.ks_price ? 'true' : 'false'} name="ks_price" ref={register({ required: true })} className="strike-addproduct__form-input-multiple-item-input" placeholder={i18n.t('addProductForm.price')} />
                            </div>
                            <div className="strike-addproduct__form-input-multiple-item ml-15">
                                <div className="strike-addproduct__form-input-multiple-item-label">{i18n.t('addProductForm.al')}</div>
                                <input defaultValue={data && data.al_price} disabled has-error={errors.al_price ? 'true' : 'false'} name="al_price" ref={register({ required: true })} className="strike-addproduct__form-input-multiple-item-input" placeholder={i18n.t('addProductForm.price')} />
                            </div>
                            <div className="strike-addproduct__form-input-multiple-item ml-15">
                                <div className="strike-addproduct__form-input-multiple-item-label">{i18n.t('addProductForm.mk')}</div>
                                <input defaultValue={data && data.mk_price} disabled has-error={errors.mk_price ? 'true' : 'false'} name="mk_price" ref={register({ required: true })} className="strike-addproduct__form-input-multiple-item-input" placeholder={i18n.t('addProductForm.price')} />
                            </div>
                        </div>
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.openable')}</div>
                        <select value={data ? data.openable : ''} onChange={handleOpenable} has-error={errors.openable ? 'true' : 'false'} name="openable" ref={register({ required: true })} className="strike-addproduct__form-input">
                            <option value={true}>{i18n.t('addProductForm.true')}</option>
                            <option value={false}>{i18n.t('addProductForm.false')}</option>
                        </select>
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.size')}</div>
                        <select disabled onChange={handleSelect} ref={register({ required: true })} value={data ? data.size : ''} has-error={errors.size ? 'true' : 'false'} name="size" className="strike-addproduct__form-input">
                            <option value="small">{i18n.t('addProductForm.small')}</option>
                            <option value="medium">{i18n.t('addProductForm.medium')}</option>
                            <option value="large">{i18n.t('addProductForm.large')}</option>
                        </select>
                        <button className="strike-addproduct__form-button">{i18n.t('addProductForm.editProduct')}</button>
                    </form>
                    <button onClick={addOrder} className="strike-addproduct__form-button">{i18n.t('products.addOrder')}</button>
                    <button onClick={copyLink} className="strike-addproduct__form-button">{i18n.t('products.copyLink')}</button>
                    <button onClick={delProduct} className="strike-addproduct__form-button">{i18n.t('products.delete')}</button>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = { updateProduct, getProduct, deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));