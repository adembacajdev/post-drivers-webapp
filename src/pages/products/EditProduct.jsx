import React, { useEffect, useState, useCallback } from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { useForm } from "react-hook-form";
import { updateProduct, getProduct, deleteProduct } from '../../store/actions/products';
import copy from "copy-to-clipboard";
import config from '../../config';
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

const EditProduct = (props) => {
    let host = window.location.host;
    const [copyText, setCopyText] = useState(`${host}/add-order/${props.location.state.id}`)
    const [data, setData] = useState({ name: '', decription: '', price: '', size: '' })
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ name, description, price, size }) => {
        const { id } = props.location.state;
        if (name !== '' && description !== '' && price !== '' && size !== '') {
            props.updateProduct({ name: name, description, size, id, history: props.history });
        }
    };

    useEffect(() => { props.getProduct(props.location.state.id) }, [])
    useEffect(() => { setData(props.product) }, [props.product]);

    const handleSelect = (e) => setData({ ...data, size: e.target.value });
    const delProduct = useCallback(() => {
        props.deleteProduct(props.location.state.id);
        props.history.goBack();
    }, [])

    const copyLink = () => {
        toast.notify('Link copied!', { position: 'bottom-right' });
        copy(copyText);
    }

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
                        <input disabled defaultValue={data && data.price} has-error={errors.price ? 'true' : 'false'} name="price" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.price')} />
                        <div className="strike-addproduct__form-label">{i18n.t('addProductForm.size')}</div>
                        <select disabled onChange={handleSelect} ref={register({ required: true })} value={data ? data.size : ''} has-error={errors.size ? 'true' : 'false'} name="size" className="strike-addproduct__form-input">
                            <option value="small">{i18n.t('addProductForm.small')}</option>
                            <option value="medium">{i18n.t('addProductForm.medium')}</option>
                            <option value="large">{i18n.t('addProductForm.large')}</option>
                        </select>
                        <button className="strike-addproduct__form-button">{i18n.t('addProductForm.editProduct')}</button>
                    </form>
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