import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import { VectorMap } from 'react-jvectormap';
import i18n from '../../services/locales/i18n';
import './home.scss';
import { getTopCities, getTopProducts, getNumberOfOrdersByStatus } from '../../store/actions/orders';
import { getRecentCustomers } from '../../store/actions/customers';
import { getShopInfo } from '../../store/actions/shop.info';
import { getAllLocations } from '../../store/actions/location';

const Home = (props) => {
    const [markers, setMarkers] = useState([]);
    const { blueChart, yellowChart, redChart, greenChart, infoIcon, testProduct } = images.home;

    useEffect(() => {
        props.getTopCities();
        props.getTopProducts();
        props.getNumberOfOrdersByStatus();
        props.getAllLocations();
        props.getShopInfo();
        props.getRecentCustomers()
    }, [])
    useEffect(() => { setMarkers(props.allLocations) }, [props.allLocations])
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
                            <VectorMap
                                map={'world_mill'}
                                backgroundColor="#fff"
                                regionStyle={{
                                    initial: { fill: '#707070', "fill-opacity": 1, stroke: 'none', "stroke-width": 0, "stroke-opacity": 1 },
                                    hover: { "fill-opacity": 0.8, cursor: 'pointer' },
                                    selected: { fill: 'yellow' },
                                }}
                                containerStyle={{ width: '100%', height: '100%' }}
                                containerClassName="map"
                                markers={markers}
                                markerStyle={{
                                    initial: {
                                        fill: '#508FF4',
                                        stroke: '#505050',
                                        "fill-opacity": 1,
                                        "stroke-width": 1,
                                        "stroke-opacity": 1,
                                        r: 5,
                                    },
                                    hover: {
                                        stroke: 'black',
                                        "stroke-width": 2,
                                        cursor: 'pointer'
                                    },
                                    selected: {
                                        fill: 'blue'
                                    },
                                    selectedHover: {
                                    }
                                }}
                                regionStyle={{
                                    initial: {
                                        fill: '#E3E9EF'
                                    }
                                }}
                            />
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
                    <div className="strike-home__bottom-left">
                        <div className="strike-home__bottom-left-title">{i18n.t('home.topProducts')}</div>
                        <div className="strike-home__bottom-left-tableheader">
                            <div className="strike-home__bottom-left-tableheader-product">{i18n.t('home.product')}</div>
                            <div className="strike-home__bottom-left-tableheader-description">{i18n.t('home.description')}</div>
                            <div className="strike-home__bottom-left-tableheader-price">{i18n.t('home.price')}</div>
                            <div className="strike-home__bottom-left-tableheader-noorders">{i18n.t('home.noOrders')}</div>
                        </div>
                        {props.topProducts && props.topProducts.map((item, index) => {
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
                        })}
                        <div className="strike-home__bottom-right-footer">
                            {i18n.t('home.showMore')}
                        </div>
                    </div>


                    <div className="strike-home__bottom-right">
                        <div className="strike-home__bottom-right-title">{i18n.t('home.recentCustomers')}</div>
                        <div className="strike-home__bottom-right-table-header">
                            <div className="strike-home__bottom-right-table-header-left">{i18n.t('home.name')}</div>
                            <div className="strike-home__bottom-right-table-header-right">{i18n.t('home.total')}</div>
                        </div>
                        {props.recentCustomers && props.recentCustomers.map((item, index) => {
                            return (
                                <div key={index} className="strike-home__bottom-right-table-item">
                                    <div className="strike-home__bottom-right-table-item-left">{`${item.first_name} ${item.last_name}`}</div>
                                    <div className="strike-home__bottom-right-table-item-right">{item.amount}€</div>
                                </div>
                            )
                        })}
                        <div className="strike-home__bottom-right-footer">
                            {i18n.t('home.showMore')}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ topCities, topProducts, numberOfOrdersByStatus, allLocations, recentCustomers 
}) => ({ topCities, topProducts, numberOfOrdersByStatus, allLocations, recentCustomers });
const mapDispatchToProps = {
    getTopCities, getTopProducts, getNumberOfOrdersByStatus, getAllLocations, getShopInfo, getRecentCustomers
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));