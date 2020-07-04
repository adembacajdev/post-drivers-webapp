import React, { useEffect } from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import { getUser, deleteUser } from '../../store/actions/users';
import i18next from '../../services/locales/i18n';

const SeeUser = ({ location, selectedUser, getUser, deleteUser, history }) => {
    useEffect(() => { getUser(location.state.id); }, []);
    const delUser = () => {
        deleteUser(location.state.id);
        history.goBack();
    }
    return (
        <Wrapper>
            <div className="strike-user">
                <div className="strike-user__header">{i18next.t('users.userDetails')}</div>
                <div className="strike-user__body">
                    <div className="strike-user__body-left">
                        <div className="strike-user__body-label">{i18next.t('users.firstName')}</div>
                        <input disabled defaultValue={selectedUser && selectedUser.first_name} className="strike-user__body-input" placeholder="Field" />
                        <div className="strike-user__body-label">{i18next.t('users.lastName')}</div>
                        <input disabled defaultValue={selectedUser && selectedUser.last_name} className="strike-user__body-input" placeholder="Field" />
                        <div className="strike-user__body-label">{i18next.t('users.phone')}</div>
                        <input disabled defaultValue={selectedUser && selectedUser.phone} className="strike-user__body-input" placeholder="Field" />
                        <div className="strike-user__body-label">{i18next.t('users.email')}</div>
                        <input disabled defaultValue={selectedUser && selectedUser.email} className="strike-user__body-input" placeholder="Field" />
                    </div>
                </div>
                <button onClick={delUser} className="strike-user__body-button">{i18next.t('users.delete')}</button>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ selectedUser }) => ({ selectedUser });
const mapDispatchToProps = { getUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(SeeUser);