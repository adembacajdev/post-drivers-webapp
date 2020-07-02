import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import { VectorMap } from 'react-jvectormap';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import i18n from '../../services/locales/i18n';
import './home.scss';
import { getTopCities, getTopProducts, getNumberOfOrdersByStatus } from '../../store/actions/orders';
import { getRecentCustomers } from '../../store/actions/customers';
import { getShopInfo } from '../../store/actions/shop.info';
import { getAllLocations } from '../../store/actions/location';
import { getUser } from '../../store/actions/authorization';
import locations from '../../services/constants/Locations';

const Home = (props) => {
    const [markers, setMarkers] = useState([]);
    const [topProductsLength, setTopProductsLength] = useState(4);
    const [recentCustomersLength, setRecentCustomersLength] = useState(4);
    const { blueChart, yellowChart, redChart, greenChart, infoIcon, testProduct } = images.home;
    const [viewPort, setViewPort] = useState({ width: 1200, height: 600, latitude: 42.66758079200047, longitude: 21.165194013322285, zoom: 5, })

    useEffect(() => {
        props.getTopCities();
        props.getTopProducts();
        props.getNumberOfOrdersByStatus();
        // props.getAllLocations();
        props.getShopInfo();
        props.getRecentCustomers();
        props.getUser();
    }, [])
    useEffect(() => { if(props.user) localStorage.setItem('username', `${props.user.first_name} ${props.user.last_name}`) }, [props.user])

    useEffect(() => {
        if (props.topCities) {
            let array = [];
            Object.keys(props.topCities).forEach(city => {
                array.push({ latitude: locations[city][0], longitude: locations[city][1] })
            })
            setMarkers(array);
        }
    }, [props.topCities]);
    return (
        <Wrapper>
            <div className="strike-home">
                <div className="strike-home__header">{i18n.t('home.overview')}</div>
                <div className="strike-home__grids">
                    <div onClick={() => props.history.push('/order-by-status', { title: i18n.t('home.pendingOrders'), slug: 'pending' })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.pendingOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">{props.numberOfOrdersByStatus && props.numberOfOrdersByStatus.pending}</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={blueChart} />
                        </div>
                    </div>
                    <div onClick={() => props.history.push('/order-by-status', { title: i18n.t('home.ongoingOrders'), slug: 'ongoing' })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.ongoingOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">{props.numberOfOrdersByStatus && props.numberOfOrdersByStatus.ongoing}</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={yellowChart} />
                        </div>
                    </div>
                    <div onClick={() => props.history.push('/order-by-status', { title: i18n.t('home.cancelledOrders'), slug: 'cancelled' })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.cancelledOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">{props.numberOfOrdersByStatus && props.numberOfOrdersByStatus.cancelled}</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={redChart} />
                        </div>
                    </div>
                    <div onClick={() => props.history.push('/order-by-status', { title: i18n.t('home.completedOrders'), slug: 'completed' })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.completedOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">{props.numberOfOrdersByStatus && props.numberOfOrdersByStatus.completed}</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={greenChart} />
                        </div>
                    </div>
                </div>

                <div className="strike-home__map">
                    <div className="strike-home__map-header">
                        <div className="strike-home__map-header-left">
                            <div className="strike-home__map-header-left-text">{i18n.t('home.topCities')}</div>
                        </div>
                        <div className="strike-home__map-header-right">
                        </div>
                    </div>
                    <div className="strike-home__map-body">
                        <div className="strike-home__map-body-map">
                            <ReactMapGL
                                {...viewPort}
                                mapStyle={'mapbox://styles/mapbox/satellite-v9'}
                                // mapStyle={'mapbox://styles/mapbox/streets-v9'}
                                mapboxApiAccessToken={'pk.eyJ1IjoiYWRlbWJhY2FqIiwiYSI6ImNrYnF0c3phNjBhd3Iydm50bnIyeHl0d3kifQ.6zDG514PklFKYJTYD32p8Q'}
                                width={"100%"}
                                height={'100%'}
                                onViewportChange={(viewport) => setViewPort(viewport)}
                            >
                                {markers && markers.map((item, index) => {
                                    return (
                                        <Marker key={index} latitude={item.latitude} longitude={item.longitude} offsetLeft={-23} offsetTop={-46} draggable={false}>
                                            <div style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#40B9E9' }} />
                                        </Marker>
                                    )
                                })}
                            </ReactMapGL>
                        </div>
                        <div className="strike-home__map-body-right">
                            {/* <div className="strike-home__map-body-right-title">{i18n.t('home.topCities')}</div> */}
                            {props.topCities && Object.entries(props.topCities).map((item, index) => {
                                return (
                                    <div key={index} className="strike-home__map-body-right-item">
                                        <div className="strike-home__map-body-right-item-left">{item[0]}</div>
                                        <div className="strike-home__map-body-right-item-right">{item[1]}</div>
                                    </div>
                                )
                            })}
                            <div className="strike-home__map-body-right-footer">
                                {i18n.t('home.viewAll')}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="strike-home__bottom">
                    <div id="products-table" className="strike-home__bottom-left">
                        <div className="strike-home__bottom-left-title">{i18n.t('home.topProducts')}</div>
                        <div className="strike-home__bottom-left-tableheader">
                            <div className="strike-home__bottom-left-tableheader-product">{i18n.t('home.product')}</div>
                            <div className="strike-home__bottom-left-tableheader-description">{i18n.t('home.description')}</div>
                            <div className="strike-home__bottom-left-tableheader-price">{i18n.t('home.price')}</div>
                            <div className="strike-home__bottom-left-tableheader-noorders">{i18n.t('home.noOrders')}</div>
                        </div>
                        {props.topProducts && props.topProducts.map((item, index) => {
                            if (index <= topProductsLength) {
                                return (
                                    <div key={index} className="strike-home__bottom-left-table">
                                        <div className="strike-home__bottom-left-table-product">
                                            <div className="strike-home__bottom-left-table-product-text">{item.name}</div>
                                        </div>
                                        <div className="strike-home__bottom-left-table-description">{item.description}</div>
                                        <div className="strike-home__bottom-left-table-price">{item.price}</div>
                                        <div className="strike-home__bottom-left-table-noorders">{item.orders}</div>
                                    </div>
                                )
                            }
                        })}
                        <div onClick={() => { setTopProductsLength(9) }} className="strike-home__bottom-right-footer">
                            {i18n.t('home.showMore')}
                        </div>
                    </div>


                    <div id="customers-table" className="strike-home__bottom-right">
                        <div className="strike-home__bottom-right-title">{i18n.t('home.recentCustomers')}</div>
                        <div className="strike-home__bottom-right-table-header">
                            <div className="strike-home__bottom-right-table-header-left">{i18n.t('home.name')}</div>
                            <div className="strike-home__bottom-right-table-header-right">{i18n.t('home.total')}</div>
                        </div>
                        {props.recentCustomers && props.recentCustomers.map((item, index) => {
                            if (index <= recentCustomersLength) {
                                return (
                                    <div key={index} className="strike-home__bottom-right-table-item">
                                        <div className="strike-home__bottom-right-table-item-left">{`${item.first_name} ${item.last_name}`}</div>
                                        <div className="strike-home__bottom-right-table-item-right">{item.amount}€</div>
                                    </div>
                                )
                            }
                        })}
                        <div onClick={() => { setRecentCustomersLength(9) }} className="strike-home__bottom-right-footer">
                            {i18n.t('home.showMore')}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({
    topCities, topProducts, numberOfOrdersByStatus, allLocations, recentCustomers, user
}) => ({
    topCities, topProducts, numberOfOrdersByStatus, allLocations, recentCustomers, user
});
const mapDispatchToProps = {
    getTopCities, getTopProducts, getNumberOfOrdersByStatus, getAllLocations, getShopInfo, getRecentCustomers, getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));