import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './customers.scss';

const Customers = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;
    return (
        <Wrapper>
            <div className="strike-customers">
                <div className="strike-customers__header">
                    <div className="strike-customers__header-left">
                        <div className="strike-customers__header-left-text">{i18n.t('customers.allCustomers')}</div>
                    </div>
                    <div className="strike-customers__header-right">
                        <img className="strike-customers__header-right-icon" src={infoIcon} />
                    </div>
                </div>
                <Table items={[1, 2, 3, 4, 5, 6]} />
                <div className="strike-customers__pagination">
                    <img src={unfilledLeftArrow} className='strike-customers__pagination-leftarrow' />
                    <div is-active="true" className="strike-customers__pagination-number">1</div>
                    <div className="strike-customers__pagination-number">2</div>
                    <div className="strike-customers__pagination-number">3</div>
                    <div className="strike-customers__pagination-number">4</div>
                    <img src={filledRightArrow} className='strike-customers__pagination-rightArrow' />
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers));


const Table = ({ items }) => {
    const { tableArrow } = images.customers;
    return (
        <div className="strike-customers__table">
            <div className="strike-customers__table-header">
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.id')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.firstName')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.lastName')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.phone')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.address')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.city')}</div>
                    <img className="strike-customers__table-header-item-icon" src={tableArrow} />
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('customers.actions')}</div>
                </div>
            </div>
            {items && items.map(item => {
                return <Item />
            })}
        </div>
    )
}

const Item = (props) => {
    const { threePoints } = images.customers;
    return (
        <div className="strike-customers__table-item">
            <div className="strike-customers__table-item-container">
                <input className="strike-customers__table-item-container-checkbox" type="checkbox" />
                <div className="strike-customers__table-item-container-text">123456</div>
            </div>
            <div className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">Francesca</div>
            </div>
            <div className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">Metts</div>
            </div>
            <div className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">35440</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">rr.7 September</div>
            </div>
            <div className="strike-customers__table-item-container centered">
                <div className="strike-customers__table-item-container-text">London</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container centered">
                <div class="dropdown">
                    <img className="strike-customers__table-item-container-dots" src={threePoints} />
                    <div class="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('customers.openLocation')}</div>
                        <div className="dropdown-content-text">{i18n.t('customers.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}