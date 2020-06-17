import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import './transfers.scss';

const transfers = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow, history } = images.transfers;
    return (
        <Wrapper>
            <div className="strike-transfers-top">
                <div className="strike-transfers-top__left">
                    <div className="strike-transfers-top__left-title">Current Balance</div>
                    <div className="strike-transfers-top__left-subtitle">Total amount</div>
                    <div className="strike-transfers-top__left-price">200.50 %</div>
                    <div className="strike-transfers-top__left-history">
                        <img className="strike-transfers-top__left-history-icon" src={history} />
                        <div className="strike-transfers-top__left-history-text">Transaction history</div>
                    </div>
                </div>


                <div className="strike-transfers-top__right">
                    <div className="strike-transfers-top__right-title">Total earning</div>
                    <div className="strike-transfers-top__right-subtitle">Total amount</div>
                    <div className="strike-transfers-top__right-price">2550.25 %</div>
                    <div className="strike-transfers-top__right-history">
                        <img className="strike-transfers-top__right-history-icon" src={history} />
                        <div className="strike-transfers-top__right-history-text">Transaction history</div>
                    </div>
                </div>
            </div>
            <div className="strike-transfers">
                <Table items={[1, 2, 3, 4, 5, 6]} />
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(transfers));


const Table = ({ items }) => {
    return (
        <div className="strike-transfers__table">
            <div className="strike-transfers__table-header">
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">Amount</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">Date</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">Time</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">Shop User</div>
                </div>
                <div className="strike-transfers__table-header-item">
                    <div className="strike-transfers__table-header-item-text">Courier User</div>
                </div>
            </div>
            {items && items.map(item => {
                return <Item />
            })}
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="strike-transfers__table-item">
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">$2141</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">28 April 2019</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">12:30</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">John Doe</div>
            </div>
            <div className="strike-transfers__table-item-container">
                <div className="strike-transfers__table-item-container-text">Will Doe</div>
            </div>
        </div>
    )
}