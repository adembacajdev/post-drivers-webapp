import React, { useEffect } from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import { getUser, deleteUser } from '../../store/actions/users';
import i18next from '../../services/locales/i18n';
import { useState } from 'react';

const SeeUser = ({ location, selectedUser, getUser, deleteUser, history }) => {
    const [data, setData] = useState([]);
    useEffect(() => { getUser(location.state.id); }, []);
    const delUser = () => {
        deleteUser(location.state.id);
        history.goBack();
    }

    useEffect(() => { setData(selectedUser) }, [selectedUser]);
    return (
        <Wrapper>
            <div className="strike-user">
                <div className="strike-user__header">{i18next.t('users.userDetails')}</div>
                <div className="strike-user__body">
                    <div className="strike-user__body-left">
                        <div className="strike-user__body-label">{i18next.t('users.firstName')}</div>
                        <input disabled defaultValue={data?.first_name} className="strike-user__body-input" placeholder="Field" />
                        <div className="strike-user__body-label">{i18next.t('users.lastName')}</div>
                        <input disabled defaultValue={data?.last_name} className="strike-user__body-input" placeholder="Field" />
                        <div className="strike-user__body-label">{i18next.t('users.phone')}</div>
                        <input disabled defaultValue={data?.phone} className="strike-user__body-input" placeholder="Field" />
                        <div className="strike-user__body-label">{i18next.t('users.email')}</div>
                        <input disabled defaultValue={data?.email} className="strike-user__body-input" placeholder="Field" />
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