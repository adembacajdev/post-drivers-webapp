import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import i18n from '../../services/locales/i18n';
import './statistics.scss';
import { getDailyEarnings, getDailyOrders, getDailyCities } from '../../store/actions/statistics';
import { Line, Bar } from 'react-chartjs-2';

const Statistics = (props) => {
    useEffect(() => {
        props.getDailyEarnings();
        props.getDailyOrders();
        props.getDailyCities();
    }, []);

    const handleEarningsMonth = (e) => { 
        if(e.target.value !== '0') props.getDailyEarnings(e.target.value);
        else props.getDailyEarnings();
     };
    const handleOrdersMonth = (e) => { 
        if(e.target.value !== '0') props.getDailyOrders(e.target.value);
        else props.getDailyOrders();
     };

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
                            <select onChange={handleEarningsMonth}>
                                <option value={0}>{i18n.t('statistics.selectPlaceholder')}</option>
                                <option value={1}>{i18n.t('statistics.oneMonth')}</option>
                                <option value={3}>{i18n.t('statistics.threeMonths')}</option>
                                <option value={6}>{i18n.t('statistics.sixMonths')}</option>
                                <option value={12}>{i18n.t('statistics.oneYear')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="strike-statistics__chart-body">
                        <Line height={90} data={props.dailyEarnings && props.dailyEarnings.data} options={props.dailyEarnings && props.dailyEarnings.options} />
                    </div>
                </div>
                <div className="strike-statistics__chart">
                    <div className="strike-statistics__chart-header">
                        <div className="strike-statistics__chart-header-left">
                            <div className="strike-statistics__chart-header-left-text">{i18n.t('statistics.orders')}</div>
                        </div>
                        <div className="strike-statistics__chart-header-right">
                            <select onChange={handleOrdersMonth}>
                                <option value={0}>{i18n.t('statistics.selectPlaceholder')}</option>
                                <option value={1}>{i18n.t('statistics.oneMonth')}</option>
                                <option value={3}>{i18n.t('statistics.threeMonths')}</option>
                                <option value={6}>{i18n.t('statistics.sixMonths')}</option>
                                <option value={12}>{i18n.t('statistics.oneYear')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="strike-statistics__chart-body">
                        <Line height={90} data={props.dailyOrders && props.dailyOrders.data} options={props.dailyOrders && props.dailyOrders.options} />
                    </div>
                </div>
                <div className="strike-statistics__chart">
                    <div className="strike-statistics__chart-header">
                        <div className="strike-statistics__chart-header-left">
                            <div className="strike-statistics__chart-header-left-text">{i18n.t('statistics.cities')}</div>
                        </div>
                        <div className="strike-statistics__chart-header-right">
                        </div>
                    </div>
                    <div className="strike-statistics__chart-body">
                        <Bar height={90} data={props.dailyCities && props.dailyCities.data} options={props.dailyCities && props.dailyCities.options} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ dailyEarnings, dailyOrders, dailyCities }) => ({ dailyEarnings, dailyOrders, dailyCities });
const mapDispatchToProps = { getDailyEarnings, getDailyOrders, getDailyCities };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Statistics));