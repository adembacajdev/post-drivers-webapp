import React from 'react';
import './orders.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';

const AddOrder = (props) => {
    const [popupInfo, setPopupInfo] = useState('');
    const [latitudeMarker, setLatitudeMarker] = useState(42.66758079200047);
    const [longitudeMarker, setLongitudeMarker] = useState(21.165194013322285);
    const [latitudeInput, setLatitudeInput] = useState('');
    const [longitudeInput, setLongitudeInput] = useState('');
    const [textTitle, setTextTitle] = useState('')
    const [viewPort, setViewPort] = useState({
        width: 1200,
        height: 600,
        latitude: 42.66758079200047,
        longitude: 21.165194013322285,
        zoom: 14,
    })

    function _renderPopup() {
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
        setLatitudeInput(event.lngLat[1]);
        setLongitudeInput(event.lngLat[0]);
    }
    return (
        <Wrapper>
            <div className="strike-addorder">
                <ReactMapGL
                    {...viewPort}
                    mapStyle={'mapbox://styles/mapbox/streets-v9'}
                    mapboxApiAccessToken={'pk.eyJ1IjoiYWRlbWJhY2FqIiwiYSI6ImNrYnF0c3phNjBhd3Iydm50bnIyeHl0d3kifQ.6zDG514PklFKYJTYD32p8Q'}
                    width={"100%"}
                    height={400}
                    onViewportChange={(viewport) => setViewPort(viewport)}
                        >
                        <Marker latitude={latitudeMarker} longitude={longitudeMarker} offsetLeft={-23} offsetTop={-46} draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd}>
                            <div onClick={() => { console.log("OHNECLIKE"); setPopupInfo(textTitle)}} ><img src="img/pin.png" width={46} height={46} alt="App Logo" />
                            </div>
                        </Marker>
                    {_renderPopup()}

                </ReactMapGL>
                <div className="strike-addorder__title">{i18n.t('addOrderForm.title')}</div>
                <form className="strike-addorder__form">
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.productId')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.productId')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.latitude')}</div>
                    <input disabled defaultValue={latitudeInput} className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.latitude')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.longitude')}</div>
                    <input disabled defaultValue={longitudeInput} className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.longitude')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.description')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.description')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.firstName')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.firstName')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.lastName')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.lastName')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.phone')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.phone')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.country')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.country')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.city')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.city')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.address')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.address')} />
                    <div className="strike-addorder__form-label">{i18n.t('addOrderForm.building')}</div>
                    <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.building')} />
                    <button className="strike-addorder__form-button">{i18n.t('addOrderForm.addOrder')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddOrder));