import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './login.scss';

const Login = (props) => {
    return (
        <div>Login.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));