import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SUCCESS_MODAL } from '../../../store/actionTypes';
import { useCallback } from 'react';

export const SuccessModal = () => {
    const dispatch = useDispatch();
    const successModal = useSelector(state => state.successModal);

    const toggle = useCallback(() => { dispatch({ type: TOGGLE_SUCCESS_MODAL, data: '' }) }, [successModal])

    return (
        <div className="error-modal">
            <Modal centered isOpen={successModal.isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{successModal.title}</ModalHeader>
                {typeof successModal.description === 'object'
                ?
                Object.entries(successModal.description).map((item, index) => {
                    return <ModalBody key={index}>{item[1]}</ModalBody>
                })
                :
                <ModalBody>{successModal.description}</ModalBody>
            }
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>{successModal.button}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}