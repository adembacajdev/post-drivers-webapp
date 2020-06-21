import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import i18n from '../../services/locales/i18n';
import './statistics.scss';

//Chartist
import 'matchmedia/index.js';
import 'chartist/dist/chartist.min.css';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

const Statistics = (props) => {
    const SVGAnimation = {
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            series: [
                [18, 7, 16, 13, 17, 9],
            ]
        },
        options: {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            height: 300
        },

        events: {
            draw: function (data) {
                if (data.type === 'line' || data.type === 'area') {
                    data.element.animate({
                        d: {
                            begin: 2000 * data.index,
                            dur: 2000,
                            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                            to: data.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                }
            }
        }
    }
    return (
        <Wrapper>
            <div className="strike-statistics">
                <div className="strike-statistics__header">{i18n.t('statistics.title')}</div>
                <div className="strike-statistics__chart">
                    <div className="strike-statistics__chart-header">
                        <div className="strike-statistics__chart-header-left">
                            <div className="strike-statistics__chart-header-left-text">{i18n.t('statistics.earning')}</div>
                        </div>
                        <div className="strike-statistics__chart-header-right">
                            <select>
                                <option>1 month</option>
                                <option>3 months</option>
                                <option>6 months</option>
                                <option>1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className="strike-statistics__chart-body">
                        <ChartistGraph data={SVGAnimation.data} options={SVGAnimation.options} listener={SVGAnimation.events} type={'Line'} />
                    </div>
                </div>
                <div className="strike-statistics__chart">
                    <div className="strike-statistics__chart-header">
                        <div className="strike-statistics__chart-header-left">
                            <div className="strike-statistics__chart-header-left-text">{i18n.t('statistics.orders')}</div>
                        </div>
                        <div className="strike-statistics__chart-header-right">
                            <select>
                                <option>1 month</option>
                                <option>3 months</option>
                                <option>6 months</option>
                                <option>1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className="strike-statistics__chart-body">
                        <ChartistGraph data={SVGAnimation.data} options={SVGAnimation.options} listener={SVGAnimation.events} type={'Line'} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Statistics));