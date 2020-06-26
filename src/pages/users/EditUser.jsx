import React from 'react';
import './style.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';
import { updateUser, getUser } from '../../store/actions/users';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';

const EditUser = (props) => {
    const [data, setData] = useState(props.selectedUser)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => props.updateUser(props.location.state.id, data, props.history);

    useEffect(() => { props.getUser(props.location.state.id); }, []);
    useEffect(() => { setData(props.selectedUser) }, [props.selectedUser]);
    return (
        <Wrapper>
            <div className="strike-adduser">
                <div className="strike-adduser__title">{i18n.t('users.editUser')}</div>
                <form onSubmit={handleSubmit(onSubmit)} className="strike-adduser__form">
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.firstName')}</div>
                    <input defaultValue={data && data.first_name} has-error={errors.first_name ? 'true' : 'false'} ref={register({ required: true })} name="first_name" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.firstName')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.lastName')}</div>
                    <input defaultValue={data && data.last_name} has-error={errors.last_name ? 'true' : 'false'} ref={register({ required: true })} name="last_name" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.lastName')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.email')}</div>
                    <input defaultValue={data && data.email} has-error={errors.email ? 'true' : 'false'} ref={register({ required: true })} name="email" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.email')} />
                    <div className="strike-adduser__form-label">{i18n.t('addUserForm.phone')}</div>
                    <input defaultValue={data && data.phone} has-error={errors.phone ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.phone')} />
                    {/* <div className="strike-adduser__form-label">{i18n.t('addUserForm.isAdmin')}</div> */}
                    {/* <select className="strike-adduser__form-input">
                        <option>{i18n.t('addUserForm.true')}</option>
                        <option>{i18n.t('addUserForm.false')}</option>
                    </select> */}
                    <button type="submit" className="strike-adduser__form-button">{i18n.t('users.editUser')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ selectedUser }) => ({ selectedUser });
const mapDispatchToProps = { updateUser, getUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditUser));