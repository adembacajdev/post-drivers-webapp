import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../../store/actions/authenticate.action';
import { useForm } from "react-hook-form";
import './login.scss';

const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ email, password }) => props.authenticate(true);
    
    return (
        <div className="strike-login">
            <div className="strike-login__title">Stike App</div>
            <div className="strike-login__inputs">
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-login__inputs-label">Email</div>
                    <input has-error={errors.email ? 'true' : 'false'} name="email" ref={register({ required: true })} className="strike-login__inputs-input" type="text" placeholder="Type your email here..." />
                    <div className="strike-login__inputs-label">Password</div>
                    <input has-error={errors.password ? "true" : 'false'} name="password" ref={register({ required: true })} className="strike-login__inputs-input" type="password" placeholder="Type your passwird here..." />
                    <button type="submit" className="strike-login__inputs-button">Login</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { authenticate };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));