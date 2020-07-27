import React from 'react';
import './orders.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { useEffect, useState } from 'react';
import { getOrder, deleteOrder } from '../../store/actions/orders';
import { connect } from 'react-redux';
import moment from 'moment'
import i18next from '../../services/locales/i18n';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const SeeOrder = (props) => {
    const [viewPort, setViewPort] = useState({ width: 1200, height: 600, latitude: 42.66758079200047, longitude: 21.165194013322285, zoom: 5, })
    useEffect(() => { props.getOrder(props.location.state.id); }, [])
    useEffect(() => {
        if (props.order) {
            setViewPort({ width: 1200, height: 600, latitude: props.order && props.order.location.latitude, longitude: props.order && props.order.location.longitude, zoom: 5, })
        }
    }, [props.order])

    const delOrder = () => {
        props.deleteOrder(props.location.state.id);
        props.history.goBack();
    }
    const printOrd = () => {
        localStorage.setItem('printOne', props.location.state.id)
        window.open(`http://${window.location.host}/print/one`, 'Print Orders') //this should be https://
    }
    return (
        <Wrapper>
            <div className="strike-order">
                <div className="strike-order__header">
                    <div className="strike-order__header-left">
                        <div className="strike-order__header-left-text">{i18next.t('orders.orderDetails')}</div>
                    </div>
                    <div className="strike-order__header-right">
                        <button onClick={printOrd} className="strike-orders__print-selected">{i18next.t('orders.printSelected')}</button>
                    </div>
                </div>
                <div className="strike-order__body">
                    <div className="strike-order__body-left">
                        <div className="strike-order__body-left-top">
                            <div className="strike-order__body-left-top-left">
                                <div className="strike-order__body-label">{i18next.t('orders.serialNumber')}</div>
                                <div className="strike-order__body-label">{i18next.t('orders.status')}</div>
                                <div className="strike-order__body-label">{i18next.t('orders.date')}</div>
                                <div className="strike-order__body-label">{i18next.t('orders.time')}</div>
                            </div>
                            <div className="strike-order__body-left-top-right">
                                <div className="strike-order__body-label"><b>{props.order && props.order.serial_number}</b></div>
                                <div className="strike-order__body-label"><b>{props.order && props.order.status}</b></div>
                                <div className="strike-order__body-label"><b>{props.order && moment(props.order.updated_at).format('DD-MM-YYYY')}</b></div>
                                <div className="strike-order__body-label"><b>{props.order && moment(props.order.updated_at).format('HH:mm')}</b></div>
                            </div>
                        </div>
                        <div className="strike-order__body-label"><b>{i18next.t('orders.product')}</b></div>
                        <div className="strike-order__body-label">{i18next.t('orders.id')}</div>
                        <input disabled defaultValue={props.order && props.order.id} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.name')}</div>
                        <input disabled defaultValue={props.order && props.order.product.name} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.description')}</div>
                        <input disabled defaultValue={props.order && props.order.product.description} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.price')}</div>
                        <input disabled defaultValue={props.order && props.order.price} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.additionalInfo')}</div>
                        <input disabled defaultValue={props.order && props.order.additional_info} className="strike-order__body-input" placeholder="Field" />
                    </div>
                    <div className="strike-order__body-right">
                        <div className="strike-order__body-label"><b>{i18next.t('orders.customer')}</b></div>
                        <div className="strike-order__body-label">{i18next.t('orders.firstName')}</div>
                        <input disabled defaultValue={props.order && props.order.client.first_name} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.lastName')}</div>
                        <input disabled defaultValue={props.order && props.order.client.last_name} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.phone')}</div>
                        <input disabled defaultValue={props.order && props.order.client.phone} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.country')}</div>
                        <input disabled defaultValue={props.order && props.order.client.country} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.city')}</div>
                        <input disabled defaultValue={props.order && props.order.client.city} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.address')}</div>
                        <input disabled defaultValue={props.order && props.order.client.address} className="strike-order__body-input" placeholder="Field" />
                        <div className="strike-order__body-label">{i18next.t('orders.building')}</div>
                        <input disabled defaultValue={props.order && props.order.client.building} className="strike-order__body-input" placeholder="Field" />
                    </div>
                </div>
                <div className="strike-order__body-label"><b>{i18next.t('orders.location')}</b></div>
                <div>
                    <ReactMapGL
                        {...viewPort}
                        maxZoom={13}
                        // mapStyle={'mapbox://styles/mapbox/satellite-v9'}
                        mapStyle={'mapbox://styles/mapbox/streets-v9'}
                        mapboxApiAccessToken={'pk.eyJ1IjoiYWRlbWJhY2FqIiwiYSI6ImNrYnF0c3phNjBhd3Iydm50bnIyeHl0d3kifQ.6zDG514PklFKYJTYD32p8Q'}
                        width={"100%"}
                        height={400}
                        onViewportChange={(viewport) => setViewPort(viewport)}
                    >
                        {props.order && (
                            <Marker latitude={props.order.location.latitude} longitude={props.order.location.longitude} offsetLeft={-23} offsetTop={-46} draggable={false}>
                                <div status={props.order.status} className="map-marker" />
                            </Marker>
                        )}
                    </ReactMapGL>
                </div>
                <button onClick={delOrder} className="strike-order__body-delete">{i18next.t('orders.delete')}</button>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = { getOrder, deleteOrder };

export default connect(mapStateToProps, mapDispatchToProps)(SeeOrder);