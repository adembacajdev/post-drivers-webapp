import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import i18n from '../../services/locales/i18n';
import './style.scss';
import { getAllUsers, deleteUser } from '../../store/actions/users';
import Table from './Table';

const Customers = (props) => {
    const addUser = useCallback(() => { props.history.push('/add-user') }, []);
    useEffect(() => { props.getAllUsers() }, []);
    return (
        <Wrapper>
            <div className="strike-users">
                <div className="strike-users__header">
                    <div className="strike-users__header-left">
                        <div className="strike-users__header-left-text">{i18n.t('users.title')}</div>
                    </div>
                    <div className="strike-users__header-right">
                        <div onClick={addUser} className="strike-users__header-right-text">{i18n.t('users.addUser')}</div>
                    </div>
                </div>
                <Table deleteUser={props.deleteUser} items={props.allUsers} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ allUsers }) => ({ allUsers });
const mapDispatchToProps = { getAllUsers, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers));