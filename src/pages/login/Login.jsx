import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../../store/actions/authenticate.action';
import { login } from '../../store/actions/authorization';
import { useForm } from "react-hook-form";
import i18n from '../../services/locales/i18n';
import './login.scss';
import images from '../../assets/images';

var timeout = null;
const Login = ({ login, loggedIn, authenticate, isLoggedIn }) => {
    const [isEmailValid, validateEmail] = useState(true);
    const { logoWithoutText } = images;
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ email, password }) => {
        if (!errors.email && !errors.password && isEmailValid) {
            login({ email, password })
        }
    };

    const handleEmail = (e) => {
        window.onkeyup = (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(e.target.value) === false) validateEmail(false);
                else validateEmail(true);
            }, 500)
        }
        // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if (reg.test(e.target.value) === false) validateEmail(false);
        // else validateEmail(true);
    }
    return (
        isLoggedIn
            ?
            <Redirect to='/' />
            :
            <div className="strike-login">
                <div className="strike-login__header">
                    <img className="strike-login__header-logo" src={logoWithoutText} />
                    <div className="strike-login__header-title">{i18n.t('login.title')}</div>
                </div>
                <div className="strike-login__inputs">
                    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                        <div className="strike-login__inputs-label">{i18n.t('login.emailLabel')}</div>
                        <input onChange={handleEmail} has-error={!isEmailValid ? 'true' : 'false'} name="email" ref={register({ required: true })} className="strike-login__inputs-input" type="text" placeholder={i18n.t('login.emailPlaceholder')} />
                        <div className="strike-login__inputs-label">{i18n.t('login.passwordLabel')}</div>
                        <input has-error={errors.password ? "true" : 'false'} name="password" ref={register({ required: true })} className="strike-login__inputs-input" type="password" placeholder={i18n.t('login.passwordPlaceholder')} />
                        <button type="submit" className="strike-login__inputs-button">{i18n.t('login.loginButton')}</button>
                    </form>
                </div>
            </div>
    )
}

const mapStateToProps = ({ loggedIn, isLoggedIn }) => ({ loggedIn, isLoggedIn });
const mapDispatchToProps = { authenticate, login };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));