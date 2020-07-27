import React, { useEffect, useState, useCallback } from 'react';
import './addOrder.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useForm } from "react-hook-form";
import { postOrder, sendCodeVerification } from '../../store/actions/orders';
import { validateNumber } from '../../services/schemas';
import { Tooltip } from 'reactstrap';
import cities from '../../services/constants/Cities';
import locations from '../../services/constants/Locations';
import { toggleErrorModal } from '../../store/actions/toggle.error.modal';
import { getProduct } from '../../store/actions/products';
import images from '../../assets/images';
import Auth from '../../services/auth/Auth';

var timeout = null // timeout for searchBox

const AddOrder = (props) => {
    const { logoWithoutText } = images;
    const { register, handleSubmit, errors } = useForm();
    const productId = props.match.params.productId;
    const [country, setCountry] = useState('Kosovë');
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [latitudeMarker, setLatitudeMarker] = useState(42.66758079200047);
    const [longitudeMarker, setLongitudeMarker] = useState(21.165194013322285);
    const [validNumber, setValidNumber] = useState(false);
    const [viewPort, setViewPort] = useState({ width: 1200, height: 600, latitude: 42.66758079200047, longitude: 21.165194013322285, zoom: 14, })

    const onDragStart = (event) => { const { lngLat } = event }
    const onDragEnd = (event) => { setLatitudeMarker(event.lngLat[1]); setLongitudeMarker(event.lngLat[0]); }
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const handleSelectCountry = (e) => {
        setCountry(e.target.value);
        setLatitudeMarker(locations[e.target.value][0]);
        setLongitudeMarker(locations[e.target.value][1]);
        setViewPort({ width: 1200, height: 600, latitude: locations[e.target.value][0], longitude: locations[e.target.value][1], zoom: 14, })
    }
    const handleSelectCity = (e) => {
        setLatitudeMarker(locations[e.target.value][0]);
        setLongitudeMarker(locations[e.target.value][1]);
        setViewPort({ width: 1200, height: 600, latitude: locations[e.target.value][0], longitude: locations[e.target.value][1], zoom: 14, })
    }

    const onSubmit = ({ product_id, description, first_name, last_name, country, city, address, building, prefix, phone }) => {
        const body = {
            product_id, description, first_name, last_name, phone, country, city, address, building,
            latitude: latitudeMarker, longitude: longitudeMarker
        }
        const isNumberValid = validateNumber(prefix, phone);
        if (isNumberValid) {
            props.sendCodeVerification(`${prefix}${phone}`);
            props.history.push('/order/verify', { ...body, phone: `${prefix}${phone}` })
        }
        else props.toggleErrorModal(i18n.t('addOrder.invalidNumber'))
    }

    useEffect(() => {
        if (productId === undefined || productId === 'undefined' || productId === null) {
            console.log('no id')
        }
        else props.getProduct(productId);
    }, [])

    const handleIdChange = (e) => {
        window.onkeyup = (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                if (e.target.name === 'product_id' && e.target.value.length === 6) {
                    props.getProduct(e.target.value);
                }
            }, 500)
        }
    }

    useEffect(() => {
        if (props.orderPosted) {
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        }
    }, [props.orderPosted]);

    const goHome = useCallback(() => { props.history.push('/') }, [])

    return (
        <div className="add-order">
            <div className="add-order__navbar">
                {Auth.getShopName()}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="add-order__wrapper">
                <div className="add-order__wrapper-row">
                    <div is-left="true" className="add-order__wrapper-row-column">
                        <div className="add-order__wrapper-row-column-title">{i18n.t('addOrder.productDetails')}</div>
                        {props.product && <div style={{ fontSize: 10, color: 'red' }}>{props.product && props.product.error}</div>}
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.productId')}</div>
                        <input onChange={handleIdChange} defaultValue={productId} has-error={errors.product_id ? 'true' : 'false'} ref={register({ required: true })} name="product_id" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.productId')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.name')}</div>
                        <input defaultValue={props.product && props.product.name} disabled ref={register({ required: false })} name="name" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.name')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.description')}</div>
                        <input defaultValue={props.product && props.product.description} disabled ref={register({ required: false })} name="firstDescription" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.description')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.price')}</div>
                        <input defaultValue={props.product && props.product.price} disabled ref={register({ required: false })} name="price" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.price')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.additionalInfo')}</div>
                        <input has-error={errors.description ? 'true' : 'false'} ref={register({ required: false })} name="description" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.exSizeColor')} />
                    </div>
                    <div className="add-order__wrapper-row-column">
                        <div className="add-order__wrapper-row-column-title">{i18n.t('addOrder.yourInformation')}</div>
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.firstName')}</div>
                        <input has-error={errors.first_name ? 'true' : 'false'} ref={register({ required: true })} name="first_name" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.firstName')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.lastName')}</div>
                        <input has-error={errors.last_name ? 'true' : 'false'} ref={register({ required: true })} name="last_name" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.lastName')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.phone')}</div>
                        <div className="flex-row">
                            <select name="prefix" ref={register({ required: false })} className="add-order__wrapper-row-form-input w-10">
                                <option value="383">+383</option>
                                <option value="355">+355</option>
                                <option value="389">+389</option>
                            </select>
                            <input href="#" id="TooltipExample" has-error={(errors.phone || validNumber) ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.phone')} />
                        </div>
                        <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>{i18n.t('addOrder.receiveCode')}</Tooltip>
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.country')}</div>
                        <select name="country" has-error={errors.country ? 'true' : 'false'} ref={register({ required: true })} onChange={handleSelectCountry} className="add-order__wrapper-row-form-input">
                            <option value="Kosovë">{i18n.t('addOrder.kosovo')}</option>
                            <option value="Shqipëri">{i18n.t('addOrder.albania')}</option>
                            <option value="Maqedoni e Veriut">{i18n.t('addOrder.northMacedonia')}</option>
                        </select>
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.city')}</div>
                        <select onChange={handleSelectCity} name="city" has-error={errors.city ? 'true' : 'false'} ref={register({ required: true })} className="add-order__wrapper-row-form-input">
                            {cities[country].map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.address')}</div>
                        <input has-error={errors.address ? 'true' : 'false'} ref={register({ required: true })} name="address" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.address')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.building')}</div>
                        <input has-error={errors.building ? 'true' : 'false'} ref={register({ required: false })} name="building" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.building')} />
                    </div>
                </div>
                <div className="add-order__wrapper-row-column-title">{i18n.t('addOrder.putLocation')}</div>
                <ReactMapGL
                    {...viewPort}
                    mapStyle={'mapbox://styles/mapbox/streets-v9'}
                    // mapStyle={'mapbox://styles/mapbox/satellite-v9'}
                    mapboxApiAccessToken={'pk.eyJ1IjoiYWRlbWJhY2FqIiwiYSI6ImNrYnF0c3phNjBhd3Iydm50bnIyeHl0d3kifQ.6zDG514PklFKYJTYD32p8Q'}
                    width={"100%"}
                    height={400}
                    onViewportChange={(viewport) => setViewPort(viewport)}>
                    <Marker latitude={latitudeMarker} longitude={longitudeMarker} offsetLeft={-23} offsetTop={-46} draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd}>
                        <div ><img src={images.orders.pin} width={46} height={46} alt="App Logo" />
                        </div>
                    </Marker>
                </ReactMapGL>
                <div className="add-order__wrapper-footer">
                    <button type="submit">{i18n.t('addOrder.button')}</button>
                </div>
                <div onClick={goHome} className="add-order__footer">
                    <img className="add-order__footer-logo" src={logoWithoutText} />
                    <div className="add-order__footer-text">Powered by Strike™</div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ product, orderPosted }) => ({ product, orderPosted });
const mapDispatchToProps = { postOrder, toggleErrorModal, getProduct, sendCodeVerification };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddOrder));