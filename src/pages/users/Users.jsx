import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './style.scss';
import { useCallback } from 'react';
import { getAllUsers, deleteUser } from '../../store/actions/users';
import { useEffect } from 'react';
import moment from 'moment';

const Customers = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;
    const addUser = useCallback(() => { props.history.push('/add-user') }, []);
    useEffect(() => { props.getAllUsers() }, []);
    return (
        <Wrapper>
            <div className="strike-users">
                <div className="strike-users__header">
                    <div className="strike-users__header-left">
                        <div className="strike-users__header-left-text">{i18n.t('users.title')}</div>
                    </div>
                    <div className="strike-users__header-right">
                        <div onClick={addUser} className="strike-users__header-right-text">{i18n.t('users.addUser')}</div>
                    </div>
                </div>
                <Table deleteUser={props.deleteUser} items={props.allUsers} />
                {/* <div className="strike-users__pagination">
                    <img src={unfilledLeftArrow} className='strike-users__pagination-leftarrow' />
                    <div is-active="true" className="strike-users__pagination-number">1</div>
                    <div className="strike-users__pagination-number">2</div>
                    <div className="strike-users__pagination-number">3</div>
                    <div className="strike-users__pagination-number">4</div>
                    <img src={filledRightArrow} className='strike-users__pagination-rightArrow' />
                </div> */}
            </div>
        </Wrapper>
    )
}

const mapStateToProps = ({ allUsers }) => ({ allUsers });
const mapDispatchToProps = { getAllUsers, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers));


const Table = ({ items, deleteUser }) => {
    const { tableArrow } = images.customers;
    return (
        <div className="strike-users__table">
            <div className="strike-users__table-header">
                <div is-responsive="true" className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('customers.id')}</div>
                </div>
                <div className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.firstName')}</div>
                </div>
                <div className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.lastName')}</div>
                </div>
                <div className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.phone')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.email')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item centered">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.createdAt')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item centered">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.role')}</div>
                </div>
                <div is-responsive="true" className="strike-users__table-header-item centered">
                    <div className="strike-users__table-header-item-text">{i18n.t('users.actions')}</div>
                </div>
            </div>
            {items && items.map((item, index) => {
                return <Item deleteUser={deleteUser} key={index} {...item} />
            })}
        </div>
    )
}

const Item = ({ created_at, email, first_name, last_name, id, phone, deleteUser }) => {
    const history = useHistory();
    const { threePoints } = images.customers;
    const date = moment(created_at).format('DD/MM/YYYY')
    const navigate = useCallback(() => { history.push('/user', { id }) }, []);
    const deleteUsr = () => deleteUser(id);
    const editUsr = () => history.push('/edit-user', { id });
    return (
        <div className="strike-users__table-item">
            <div onClick={navigate} is-responsive="true" className="strike-users__table-item-container">
                <input className="strike-users__table-item-container-checkbox" type="checkbox" />
                <div className="strike-users__table-item-container-text">{id}</div>
            </div>
            <div onClick={navigate} className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{first_name}</div>
            </div>
            <div onClick={navigate} className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{last_name}</div>
            </div>
            <div onClick={navigate} className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{phone}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-users__table-item-container">
                <div className="strike-users__table-item-container-text">{email}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-users__table-item-container centered">
                <div className="strike-users__table-item-container-text">{date}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-users__table-item-container centered">
                <div className="strike-users__table-item-container-text">TBD</div>
            </div>
            <div is-responsive="true" className="strike-users__table-item-container centered">
                <div className="dropdown">
                    <img className="strike-users__table-item-container-dots" src={threePoints} />
                    <div className="dropdown-content">
                        <div onClick={editUsr} className="dropdown-content-text">{i18n.t('users.edit')}</div>
                        <div onClick={deleteUsr} className="dropdown-content-text">{i18n.t('users.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}