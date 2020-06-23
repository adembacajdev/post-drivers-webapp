import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../../store/actions/authenticate.action';
import { login } from '../../store/actions/authorization';
import { useForm } from "react-hook-form";
import i18n from '../../services/locales/i18n';
import './login.scss';

const Login = ({ login, loggedIn, authenticate }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ email, password }) => {
        if (!errors.email && !errors.password) {
            login({ email, password })
        }
    };
    // useEffect(() => { i18n.changeLanguage('al') }, [])
    return (
        <div className="strike-login">
            <div className="strike-login__title">{i18n.t('login.title')}</div>
            <div className="strike-login__inputs">
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-login__inputs-label">{i18n.t('login.emailLabel')}</div>
                    <input has-error={errors.email ? 'true' : 'false'} name="email" ref={register({ required: true })} className="strike-login__inputs-input" type="text" placeholder={i18n.t('login.emailPlaceholder')} />
                    <div className="strike-login__inputs-label">{i18n.t('login.passwordLabel')}</div>
                    <input has-error={errors.password ? "true" : 'false'} name="password" ref={register({ required: true })} className="strike-login__inputs-input" type="password" placeholder={i18n.t('login.passwordPlaceholder')} />
                    <button type="submit" className="strike-login__inputs-button">{i18n.t('login.loginButton')}</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });
const mapDispatchToProps = { authenticate, login };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));