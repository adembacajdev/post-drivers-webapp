import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import { VectorMap } from 'react-jvectormap';
import i18n from '../../services/locales/i18n';
import './home.scss';

const Home = (props) => {
    const { blueChart, yellowChart, redChart, greenChart, infoIcon, testProduct } = images.home;
    let markers = [{ name: "Universitas Islam Sultan Agung", latLng: [-6.954821, 110.458576] }, { name: "Other university", latLng: [-5.132412, 119.488454] }, { name: "Other university", latLng: [-4.009751, 122.520665] }]
    return (
        <Wrapper>
            <div className="strike-home">
                <div className="strike-home__header">{i18n.t('home.overview')}</div>
                <div className="strike-home__grids">
                    <div onClick={() => props.history.push('/orders', { title: i18n.t('home.pendingOrders') })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.pendingOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">20</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={blueChart} />
                        </div>
                    </div>
                    <div onClick={() => props.history.push('/orders', { title: i18n.t('home.ongoingOrders') })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.ongoingOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">200</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={yellowChart} />
                        </div>
                    </div>
                    <div onClick={() => props.history.push('/orders', { title: i18n.t('home.cancelledOrders') })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.cancelledOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">0</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={redChart} />
                        </div>
                    </div>
                    <div onClick={() => props.history.push('/orders', { title: i18n.t('home.completedOrders') })} className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">{i18n.t('home.completedOrders')}</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">30</div>
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
                            <img className="strike-home__map-header-right-icon" src={infoIcon} />
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
                                    // selectedHover: {
                                    // }
                                }}
                                //    ref="map"
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
                            <div className="strike-home__map-body-right-title">{i18n.t('home.topCities')}</div>
                            <div className="strike-home__map-body-right-item">
                                <div className="strike-home__map-body-right-item-left">Prishtine</div>
                                <div className="strike-home__map-body-right-item-right">21</div>
                            </div>
                            <div className="strike-home__map-body-right-item">
                                <div className="strike-home__map-body-right-item-left">Prizren</div>
                                <div className="strike-home__map-body-right-item-right">14</div>
                            </div>
                            <div className="strike-home__map-body-right-item">
                                <div className="strike-home__map-body-right-item-left">Tirane</div>
                                <div className="strike-home__map-body-right-item-right">8</div>
                            </div>
                            <div className="strike-home__map-body-right-item">
                                <div className="strike-home__map-body-right-item-left">Peje</div>
                                <div className="strike-home__map-body-right-item-right">7</div>
                            </div>
                            <div className="strike-home__map-body-right-item">
                                <div className="strike-home__map-body-right-item-left">Mitrovice</div>
                                <div className="strike-home__map-body-right-item-right">3</div>
                            </div>
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
                        <div className="strike-home__bottom-left-table">
                            <div className="strike-home__bottom-left-table-product">
                                <img className="strike-home__bottom-left-table-product-icon" src={testProduct} />
                                <div className="strike-home__bottom-left-table-product-text">Women's Vintage Peacoat</div>
                            </div>
                            <div className="strike-home__bottom-left-table-description">Lorem Ipsum</div>
                            <div className="strike-home__bottom-left-table-price">$29.162</div>
                            <div className="strike-home__bottom-left-table-noorders">20</div>
                        </div>
                        <div className="strike-home__bottom-left-table">
                            <div className="strike-home__bottom-left-table-product">
                                <img className="strike-home__bottom-left-table-product-icon" src={testProduct} />
                                <div className="strike-home__bottom-left-table-product-text">Women's Vintage Peacoat</div>
                            </div>
                            <div className="strike-home__bottom-left-table-description">Lorem Ipsum</div>
                            <div className="strike-home__bottom-left-table-price">$29.162</div>
                            <div className="strike-home__bottom-left-table-noorders">20</div>
                        </div>
                        <div className="strike-home__bottom-left-table">
                            <div className="strike-home__bottom-left-table-product">
                                <img className="strike-home__bottom-left-table-product-icon" src={testProduct} />
                                <div className="strike-home__bottom-left-table-product-text">Women's Vintage Peacoat</div>
                            </div>
                            <div className="strike-home__bottom-left-table-description">Lorem Ipsum</div>
                            <div className="strike-home__bottom-left-table-price">$29.162</div>
                            <div className="strike-home__bottom-left-table-noorders">20</div>
                        </div>
                        <div className="strike-home__bottom-left-table">
                            <div className="strike-home__bottom-left-table-product">
                                <img className="strike-home__bottom-left-table-product-icon" src={testProduct} />
                                <div className="strike-home__bottom-left-table-product-text">Women's Vintage Peacoat</div>
                            </div>
                            <div className="strike-home__bottom-left-table-description">Lorem Ipsum</div>
                            <div className="strike-home__bottom-left-table-price">$29.162</div>
                            <div className="strike-home__bottom-left-table-noorders">20</div>
                        </div>
                    </div>


                    <div className="strike-home__bottom-right">
                        <div className="strike-home__bottom-right-title">{i18n.t('home.recentCustomers')}</div>
                        <div className="strike-home__bottom-right-table-header">
                            <div className="strike-home__bottom-right-table-header-left">{i18n.t('home.name')}</div>
                            <div className="strike-home__bottom-right-table-header-right">{i18n.t('home.total')}</div>
                        </div>
                        <div className="strike-home__bottom-right-table-item">
                            <div className="strike-home__bottom-right-table-item-left">Filan Fisteku</div>
                            <div className="strike-home__bottom-right-table-item-right">3476</div>
                        </div>
                        <div className="strike-home__bottom-right-table-item">
                            <div className="strike-home__bottom-right-table-item-left">Filan Fisteku</div>
                            <div className="strike-home__bottom-right-table-item-right">3476</div>
                        </div>
                        <div className="strike-home__bottom-right-table-item">
                            <div className="strike-home__bottom-right-table-item-left">Filan Fisteku</div>
                            <div className="strike-home__bottom-right-table-item-right">3476</div>
                        </div>
                        <div className="strike-home__bottom-right-table-item">
                            <div className="strike-home__bottom-right-table-item-left">Filan Fisteku</div>
                            <div className="strike-home__bottom-right-table-item-right">3476</div>
                        </div>
                        <div className="strike-home__bottom-right-table-item">
                            <div className="strike-home__bottom-right-table-item-left">Filan Fisteku</div>
                            <div className="strike-home__bottom-right-table-item-right">3476</div>
                        </div>
                        <div className="strike-home__bottom-right-table-item">
                            <div className="strike-home__bottom-right-table-item-left">Filan Fisteku</div>
                            <div className="strike-home__bottom-right-table-item-right">3476</div>
                        </div>
                        <div className="strike-home__bottom-right-footer">
                            {i18n.t('home.showMore')}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));