import React from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';

const AddUser = (props) => {
    return (
        <Wrapper>
            <div className="strike-adduser">
                <div className="strike-adduser__title">{i18n.t('users.addUser')}</div>
                <form className="strike-adduser__form">
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.firstName')}</div>
                    <input className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.firstName')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.lastName')}</div>
                    <input className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.lastName')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.email')}</div>
                    <input className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.email')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.phone')}</div>
                    <input className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.phone')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.isAdmin')}</div>
                    <select className="strike-adduser__form-input">
                        <option>{i18n.t('addUserForm.true')}</option>
                        <option>{i18n.t('addUserForm.false')}</option>
                    </select>
                    <button className="strike-adduser__form-button">{i18n.t('users.addUser')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddUser));