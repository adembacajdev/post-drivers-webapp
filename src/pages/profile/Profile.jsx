import React, { useEffect, useState } from 'react';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import i18n from '../../services/locales/i18n';
import { getUser, resetPassword } from '../../store/actions/authorization';
import { updateUser } from '../../store/actions/users';
import './style.scss';

var timeout = null;
const Profile = (props) => {
    const [isEmailValid, validateEmail] = useState(true);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = ({ first_name, last_name, email, phone }) => {
        if (isEmailValid) {
            props.updateUser(props.user.id, { first_name, last_name, email, phone }, props.history)
        }
    };
    const changePassword = ({ old_password, new_password, new_password_confirmation }) => {
        props.resetPassword({ old_password, new_password, new_password_confirmation })
    };

    useEffect(() => { props.getUser() }, []);
    useEffect(() => {
        if (props.user) {
            setName(props.user.first_name);
            setSurname(props.user.last_name);
            setEmail(props.user.email);
            setPhone(props.user.phone);
        }
    }, [props.user]);

    const handleEmail = (e) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(e.target.value) === false) validateEmail(false);
        else validateEmail(true);
        // window.onkeyup = (e) => {
        //     clearTimeout(timeout);
        //     timeout = setTimeout(async () => {
        //         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //         if (reg.test(e.target.value) === false) validateEmail(false);
        //         else validateEmail(true);
        //     }, 200)
        // }
    }

    return (
        <Wrapper>
            <div className="strike-profile">
                <div className="strike-profile__title">{i18n.t('profile.title')}</div>
                <form className="strike-profile__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-profile__form-label">{i18n.t('profile.name')}</div>
                    <input disabled defaultValue={name} has-error={errors.first_name ? 'true' : 'false'} name="first_name" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.name')} />
                    <div className="strike-profile__form-label">{i18n.t('profile.surname')}</div>
                    <input disabled defaultValue={surname} has-error={errors.last_name ? 'true' : 'false'} name="last_name" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.surname')} />
                    <div className="strike-profile__form-label">{i18n.t('profile.email')}</div>
                    <input disabled onChange={handleEmail} defaultValue={email} has-error={!isEmailValid ? 'true' : 'false'} name="email" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.email')} />
                    <div className="strike-profile__form-label">{i18n.t('profile.phone')}</div>
                    <input disabled defaultValue={phone} has-error={errors.phone ? 'true' : 'false'} name="phone" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.phone')} />
                </form>
            </div>
            <div className="strike-profile">
                <div className="strike-profile__title">{i18n.t('profile.changePass')}</div>
                <form className="strike-profile__form" onSubmit={handleSubmit(changePassword)}>
                    <div className="strike-profile__form-label">{i18n.t('profile.oldPassword')}</div>
                    <input type="password" has-error={errors.old_password ? 'true' : 'false'} name="old_password" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.oldPassword')} />
                    <div className="strike-profile__form-label">{i18n.t('profile.newPassword')}</div>
                    <input type="password" has-error={errors.new_password ? 'true' : 'false'} name="new_password" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.newPassword')} />
                    <div className="strike-profile__form-label">{i18n.t('profile.confirmNewPassword')}</div>
                    <input type="password" has-error={errors.new_password_confirmation ? 'true' : 'false'} name="new_password_confirmation" ref={register({ required: true })} className="strike-profile__form-input" placeholder={i18n.t('profile.confirmNewPassword')} />
                    <button type="submit" className="strike-profile__form-button">{i18n.t('profile.changePass')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { getUser, updateUser, resetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);