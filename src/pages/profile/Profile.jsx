import React from 'react';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import './style.scss';

const Profile = (props) => {
    return (
        <Wrapper>
            <div>Profile.jsx</div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);