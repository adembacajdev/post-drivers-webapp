import React from 'react';
import './wrapper.scss';
import { useEffect } from 'react';
import { IS_LOGGED_IN } from '../../store/actionTypes';
import { useDispatch } from 'react-redux';

const Wrapper = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) dispatch({ type: IS_LOGGED_IN, data: false })
    }, [])
    return (
        <div className="strike-wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;