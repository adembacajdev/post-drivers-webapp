import React, {useEffect, useState} from 'react';
import './addOrder.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useForm } from "react-hook-form";
import { postOrder } from '../../store/actions/orders';
import { validateNumber } from '../../services/schemas';
import { Tooltip } from 'reactstrap';
import cities from '../../services/constants/Cities';
import locations from '../../services/constants/Locations';

const AddOrder = (props) => {
    const productId = props.match.params.productId;
    const [country, setCountry] = useState('Kosovë');
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const [popupInfo, setPopupInfo] = useState('');
    const [latitudeMarker, setLatitudeMarker] = useState(42.66758079200047);
    const [longitudeMarker, setLongitudeMarker] = useState(21.165194013322285);
    // const [numberIsValid, validateNumber] = useState(false);
    const [viewPort, setViewPort] = useState({ width: 1200, height: 600, latitude: 42.66758079200047, longitude: 21.165194013322285, zoom: 14, })

    const _renderPopup = () => {
        return popupInfo && (
            <Popup tipSize={5}
                anchor="bottom-right"
                longitude={this.state.longitudeMarker}
                latitude={this.state.latitudeMarker}
                closeOnClick={false} offsetLeft={-10} offsetTop={-46}
                onClose={() => setPopupInfo('')} >
                <div>{popupInfo}</div>
            </Popup>
        );
    }


    const onDragStart = (event) => {
        const { lngLat } = event
    }

    const onDragEnd = (event) => {
        setLatitudeMarker(event.lngLat[1]);
        setLongitudeMarker(event.lngLat[0]);
    }

    const toggle = () => setTooltipOpen(!tooltipOpen);

    const handleSelectCountry = (e) => {
        setCountry(e.target.value);
        setLatitudeMarker(locations[e.target.value][0]);
        setLongitudeMarker(locations[e.target.value][1]);
        setViewPort({
            width: 1200,
            height: 600,
            latitude: locations[e.target.value][0],
            longitude: locations[e.target.value][1],
            zoom: 14,
        })
    }
    const handleSelectCity = (e) => {
        setLatitudeMarker(locations[e.target.value][0]);
        setLongitudeMarker(locations[e.target.value][1]);
        setViewPort({
            width: 1200,
            height: 600,
            latitude: locations[e.target.value][0],
            longitude: locations[e.target.value][1],
            zoom: 14,
        })
    }

    const onSubmit = data => {
        const isNumberValid = validateNumber(data.phone);
        console.log('isValid', isNumberValid)
        console.log('watch', watch('phone'))
    }

    useEffect(() => { console.log('props', productId) }, [props])
    return (
        <div className="add-order">
            <div className="add-order__navbar">
                Online Shop
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="add-order__wrapper">
                <div className="add-order__wrapper-row">
                    <div is-left="true" className="add-order__wrapper-row-column">
                        <div className="add-order__wrapper-row-column-title">{i18n.t('addOrder.productDetails')}</div>
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.productId')}</div>
                        <input has-error={errors.product_id ? 'true' : 'false'} ref={register({ required: true })} name="product_id" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.productId')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.name')}</div>
                        <input disabled ref={register({ required: false })} name="name" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.name')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.description')}</div>
                        <input disabled ref={register({ required: false })} name="description" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.description')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.price')}</div>
                        <input disabled ref={register({ required: false })} name="price" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.price')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.additionalInfo')}</div>
                        <input has-error={errors.additional_info ? 'true' : 'false'} ref={register({ required: true })} name="additional_info" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.exSizeColor')} />
                    </div>
                    <div className="add-order__wrapper-row-column">
                        <div className="add-order__wrapper-row-column-title">{i18n.t('addOrder.yourInformation')}</div>
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.firstName')}</div>
                        <input has-error={errors.first_name ? 'true' : 'false'} ref={register({ required: true })} name="first_name" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.firstName')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.lastName')}</div>
                        <input has-error={errors.last_name ? 'true' : 'false'} ref={register({ required: true })} name="last_name" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.lastName')} />
                        <div className="add-order__wrapper-row-form-label">{i18n.t('addOrder.phone')}</div>
                        <input href="#" id="TooltipExample" has-error={errors.phone ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="add-order__wrapper-row-form-input" placeholder={i18n.t('addOrder.phone')} />
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
                    mapboxApiAccessToken={'pk.eyJ1IjoiYWRlbWJhY2FqIiwiYSI6ImNrYnF0c3phNjBhd3Iydm50bnIyeHl0d3kifQ.6zDG514PklFKYJTYD32p8Q'}
                    width={"100%"}
                    height={400}
                    onViewportChange={(viewport) => setViewPort(viewport)}
                >
                    <Marker latitude={latitudeMarker} longitude={longitudeMarker} offsetLeft={-23} offsetTop={-46} draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd}>
                        <img src="img/pin.png" width={46} height={46} alt="App Logo" />
                    </Marker>
                    {_renderPopup()}

                </ReactMapGL>
                <div className="add-order__wrapper-footer">
                    <button type="submit">Send order</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { postOrder };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddOrder));