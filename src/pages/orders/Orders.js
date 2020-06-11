import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './orders.scss';

const Orders = (props) => {
    return (
        <div>Orders.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));