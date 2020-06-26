import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './style.scss';
import { getAllPricing } from '../../store/actions/pricing';
import { useEffect } from 'react';

const Pricing = (props) => {
    const { history } = images.transfers;
    useEffect(() => { props.getAllPricing() }, []);
    useEffect(() => { console.log('pricing', props.pricingTable) }, [props.pricingTable]);
    return (
        <Wrapper>
            <div className="strike-pricing">
                <div className="strike-pricing__header">{i18n.t('pricing.title')}</div>
                <Table items={props.pricingTable} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ pricingTable }) => ({ pricingTable });
const mapDispatchToProps = { getAllPricing };

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
            {items && items.map((item, index) => {
                return <Item key={index} {...item} />
            })}
        </div>
    )
}

const Item = ({cancellation_price, country, shipment_price, size}) => {
    return (
        <div className="strike-pricing__table-item">
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{country}</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{size}</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{shipment_price}</div>
            </div>
            <div className="strike-pricing__table-item-container">
                <div className="strike-pricing__table-item-container-text">{cancellation_price}</div>
            </div>
        </div>
    )
}