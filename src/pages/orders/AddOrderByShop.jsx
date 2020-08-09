import React, { useEffect, useState } from 'react';
import './addOrderByShop.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { useForm } from "react-hook-form";
import ReactMapGL, { Marker } from 'react-map-gl';
import cities from '../../services/constants/Cities';
import locations from '../../services/constants/Locations';
import { getProduct } from '../../store/actions/products';
import images from '../../assets/images';
import { postOrderByShop } from '../../store/actions/orders';

var timeout = null;

const AddOrderByShop = (props) => {
    const [data, setData] = useState([]);
    const { register, handleSubmit, errors } = useForm();
    const [country, setCountry] = useState('Kosovë');
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [latitudeMarker, setLatitudeMarker] = useState(42.66758079200047);
    const [longitudeMarker, setLongitudeMarker] = useState(21.165194013322285);
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
            product_id, description, first_name, last_name, phone: `${prefix}${phone}`, country, city, address, building,
            latitude: latitudeMarker, longitude: longitudeMarker
        }
        props.postOrderByShop(body, props.history);
    }

    useEffect(() => {
        props.location.state?.id ? props.getProduct(props.location.state.id) : console.log('no id')
    }, [props.location.state.id])

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

    useEffect(() => {
        setData(props.product)
    }, [props.product])


    return (
        <Wrapper>
            <div className="strike-addorderbyshop">
                <div className="strike-addorderbyshop__title">{i18n.t('addProductForm.editProduct')}</div>
                <div className="strike-addorderbyshop__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="strike-addorderbyshop__fields-row-column-title">{i18n.t('addOrder.productDetails')}</div>
                        {props.product && <div style={{ fontSize: 10, color: 'red' }}>{data?.error}</div>}
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.productId')}</div>
                        <input onChange={handleIdChange} defaultValue={props?.location?.state?.id} has-error={errors.product_id ? 'true' : 'false'} ref={register({ required: true })} name="product_id" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.productId')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.name')}</div>
                        <input defaultValue={data?.name} disabled ref={register({ required: false })} name="name" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.name')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.description')}</div>
                        <input defaultValue={data?.description} disabled ref={register({ required: false })} name="firstDescription" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.description')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.price')}</div>
                        <input defaultValue={data?.ks_price} disabled ref={register({ required: false })} name="price" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.price')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.additionalInfo')}</div>
                        <input has-error={errors.description ? 'true' : 'false'} ref={register({ required: false })} name="description" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.exSizeColor')} />
                        <div className="strike-addorderbyshop__fields-row-column-title">{i18n.t('addOrder.yourInformation')}</div>
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.firstName')}</div>
                        <input has-error={errors.first_name ? 'true' : 'false'} ref={register({ required: true })} name="first_name" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.firstName')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.lastName')}</div>
                        <input has-error={errors.last_name ? 'true' : 'false'} ref={register({ required: true })} name="last_name" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.lastName')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.phone')}</div>
                        <div className="flex-row">
                            <select name="prefix" ref={register({ required: false })} className="strike-addorderbyshop__fields-row-form-input w-10">
                                <option value="383">+383</option>
                                <option value="355">+355</option>
                                <option value="389">+389</option>
                            </select>
                            <input href="#" id="TooltipExample" has-error={errors.phone ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.phone')} />
                        </div>
                        {/* <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>{i18n.t('addOrder.receiveCode')}</Tooltip> */}
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.country')}</div>
                        <select name="country" has-error={errors.country ? 'true' : 'false'} ref={register({ required: true })} onChange={handleSelectCountry} className="strike-addorderbyshop__fields-row-form-input">
                            <option value="Kosovë">{i18n.t('addOrder.kosovo')}</option>
                            <option value="Shqipëri">{i18n.t('addOrder.albania')}</option>
                            <option value="Maqedoni e Veriut">{i18n.t('addOrder.northMacedonia')}</option>
                        </select>
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.city')}</div>
                        <select onChange={handleSelectCity} name="city" has-error={errors.city ? 'true' : 'false'} ref={register({ required: true })} className="strike-addorderbyshop__fields-row-form-input">
                            {cities[country].map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.address')}</div>
                        <input has-error={errors.address ? 'true' : 'false'} ref={register({ required: true })} name="address" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.address')} />
                        <div className="strike-addorderbyshop__fields-row-form-label">{i18n.t('addOrder.building')}</div>
                        <input has-error={errors.building ? 'true' : 'false'} ref={register({ required: false })} name="building" className="strike-addorderbyshop__fields-row-form-input" placeholder={i18n.t('addOrder.building')} />
                        <div className="strike-addorderbyshop__fields-row-column-title">{i18n.t('addOrder.putLocation')}</div>
                        <ReactMapGL
                            {...viewPort}
                            maxZoom={18}
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
                        <div className="strike-addorderbyshop__fields-footer">
                            <button type="submit">{i18n.t('addOrder.button')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = { getProduct, postOrderByShop };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddOrderByShop));