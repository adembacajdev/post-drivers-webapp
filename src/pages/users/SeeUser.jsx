import React, { useEffect } from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/users';
import moment from 'moment';

const SeeUser = ({ location, selectedUser, getUser }) => {
    useEffect(() => { getUser(location.state.id); }, []);
    return (
        <Wrapper>
            <div className="strike-user">
                <div className="strike-user__header">{selectedUser && selectedUser.first_name}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >ID: </b>{selectedUser && selectedUser.id}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >First Name: </b>{selectedUser && selectedUser.first_name}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >Last Name: </b>{selectedUser && selectedUser.last_name}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >Phone: </b>{selectedUser && selectedUser.phone}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >Email: </b>{selectedUser && selectedUser.email}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >Created at: </b>{selectedUser && moment(selectedUser.created_at).format('DD/MM/YYYY')}</div>
                <div className="strike-user__text"><b style={{marginRight: 10}} >Role: </b>TBD</div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ selectedUser }) => ({ selectedUser });
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(SeeUser);