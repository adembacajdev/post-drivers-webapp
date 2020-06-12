import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './products.scss';

const Products = (props) => {
    return (
        <div>Products.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));