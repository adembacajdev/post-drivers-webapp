import React from 'react';
import './wrapper.scss';

const Wrapper = (props) => {
    return (
        <div className="strike-wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;