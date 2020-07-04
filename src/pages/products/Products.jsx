import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from '../../containers/wrapper/Wrapper';
import images from '../../assets/images';
import i18n from '../../services/locales/i18n';
import './products.scss';
import { getAllProducts, deleteProduct, searchProducts, deleteProducts } from '../../store/actions/products';
import { useForm } from "react-hook-form";
import Context from './Context';
import Table from './Table';

const Products = (props) => {
    const { infoIcon, filledLeftArrow, unfilledLeftArrow, filledRightArrow, unfilledRightArrow } = images.customers;
    const [data, setData] = useState(props.allProducts);
    const [selected, setSelected] = useState([]);
    const [selectedAll, selectAll] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ search }) => {
        props.searchProducts(search);
    };
    useEffect(() => { props.getAllProducts(10, 1) }, []);
    useEffect(() => {
        setData(props.allProducts);
        selectAll(false);
        setSelected([])
    }, [props.allProducts]);
    const deleteSelectedProducts = () => {
        props.deleteProducts(selected);
        selectAll(false);
        setSelected([])
    }

    const nextPage = useCallback(() => { if (data.hasNextPage) props.getAllProducts(10, data.currentPage + 1) }, [data]);
    const prevPage = useCallback(() => { if (data.hasPrevPage) props.getAllProducts(10, data.currentPage - 1) }, [data]);
    const number = useCallback((page) => { props.getAllProducts(10, page) }, [data]);

    const addProduct = useCallback(() => { props.history.push('/add-product') }, []);

    useEffect(() => {
        if (selectedAll) {
            let newArray = [];
            data.data.forEach(elem => {
                newArray.push(elem.id)
            })
            setSelected(newArray)
        } else {
            setSelected([])
        }
    }, [selectedAll])
    return (
        <Context.Provider value={{ selected, setSelected, selectedAll, selectAll }}>
            <Wrapper>
                <div className="strike-products">
                    <div className="strike-products__header">
                        <div className="strike-products__header-left">
                            <div className="strike-products__header-left-title">{i18n.t('products.products')}</div>
                        </div>
                        <div className="strike-products__header-right">
                            <div onClick={addProduct} className="strike-products__header-right-text">{i18n.t('products.addProduct')}</div>
                        </div>
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