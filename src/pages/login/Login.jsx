import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../../store/actions/authenticate.action';
import './login.scss';

const Login = (props) => {
    const login = () => props.authenticate(true)
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { authenticate };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));