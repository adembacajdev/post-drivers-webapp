import React from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../services/locales/i18n';

const AddProduct = (props) => {
    return (
        <Wrapper>
            <div className="strike-addproduct">
                <div className="strike-addproduct__title">{i18n.t('addProductForm.title')}</div>
                <form className="strike-addproduct__form">
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.name')}</div>
                    <input className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.name')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.description')}</div>
                    <input className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.description')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.price')}</div>
                    <input className="strike-addproduct__form-input" placeholder={i18n.t('addProductForm.price')} />
                    <div className="strike-addproduct__form-label">{i18n.t('addProductForm.size')}</div>
                    <select className="strike-addproduct__form-input">
                        <option>{i18n.t('addProductForm.small')}</option>
                        <option>{i18n.t('addProductForm.medium')}</option>
                        <option>{i18n.t('addProductForm.large')}</option>
                    </select>
                    <button className="strike-addproduct__form-button">{i18n.t('addProductForm.addProduct')}</button>
                </form>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct));