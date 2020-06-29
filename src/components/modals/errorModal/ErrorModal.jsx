import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_ERROR_MODAL } from '../../../store/actionTypes';
import { useCallback } from 'react';

export const ErrorModal = () => {
    const dispatch = useDispatch();
    const errorModal = useSelector(state => state.errorModal);

    const toggle = useCallback(() => { dispatch({ type: TOGGLE_ERROR_MODAL, data: '' }) }, [errorModal])

    return (
        <div>
            <Modal isOpen={errorModal.isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{errorModal.title}</ModalHeader>
                <ModalBody>{errorModal.description}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>{errorModal.button}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}