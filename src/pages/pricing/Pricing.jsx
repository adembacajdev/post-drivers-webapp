import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './style.scss';

const Pricing = (props) => {
    const { history } = images.transfers;
    return (
        <Wrapper>
            <div className="strike-pricing">
                <div className="strike-pricing__header">{i18n.t('pricing.title')}</div>
                <Table items={[1, 2, 3, 4, 5, 6]} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Pricing));


const Table = ({ items }) => {
    return (
        <div className="strike-pricing__table">
            <div className="strike-pricing__table-header">
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.country')}</div>
                </div>
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.size')}</div>
                </div>
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.shipmentPrice')}</div>
                </div>
                <div className="strike-pricing__table-header-item">
                    <div className="strike-pricing__table-header-item-text">{i18n.t('pricing.cancellationPrice')}</div>
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
        <div className="strike-pricing__table-item">
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">Kosove</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">Small</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">2.00$</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">00.00$</div>
            </div>
        </div>
    )
}