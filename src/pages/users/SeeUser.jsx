import React from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';

const SeeUser = (props) => {
    return (
        <Wrapper>
            <div className="strike-user">
                <div className="strike-user__header">{'{user name}'}</div>
                <div className="strike-user__text"><b>ID: </b>{'{user id}'}</div>
                <div className="strike-user__text"><b>First Name: </b>{'{user first name}'}</div>
                <div className="strike-user__text"><b>Last Name: </b>{'{user last name}'}</div>
                <div className="strike-user__text"><b>Phone: </b>{'{user phone}'}</div>
                <div className="strike-user__text"><b>Email: </b>{'{user email}'}</div>
                <div className="strike-user__text"><b>Created at: </b>{'{user created at}'}</div>
                <div className="strike-user__text"><b>Role: </b>{'{user role}'}</div>
            </div>
        </Wrapper>
    )
}

export default SeeUser;