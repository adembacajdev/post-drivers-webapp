import React from 'react';
import './transfers.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';

const AddTransfer = () => {
    return (
        <Wrapper>
            <div className="strike-addtransfer">
                <div className="strike-addtransfer__title">{i18n.t('addTransferForm.title')}</div>
                <form className="strike-addtransfer__form">
                    <div className="strike-addtransfer__form-label">{i18n.t('addTransferForm.amount')}</div>
                    <input className="strike-addtransfer__form-input" placeholder={i18n.t('addTransferForm.amount')} />
                    <div className="strike-addtransfer__form-label">{i18n.t('addTransferForm.date')}</div>
                    <input className="strike-addtransfer__form-input" placeholder={i18n.t('addTransferForm.date')} />
                    <div className="strike-addtransfer__form-label">{i18n.t('addTransferForm.time')}</div>
                    <input className="strike-addtransfer__form-input" placeholder={i18n.t('addTransferForm.time')} />
                    <button className="strike-addtransfer__form-button">{i18n.t('addTransferForm.addTransfer')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddTransfer));