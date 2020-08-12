import React, { useState, useEffect } from 'react';
import './style.scss';
import Wrapper from '../../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../../services/locales/i18n';
import { useForm } from "react-hook-form";
import cities from '../../../services/constants/Cities';
import locations from '../../../services/constants/Locations';
import { validateNumber } from '../../../services/schemas';
import { toggleErrorModal } from '../../../store/actions/toggle.error.modal';
import { addOrderDirectlyByShop } from '../../../store/actions/orders';

const AddProduct = (props) => {
    const [hasOrdered, setOrdered] = useState(false);
    const [phonePlaceholder, setPhonePlaceholder] = useState('4x xxx xxx');
    const [validNumber, setValidNumber] = useState(false);
    const [country, setCountry] = useState('Kosovë');
    const [latitudeMarker, setLatitudeMarker] = useState(42.66758079200047);
    const [longitudeMarker, setLongitudeMarker] = useState(21.165194013322285);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = ({
        product_name, product_description, ks_price, al_price, mk_price, size, openable, description, first_name, last_name,
        phone, country, city, address, building, prefix
    }) => {
        const body = {
            product_name, product_description, ks_price, al_price, mk_price, size, openable, description, first_name, last_name,
            phone, country, city, address, building, latitude: latitudeMarker, longitude: longitudeMarker
        }
        const isNumberValid = validateNumber(prefix, phone);
        if (isNumberValid) {
            props.addOrderDirectlyByShop(body, props.history);
            setOrdered(true);
        }
        else {
            setOrdered(false);
            props.toggleErrorModal(i18n.t('addOrder.invalidNumber'))
        }
    }


    useEffect(() => {
        if (watch('prefix') === '383') setPhonePlaceholder('4x xxx xxx')
        else if (watch('prefix') === '355') setPhonePlaceholder('xx xxx xxxx')
        else if (watch('prefix') === '389') setPhonePlaceholder('xxxxxxxx')
        else setPhonePlaceholder('4x xxx xxx')
    }, [watch('prefix')])

    const handleSelectCountry = (e) => {
        setCountry(e.target.value);
        setLatitudeMarker(locations[e.target.value][0]);
        setLongitudeMarker(locations[e.target.value][1]);
    }
    const handleSelectCity = (e) => {
        setLatitudeMarker(locations[e.target.value][0]);
        setLongitudeMarker(locations[e.target.value][1]);
    }

    return (
        <Wrapper>
            <div className="strike-addorderdirectlybyshop">
                <div className="strike-addorderdirectlybyshop__title">{i18n.t('addOrderForm.title')}</div>
                <form className="strike-addorderdirectlybyshop__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.productName')}</div>
                    <input has-error={errors.product_name ? 'true' : 'false'} name="product_name" ref={register({ required: true })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addOrderForm.productName')} />
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.productDescription')}</div>
                    <input has-error={errors.product_description ? 'true' : 'false'} name="product_description" ref={register({ required: false })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addOrderForm.productDescription')} />
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addProductForm.price')}</div>
                    <div className="strike-addorderdirectlybyshop__form-input-multiple">
                        <div className="strike-addorderdirectlybyshop__form-input-multiple-item w-10">
                            <div className="strike-addorderdirectlybyshop__form-input-multiple-item-label">{i18n.t('addProductForm.ks')}</div>
                            <input has-error={errors.ks_price ? 'true' : 'false'} name="ks_price" ref={register({ required: true })} className="strike-addorderdirectlybyshop__form-input-multiple-item-input" placeholder={i18n.t('addProductForm.price')} />
                        </div>
                        <div className="strike-addorderdirectlybyshop__form-input-multiple-item ml-15 w-10">
                            <div className="strike-addorderdirectlybyshop__form-input-multiple-item-label">{i18n.t('addProductForm.al')}</div>
                            <input has-error={errors.al_price ? 'true' : 'false'} name="al_price" ref={register({ required: true })} className="strike-addorderdirectlybyshop__form-input-multiple-item-input" placeholder={i18n.t('addProductForm.price')} />
                        </div>
                        <div className="strike-addorderdirectlybyshop__form-input-multiple-item ml-15">
                            <div className="strike-addorderdirectlybyshop__form-input-multiple-item-label">{i18n.t('addProductForm.mk')}</div>
                            <input has-error={errors.mk_price ? 'true' : 'false'} name="mk_price" ref={register({ required: true })} className="strike-addorderdirectlybyshop__form-input-multiple-item-input" placeholder={i18n.t('addProductForm.price')} />
                        </div>
                    </div>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addProductForm.openable')}</div>
                    <select has-error={errors.openable ? 'true' : 'false'} name="openable" ref={register({ required: true })} className="strike-addorderdirectlybyshop__form-input">
                        <option value={true}>{i18n.t('addProductForm.true')}</option>
                        <option value={false}>{i18n.t('addProductForm.false')}</option>
                    </select>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addProductForm.size')}</div>
                    <select has-error={errors.size ? 'true' : 'false'} name="size" ref={register({ required: true })} className="strike-addorderdirectlybyshop__form-input">
                        <option value="small">{i18n.t('addProductForm.small')}</option>
                        <option value="medium">{i18n.t('addProductForm.medium')}</option>
                        <option value="large">{i18n.t('addProductForm.large')}</option>
                    </select>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.description')}</div>
                    <input has-error={errors.description ? 'true' : 'false'} name="description" ref={register({ required: false })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addProductForm.description')} />
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.firstName')}</div>
                    <input has-error={errors.first_name ? 'true' : 'false'} name="first_name" ref={register({ required: false })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addOrderForm.firstName')} />
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.lastName')}</div>
                    <input has-error={errors.last_name ? 'true' : 'false'} name="last_name" ref={register({ required: false })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addOrderForm.lastName')} />
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.phone')}</div>
                    <div className="flex-row">
                        <select name="prefix" ref={register({ required: false })} className="strike-addorderdirectlybyshop__wrapper-row-form-input w-10">
                            <option value="383">+383</option>
                            <option value="355">+355</option>
                            <option value="389">+389</option>
                        </select>
                        <input href="#" id="TooltipExample" has-error={(errors.phone || validNumber) ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="strike-addorderdirectlybyshop__wrapper-row-form-input" placeholder={phonePlaceholder} />
                    </div>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.country')}</div>
                    <select name="country" has-error={errors.country ? 'true' : 'false'} ref={register({ required: true })} onChange={handleSelectCountry} className="strike-addorderdirectlybyshop__wrapper-row-form-input">
                        <option value="Kosovë">{i18n.t('addOrder.kosovo')}</option>
                        <option value="Shqipëri">{i18n.t('addOrder.albania')}</option>
                        <option value="Maqedoni e Veriut">{i18n.t('addOrder.northMacedonia')}</option>
                    </select>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.city')}</div>
                    <select onChange={handleSelectCity} name="city" has-error={errors.city ? 'true' : 'false'} ref={register({ required: true })} className="strike-addorderdirectlybyshop__wrapper-row-form-input">
                        {cities[country].map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.address')}</div>
                    <input has-error={errors.address ? 'true' : 'false'} name="address" ref={register({ required: false })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addOrderForm.address')} />
                    <div className="strike-addorderdirectlybyshop__form-label">{i18n.t('addOrderForm.building')}</div>
                    <input has-error={errors.building ? 'true' : 'false'} name="building" ref={register({ required: false })} className="strike-addorderdirectlybyshop__form-input" placeholder={i18n.t('addOrderForm.building')} />
                    <button disabled={hasOrdered} className="strike-addorderdirectlybyshop__form-button">{i18n.t('addProductForm.addProduct')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { addOrderDirectlyByShop, toggleErrorModal };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct));