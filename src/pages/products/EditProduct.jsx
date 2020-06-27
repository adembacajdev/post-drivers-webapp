import React, { useEffect } from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { useForm } from "react-hook-form";
import { updateProduct, getProduct } from '../../store/actions/products';
import { useState } from 'react';
import { ProductSchema } from '../../services/schemas/ProductSchema';

const EditProduct = (props) => {
    const [data, setData] = useState({
        name: '',
        decription: '',
        price: '',
        size: ''
    })
    const { register, handleSubmit, watch, errors } = useForm({ validationSchema: ProductSchema });
    const onSubmit = ({ description, price, size }) => {
        const { id } = props.location.state;
        if (data.name !== '' && description !== '' && price !== '' && size !== '') {
            props.updateProduct({ name: data.name, description, size, id, history: props.history });
        }
    };

    useEffect(() => {
        const { id } = props.location.state;
        props.getProduct(id)
    }, [])

    useEffect(() => {
        setData(props.product)
    }, [props.product]);

    const handleSelect = (e) => setData({ ...data, size: e.target.value })
    return (
        <Wrapper>
            <div className="strike-addproduct">
                <div className="strike-addproduct__title">{i18n.t('addProductForm.title')}</div>
                <form className="strike-addproduct__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.name')}</div>
                    <input disabled defaultValue={data && data.name} has-error={errors.name ? 'true' : 'false'} name="name" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.name')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.description')}</div>
                    <input defaultValue={data && data.description} has-error={errors.description ? 'true' : 'false'} name="description" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.description')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.price')}</div>
                    <input defaultValue={data && data.price} has-error={errors.price ? 'true' : 'false'} name="price" ref={register({ required: true })} className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.price')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.size')}</div>
                    <select onChange={handleSelect} ref={register({ required: true })} value={data ? data.size : ''} has-error={errors.size ? 'true' : 'false'} name="size" className="strike-addproduct__form-input">
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

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = { updateProduct, getProduct };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));