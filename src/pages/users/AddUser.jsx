import React, { useState, useEffect } from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { postUser } from '../../store/actions/users';
import { useForm } from "react-hook-form";

var timeout = null;
const AddUser = (props) => {
    const [isEmailValid, validateEmail] = useState(true);
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        if (isEmailValid) props.postUser(data, props.history);
    }
    const handleEmail = (e) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(e.target.value) === false) validateEmail(false);
        else validateEmail(true);
        // window.onkeyup = (e) => {
        //     clearTimeout(timeout);
        //     timeout = setTimeout(async () => {
        //         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //         if (reg.test(e.target.value) === false) validateEmail(false);
        //         else validateEmail(true);
        //     }, 200)
        // }
    }
    return (
        <Wrapper>
            <div className="strike-adduser">
                <div className="strike-adduser__title">{i18n.t('users.addUser')}</div>
                <form onSubmit={handleSubmit(onSubmit)} className="strike-adduser__form">
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.firstName')}</div>
                    <input has-error={errors.first_name ? 'true' : 'false'} ref={register({ required: true })} name="first_name" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.firstName')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.lastName')}</div>
                    <input has-error={errors.last_name ? 'true' : 'false'} ref={register({ required: true })} name="last_name" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.lastName')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.email')}</div>
                    <input onChange={handleEmail} has-error={!isEmailValid ? 'true' : 'false'} ref={register({ required: true })} name="email" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.email')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.phone')}</div>
                    <input has-error={errors.phone ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.phone')} />
                    {/* <div className="strike-adduser__form-label">{i18n.t('addUserForm.isAdmin')}</div> */}
                    {/* <select className="strike-adduser__form-input">
                        <option>{i18n.t('addUserForm.true')}</option>
                        <option>{i18n.t('addUserForm.false')}</option>
                    </select> */}
                    <button type="submit" className="strike-adduser__form-button">{i18n.t('users.addUser')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { postUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddUser));