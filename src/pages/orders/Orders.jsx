import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import './orders.scss';

const Orders = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.orders;
    return (
        <Wrapper>
            <div className="strike-orders">
                <div className="strike-orders__header">
                    <div className="strike-orders__header-left">
                        <div className="strike-orders__header-left-text">All Orders</div>
                    </div>
                    <div className="strike-orders__header-right">
                        <img className="strike-orders__header-right-icon" src={infoIcon} />
                    </div>
                </div>
                <Table items={[1, 2, 3, 4, 5, 6]} />
                <div className="strike-orders__pagination">
                    <img src={unfilledLeftArrow} className='strike-orders__pagination-leftarrow' />
                    <div is-active="true" className="strike-orders__pagination-number">1</div>
                    <div className="strike-orders__pagination-number">2</div>
                    <div className="strike-orders__pagination-number">3</div>
                    <div className="strike-orders__pagination-number">4</div>
                    <img src={filledRightArrow} className='strike-orders__pagination-rightArrow' />
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));


const Table = ({ items }) => {
    const { tableArrow } = images.orders;
    return (
        <div className="strike-orders__table">
            <div className="strike-orders__table-header">
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">ID</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">Status</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">United price</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">Customer ID</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item">
                    <div className="strike-orders__table-header-item-text">Customer name</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item centered">
                    <div className="strike-orders__table-header-item-text">City</div>
                    <img className="strike-orders__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-orders__table-header-item centered">
                    <div className="strike-orders__table-header-item-text">Actions</div>
                </div>
            </div>
            {items && items.map(item => {
                return <Item />
            })}
        </div>
    )
}

const Item = (props) => {
    const { threePoints } = images.orders;
    return (
        <div className="strike-orders__table-item">
            <div className="strike-orders__table-item-container">
                <input className="strike-orders__table-item-container-checkbox" type="checkbox" />
                <div className="strike-orders__table-item-container-text">123456</div>
            </div>
            <div className="strike-orders__table-item-container">
                <div className="cancelled" />
                <div className="strike-orders__table-item-container-text">Cancelled</div>
            </div>
            <div className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">5.23</div>
            </div>
            <div className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">35440</div>
            </div>
            <div className="strike-orders__table-item-container">
                <div className="strike-orders__table-item-container-text">Francesco Metts</div>
            </div>
            <div className="strike-orders__table-item-container centered">
                <div className="strike-orders__table-item-container-text">Prishtine</div>
            </div>
            <div className="strike-orders__table-item-container centered">
                <div class="dropdown">
                    <img className="strike-orders__table-item-container-dots" src={threePoints} />
                    <div class="dropdown-content">
                        <div className="dropdown-content-text">Open location</div>
                        <div className="dropdown-content-text">Share</div>
                        <div className="dropdown-content-text">Print</div>
                        <div className="dropdown-content-text">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}