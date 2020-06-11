import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './customers.scss';

const Customers = (props) => {
    return (
        <div>Customers.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers));