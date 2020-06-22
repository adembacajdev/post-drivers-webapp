import React from 'react';
import './products.scss';
import Wrapper from '../../containers/wrapper/Wrapper';

const SeeProduct = (props) => {
    return (
        <Wrapper>
            <div className="strike-product">
                <div className="strike-product__header">{'{product name}'}</div>
                <div className="strike-product__text"><b>Description: </b>{'{product description}'}</div>
                <div className="strike-product__text"><b>Price: </b>{'{product price}'}</div>
            </div>
        </Wrapper>
    )
}

export default SeeProduct;