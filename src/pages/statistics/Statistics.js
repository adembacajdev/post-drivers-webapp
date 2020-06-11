import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './statistics.scss';

const Statistics = (props) => {
    return (
        <div>Statistics.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Statistics));