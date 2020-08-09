import React, { useEffect } from 'react';
import './customers.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { connect } from 'react-redux';
import { getCustomer, deleteCustomer } from '../../store/actions/customers';
import i18next from 'i18next';
import { useState } from 'react';

const SeeCustomer = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => { props.getCustomer(props.location.state.id); }, []);
    useEffect(() => { props.getCustomer(props.location.state.id); }, [props?.location?.state?.id]);
    const delCustomer = () => {
        props.deleteCustomer(props.location.state.id);
        props.history.goBack()
    }

    useEffect(() => {
        setData(props.customer)
    }, [props.customer])
    return (
        <Wrapper>
            <div className="strike-customer">
                <div className="strike-customer__header">{i18next.t('customers.customerDetails')}</div>
                <div className="strike-customer__body">
                    <div className="strike-customer__body-left">
                        <div className="strike-customer__body-label">{i18next.t('customers.firstName')}</div>
                        <input disabled defaultValue={data?.first_name} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.lastName')}</div>
                        <input disabled defaultValue={data?.last_name} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.phone')}</div>
                        <input disabled defaultValue={data?.phone} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.country')}</div>
                        <input disabled defaultValue={data?.country} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.city')}</div>
                        <input disabled defaultValue={data?.city} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.address')}</div>
                        <input disabled defaultValue={data?.address} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.building')}</div>
                        <input disabled defaultValue={data?.building} className="strike-customer__body-input" placeholder="Field" />
                    </div>
                    <div className="strike-customer__body-right">
                        <div className="strike-customer__body-label">{i18next.t('customers.product')}</div>
                        <input disabled defaultValue={data?.product?.name} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.description')}</div>
                        <input disabled defaultValue={data?.product?.description} className="strike-customer__body-input" placeholder="Field" />
                        <div className="strike-customer__body-label">{i18next.t('customers.price')}</div>
                        <input disabled defaultValue={data?.product?.ks_price} className="strike-customer__body-input" placeholder="Field" />
                    </div>
                </div>
                <button onClick={delCustomer} className="strike-customer__body-button">{i18next.t('customers.delete')}</button>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ customer }) => ({ customer });
const mapDispatchToProps = { getCustomer, deleteCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(SeeCustomer);