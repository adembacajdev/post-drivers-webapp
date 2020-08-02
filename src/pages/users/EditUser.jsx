import React, { useState, useEffect, isValidElement } from 'react';
import Wrapper from '../../containers/wrapper/Wrapper';
import i18n from '../../services/locales/i18n';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, getUser, deleteUser } from '../../store/actions/users';
import { useForm } from "react-hook-form";
import './style.scss';

var timeout = null;
const EditUser = (props) => {
    const [isEmailValid, validateEmail] = useState(true);
    const [data, setData] = useState(props.selectedUser)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        if (isEmailValid) props.updateUser(props.location.state.id, data, props.history);
    }

    useEffect(() => { props.getUser(props.location.state.id); }, []);
    useEffect(() => { setData(props.selectedUser) }, [props.selectedUser]);
    const delUser = () => {
        deleteUser(props.location.state.id);
        props.history.goBack();
    }

    const handleEmail = (e) => {
        window.onkeyup = (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(e.target.value) === false) validateEmail(false);
                else validateEmail(true);
            }, 200)
        }
    }
    return (
        <Wrapper>
            <div className="strike-adduser">
                <div className="strike-adduser__title">{i18n.t('users.editUser')}</div>
                <div className="strike-adduser__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="strike-adduser__form-label">{i18n.t('addUserForm.firstName')}</div>
                        <input defaultValue={data && data.first_name} has-error={errors.first_name ? 'true' : 'false'} ref={register({ required: true })} name="first_name" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.firstName')} />
                        <div className="strike-adduser__form-label">{i18n.t('addUserForm.lastName')}</div>
                        <input defaultValue={data && data.last_name} has-error={errors.last_name ? 'true' : 'false'} ref={register({ required: true })} name="last_name" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.lastName')} />
                        <div className="strike-adduser__form-label">{i18n.t('addUserForm.email')}</div>
                        <input onChange={handleEmail} defaultValue={data && data.email} has-error={!isEmailValid ? 'true' : 'false'} ref={register({ required: true })} name="email" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.email')} />
                        <div className="strike-adduser__form-label">{i18n.t('addUserForm.phone')}</div>
                        <input defaultValue={data && data.phone} has-error={errors.phone ? 'true' : 'false'} ref={register({ required: true })} name="phone" className="strike-adduser__form-input" placeholder={i18n.t('addUserForm.phone')} />
                        {/* <div className="strike-adduser__form-label">{i18n.t('addUserForm.isAdmin')}</div> */}
                        {/* <select className="strike-adduser__form-input">
                        <option>{i18n.t('addUserForm.true')}</option>
                        <option>{i18n.t('addUserForm.false')}</option>
                    </select> */}
                        <button type="submit" className="strike-adduser__form-button">{i18n.t('users.editUser')}</button>
                    </form>
                    <button onClick={delUser} className="strike-adduser__form-button">{i18n.t('users.delete')}</button>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ selectedUser }) => ({ selectedUser });
const mapDispatchToProps = { updateUser, getUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditUser));