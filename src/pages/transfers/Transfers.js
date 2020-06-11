import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './transfers.scss';

const Transfers = (props) => {
    return (
        <div>Transfers.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Transfers));