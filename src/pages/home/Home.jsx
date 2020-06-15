import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import { VectorMap } from 'react-jvectormap';
import './home.scss';

const Home = (props) => {
    const { blueChart, yellowChart, redChart, greenChart, infoIcon, testProduct } = images.home;

    let markers = [{ name: "Universitas Islam Sultan Agung", latLng: [-6.954821, 110.458576] }, { name: "Other university", latLng: [-5.132412, 119.488454] }, { name: "Other university", latLng: [-4.009751, 122.520665] }]
    return (
        <Wrapper>
            <div className="strike-home">
                <div className="strike-home__header">Overview</div>
                <div className="strike-home__grids">
                    <div className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">Pending Orders</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">20</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={blueChart} />
                        </div>
                    </div>
                    <div className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">Ongoing Orders</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">200</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={yellowChart} />
                        </div>
                    </div>
                    <div className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">Cancelled Orders</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">0</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={redChart} />
                        </div>
                    </div>
                    <div className="strike-home__grids-grid">
                        <div className="strike-home__grids-grid-title">Completed Orders</div>
                        <div className="strike-home__grids-grid-bottom">
                            <div className="strike-home__grids-grid-bottom-number">30</div>
                            <img className="strike-home__grids-grid-bottom-icon" src={greenChart} />
                        </div>
                    </div>
                </div>

                <div className="strike-home__map">
                    <div className="strike-home__map-header">
                        <div className="strike-home__map-header-left">
                            <div className="strike-home__map-header-left-text">Top cities</div>
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
                            <div className="strike-home__map-body-right-title">Top Cities</div>
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
                                View All
                            </div>
                        </div>
                    </div>
                </div>

                <div className="strike-home__bottom">
                    <div className="strike-home__bottom-left">
                        <div className="strike-home__bottom-left-title">Top Products</div>
                        <div className="strike-home__bottom-left-tableheader">
                            <div className="strike-home__bottom-left-tableheader-product">Product</div>
                            <div className="strike-home__bottom-left-tableheader-description">Description</div>
                            <div className="strike-home__bottom-left-tableheader-price">Price</div>
                            <div className="strike-home__bottom-left-tableheader-noorders">No. Orders</div>
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
                        <div className="strike-home__bottom-right-title">Recent Customers</div>
                        <div className="strike-home__bottom-right-table-header">
                            <div className="strike-home__bottom-right-table-header-left">Name</div>
                            <div className="strike-home__bottom-right-table-header-right">Total</div>
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
                            Show More
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