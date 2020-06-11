import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './home.scss';

const Home = (props) => {
    return (
        <div>Home.js</div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));