import React, { useState, useCallback, useEffect, createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './products.scss';
import { getAllProducts, deleteProduct, searchProducts, deleteProducts } from '../../store/actions/products';
import { useForm } from "react-hook-form";

const Context = createContext(null)

const Products = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;
    const [data, setData] = useState(props.allProducts);
    const [selected, setSelected] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ search }) => {
        props.searchProducts(search);
    };
    useEffect(() => { props.getAllProducts(5, 1) }, []);
    useEffect(() => { setData(props.allProducts) }, [props.allProducts]);
    const deleteSelectedProducts = () => props.deleteProducts(selected)

    const nextPage = useCallback(() => { if (data.hasNextPage) props.getAllProducts(5, data.currentPage + 1) }, [data]);
    const prevPage = useCallback(() => { if (data.hasPrevPage) props.getAllProducts(5, data.currentPage - 1) }, [data]);
    const number = useCallback((page) => { props.getAllProducts(5, page) }, [data]);
    return (
        <Context.Provider value={{ selected, setSelected }}>
            <Wrapper>
                <div className="strike-products">
                    <div className="strike-products__header">
                        <div className="strike-products__header-title">{i18n.t('products.products')}</div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="strike-products__search">
                        <input name="search" ref={register({ required: true })} placeholder={i18n.t('products.searchPlaceholder')} className="strike-products__search-input" />
                        <button type="submit" className="strike-products__search-button">{i18n.t('products.search')}</button>
                    </form>
                    <Table items={data.data} deleteProduct={props.deleteProduct} />
                    <div className="strike-products__pagination">
                        <img onClick={prevPage} src={data.hasPrevPage ? filledLeftArrow : unfilledLeftArrow} className='strike-products__pagination-leftarrow' />
                        {data && data.lastPage.map(item => {
                            return <div onClick={() => number(item)} is-active={item === data.currentPage ? 'true' : 'false'} key={item} className="strike-products__pagination-number">{item}</div>
                        })}
                        <img onClick={nextPage} src={data.hasNextPage ? filledRightArrow : unfilledRightArrow} className='strike-products__pagination-rightarrow' />
                    </div>
                    <button onClick={deleteSelectedProducts} disabled={selected.length ? false : true} className="strike-products__delete-selected">{i18n.t('products.deleteProducts')}</button>
                </div>
            </Wrapper>
        </Context.Provider>
    )
}

const mapStateToProps = ({ allProducts }) => ({ allProducts });
const mapDispatchToProps = { getAllProducts, deleteProduct, searchProducts, deleteProducts };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));

const Table = ({ items, deleteProduct }) => {

    return (
        <div className="strike-products__table">
            <div className="strike-products__table-header">
                <div className="strike-products__table-header-item flex-1">#</div>
                <div className="strike-products__table-header-item flex-3">{i18n.t('products.product')}</div>
                <div is-responsive="true" className="strike-products__table-header-item flex-3">{i18n.t('products.description')}</div>
                <div className="strike-products__table-header-item flex-15">{i18n.t('products.price')}</div>
                <div is-responsive="true" className="strike-products__table-header-item flex-15 text-center">{i18n.t('products.actions')}</div>
            </div>
            {items && items.map((item, index) => {
                return <TableItem key={index} item={item} deleteProduct={deleteProduct} />
            })}
            <div className="strike-products__showmore">{i18n.t('products.showMore')}</div>
        </div>
    )
}

const TableItem = ({ item, deleteProduct }) => {
    const { selected, setSelected } = useContext(Context);
    const [checked, setChecked] = useState(item.checked)
    const history = useHistory()
    const { testProduct, threePoints } = images.products;
    const [isOpen, open] = useState(false);
    const toggle = useCallback(() => { open(!isOpen) }, [isOpen]);
    const navigate = useCallback(() => { history.push('/product', { id: item.id }) }, []);
    const edit = useCallback(() => { history.push('/edit-product', { id: item.id }) }, []);
    const deleteProd = useCallback(() => { deleteProduct(item.id) }, []);
    const check = () => setChecked(!checked);
    useEffect(() => {
        if (checked) setSelected([...selected, item.id])
        else if (!checked) {
            const deletedCheck = selected.filter(el => el !== item.id);
            setSelected(deletedCheck);
        }
    }, [checked])

    return (
        <div className="strike-products__table-item">
            <div className="strike-products__table-item-content flex-1">
                <input type="checkbox" onChange={check} value={checked} checked={checked} />
            </div>
            <div onClick={navigate} className="strike-products__table-item-content flex-3">
                <img className="strike-products__table-item-content-icon" src={testProduct} />
                <div className="strike-products__table-item-content-text ml-15">{item.name}</div>
            </div>
            <div onClick={navigate} is-responsive="true" className="strike-products__table-item-content flex-3">
                <div className="strike-products__table-item-content-text">{item.description}</div>
            </div>
            <div onClick={navigate} className="strike-products__table-item-content flex-15">
                <div className="strike-products__table-item-content-text">{`${item.price}€`}</div>
            </div>
            <div is-responsive="true" onClick={toggle} className="strike-products__table-item-content flex-15 text-center">
                <div className="dropdown">
                    <img className="strike-products__table-item-content-points" src={threePoints} />
                    <div className="dropdown-content">
                        <div className="dropdown-content-text">{i18n.t('products.copyLink')}</div>
                        <div onClick={edit} className="dropdown-content-text">{i18n.t('products.edit')}</div>
                        <div onClick={deleteProd} className="dropdown-content-text">{i18n.t('products.delete')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}