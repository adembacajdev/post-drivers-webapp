import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './style.scss';
import { useCallback } from 'react';

const Customers = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;
    const addUser = useCallback(() => {props.history.push('/add-user')}, [])
    return (
        <Wrapper>
            <div className="strike-customers">
                <div className="strike-customers__header">
                    <div className="strike-customers__header-left">
                        <div className="strike-customers__header-left-text">{i18n.t('users.title')}</div>
                    </div>
                    <div className="strike-customers__header-right">
                        <div onClick={addUser} className="strike-customers__header-right-text">{i18n.t('users.addUser')}</div>
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
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.firstName')}</div>
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.lastName')}</div>
                </div>
                <div className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.phone')}</div>
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.email')}</div>
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.createdAt')}</div>
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.role')}</div>
                </div>
                <div is-responsive="true" className="strike-customers__table-header-item centered">
                    <div className="strike-customers__table-header-item-text">{i18n.t('users.actions')}</div>
                </div>
            </div>
            {items && items.map(item => {
                return <Item item={item} />
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
                <div className="strike-customers__table-item-container-text">{props.item}</div>
            </div>
            <div className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">Francesca</div>
            </div>
            <div className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">Metts</div>
            </div>
            <div className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">049838871</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container">
                <div className="strike-customers__table-item-container-text">fran@gmail.com</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container centered">
                <div className="strike-customers__table-item-container-text">23/06/2020</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container centered">
                <div className="strike-customers__table-item-container-text">Manager</div>
            </div>
            <div is-responsive="true" className="strike-customers__table-item-container centered">
                <div class="dropdown">
                    <img className="strike-customers__table-item-container-dots" src={threePoints} />
                    <div class="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('users.edit')}</div>
                        <div className="dropdown-content-text">{i18n.t('users.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}