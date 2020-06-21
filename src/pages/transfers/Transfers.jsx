import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './transfers.scss';

const transfers = (props) => {
    const { history } = images.transfers;
    return (
        <Wrapper>
            <div className="strike-transfers-top">
                <div className="strike-transfers-top__left">
                    <div className="strike-transfers-top__left-title">{i18n.t('transfers.latestEarning')}</div>
                    <div className="strike-transfers-top__left-middle">
                        <div className="strike-transfers-top__left-middle-left">
                            <div className="strike-transfers-top__left-middle-left-title">{i18n.t('transfers.totalAmount')}</div>
                            <div className="strike-transfers-top__left-middle-left-subtitle">200.50$</div>
                        </div>
                        <div className="strike-transfers-top__left-middle-right">
                            <div className="strike-transfers-top__left-middle-right-title">{i18n.t('transfers.transportCost')}</div>
                            <div className="strike-transfers-top__left-middle-right-subtitle">- 40.50$</div>
                        </div>
                    </div>
                    <div className="strike-transfers-top__left-subtitle text-center">{i18n.t('transfers.netoAmount')}</div>
                    <div className="strike-transfers-top__left-price text-center">160.00$</div>
                </div>
                <div className="strike-transfers-top__middle">
                    <div className="strike-transfers-top__middle-title">{i18n.t('transfers.currentBalance')}</div>
                    <div className="strike-transfers-top__middle-subtitle">{i18n.t('transfers.totalAmount')}</div>
                    <div className="strike-transfers-top__middle-price">200.50 %</div>
                </div>
                <div className="strike-transfers-top__right">
                    <div className="strike-transfers-top__right-title">{i18n.t('transfers.allTimeEarning')}</div>
                    <div className="strike-transfers-top__right-subtitle">{i18n.t('transfers.totalAmount')}</div>
                    <div className="strike-transfers-top__right-price">2550.25 %</div>
                </div>
            </div>
            <div className="strike-transfers">
                <Table items={[1, 2, 3, 4, 5, 6]} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(transfers));


const Table = ({ items }) => {
    return (
        <div className="strike-transfers__table">
            <div className="strike-transfers__table-header">
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.amount')}</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.date')}</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.time')}</div>
                </div>
            </div>
            {items && items.map(item => {
                return <Item />
            })}
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="strike-transfers__table-item">
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">$2141</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">28 April 2019</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">12:30</div>
            </div>
        </div>
    )
}