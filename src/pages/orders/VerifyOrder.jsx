import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import i18n from '../../services/locales/i18n';
import './verifyOrder.scss';
import { postOrder } from '../../store/actions/orders';

const VerifyOrder = (props) => {
    const [data, setData] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ verification_code }) => {
        props.postOrder({ ...data, verification_code })
    };

    useEffect(() => {
        setData(props.location.state);
    }, [])
    return (
        <div className="strike-verify">
            <div className="strike-verify__inputs">
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="strike-verify__inputs-label">{i18n.t('verifyOrder.verificationCode')}</div>
                    <input has-error={errors.verification_code ? 'true' : 'false'} name="verification_code" ref={register({ required: true })} className="strike-verify__inputs-input" type="text" placeholder={i18n.t('verifyOrder.verificationPlaceholder')} />
                    <button type="submit" className="strike-verify__inputs-button">{i18n.t('verifyOrder.verify')}</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({ verification_code }) => ({ verification_code })
const mapDispatchToProps = { postOrder }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VerifyOrder));