import React from 'react';
import './orders.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';

const AddOrder = (props) => {
    return (
        <Wrapper>
        <div className="strike-addorder">
            <div className="strike-addorder__title">{i18n.t('addOrderForm.title')}</div>
            <form className="strike-addorder__form">
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.productId')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.productId')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.description')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.description')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.firstName')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.firstName')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.lastName')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.lastName')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.phone')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.phone')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.country')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.country')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.city')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.city')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.address')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.address')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.building')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.building')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.latitude')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.latitude')} />
                <div className="strike-addorder__form-label">{i18n.t('addOrderForm.longitude')}</div>
                <input className="strike-addorder__form-input" placeholder={i18n.t('addOrderForm.longitude')} />
                <button className="strike-addorder__form-button">{i18n.t('addOrderForm.addOrder')}</button>
            </form>
        </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddOrder));