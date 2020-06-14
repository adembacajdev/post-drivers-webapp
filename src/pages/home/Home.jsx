import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import './home.scss';

const Home = (props) => {
    const { blueChart, yellowChart, redChart, greenChart } = images.home;
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
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));