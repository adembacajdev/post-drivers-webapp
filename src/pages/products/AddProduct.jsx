import React from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { useForm } from "react-hook-form";
import { postStoreProduct } from '../../store/actions/products';

const AddProduct = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ name, description, price, size }) => {
        props.postStoreProduct({ name, description, price, size, history: props.history });
    };
    return (
        <Wrapper>
            <div className="strike-addproduct">
                <div className="strike-addproduct__title">{i18n.t('addProductForm.title')}</div>
                <form className="strike-addproduct__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.name')}</div>
                    <input has-error={errors.name ? 'true' : 'false'} name="name" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.name')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.description')}</div>
                    <input has-error={errors.description ? 'true' : 'false'} name="description" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.description')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.price')}</div>
                    <input has-error={errors.price ? 'true' : 'false'} name="price" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.price')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.size')}</div>
                    <select has-error={errors.size ? 'true' : 'false'} name="size" ref={register({ required: true })} className="strike-addproduct__form-input">
                        <option value="small">{i18n.t('addProductForm.small')}</option>
                        <option value="medium">{i18n.t('addProductForm.medium')}</option>
                        <option value="large">{i18n.t('addProductForm.large')}</option>
                    </select>
                    <button className="strike-addproduct__form-button">{i18n.t('addProductForm.addProduct')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { postStoreProduct };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct));