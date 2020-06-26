import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './transfers.scss';
import { getAllTransfers, getBalanceDetails } from '../../store/actions/transfers';
import { useEffect, useState, useCallback } from 'react';
import moment from 'moment';

const Transfers = (props) => {
    const { filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.transfers;
    const [transfers, setTransfers] = useState(props.allTransfers);
    useEffect(() => {
        props.getBalanceDetails();
        props.getAllTransfers(5, 1);
    }, [])
    useEffect(() => { setTransfers(props.allTransfers); }, [props.allTransfers]);

    const nextPage = useCallback(() => { if (transfers.hasNextPage) props.getAllTransfers(5, transfers.currentPage + 1) }, [transfers]);
    const prevPage = useCallback(() => { if (transfers.hasPrevPage) props.getAllTransfers(5, transfers.currentPage - 1) }, [transfers]);
    const number = useCallback((page) => { props.getAllTransfers(5, page) }, [transfers]);
    return (
        <Wrapper>
            <div className="strike-transfers-top">
                <div className="strike-transfers-top__left">
                    <div className="strike-transfers-top__left-title">{i18n.t('transfers.latestEarning')}</div>
                    <div className="strike-transfers-top__left-middle">
                        <div className="strike-transfers-top__left-middle-left">
                            <div className="strike-transfers-top__left-middle-left-title">{i18n.t('transfers.totalAmount')}</div>
                            <div className="strike-transfers-top__left-middle-left-subtitle">{props.balanceDetails && props.balanceDetails.latest_total_amount}$</div>
                        </div>
                        <div className="strike-transfers-top__left-middle-right">
                            <div className="strike-transfers-top__left-middle-right-title">{i18n.t('transfers.transportCost')}</div>
                            <div className="strike-transfers-top__left-middle-right-subtitle">{props.balanceDetails && props.balanceDetails.latest_transport_cost}$</div>
                        </div>
                    </div>
                    <div className="strike-transfers-top__left-subtitle text-center">{i18n.t('transfers.netoAmount')}</div>
                    <div className="strike-transfers-top__left-price text-center">{props.balanceDetails && props.balanceDetails.latest_neto_amount}$</div>
                </div>
                <div className="strike-transfers-top__middle">
                    <div className="strike-transfers-top__middle-title">{i18n.t('transfers.currentBalance')}</div>
                    <div className="strike-transfers-top__middle-subtitle">{i18n.t('transfers.totalAmount')}</div>
                    <div className="strike-transfers-top__middle-price">{props.balanceDetails && props.balanceDetails.current_balance}$</div>
                </div>
                <div className="strike-transfers-top__right">
                    <div className="strike-transfers-top__right-title">{i18n.t('transfers.allTimeEarning')}</div>
                    <div className="strike-transfers-top__right-subtitle">{i18n.t('transfers.totalAmount')}</div>
                    <div className="strike-transfers-top__right-price">{props.balanceDetails && props.balanceDetails.all_time_earning}$</div>
                </div>
            </div>
            <div className="strike-transfers">
                <Table items={transfers.data} />
                <div className="strike-transfers__pagination">
                    <img onClick={prevPage} src={transfers.hasPrevPage ? filledLeftArrow : unfilledLeftArrow} className='strike-transfers__pagination-leftarrow' />
                    {transfers && transfers.lastPage.map(item => {
                        return <div onClick={() => number(item)} is-active={item === transfers.currentPage ? 'true' : 'false'} key={item} className="strike-transfers__pagination-number">{item}</div>
                    })}
                    <img onClick={nextPage} src={transfers.hasNextPage ? filledRightArrow : unfilledRightArrow} className='strike-transfers__pagination-rightarrow' />
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ allTransfers, balanceDetails }) => ({ allTransfers, balanceDetails });
const mapDispatchToProps = { getBalanceDetails, getAllTransfers };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Transfers));


const Table = ({ items }) => {
    return (
        <div className="strike-transfers__table">
            <div className="strike-transfers__table-header">
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.amount')}</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.date')}</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">{i18n.t('transfers.time')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <Item key={index} {...item} />
            })}
        </div>
    )
}

const Item = ({ amount, updated_at }) => {
    const date = moment(updated_at).format('DD/MM/YYYY');
    const time = moment(updated_at).format('HH:MM:ss');
    return (
        <div className="strike-transfers__table-item">
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">${amount}</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">{date}</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">{time}</div>
            </div>
        </div>
    )
}