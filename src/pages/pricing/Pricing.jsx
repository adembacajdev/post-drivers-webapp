import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './style.scss';
import { getAllPricing } from '../../store/actions/pricing';
import Table from './Table'

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