import React, {useCallback} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_ERROR_MODAL } from '../../../store/actionTypes';

export const ErrorModal = () => {
    const dispatch = useDispatch();
    const errorModal = useSelector(state => state.errorModal);

    const toggle = useCallback(() => { dispatch({ type: TOGGLE_ERROR_MODAL, data: '' }) }, [errorModal])

    return (
        <div className="error-modal">
            <Modal centered isOpen={errorModal.isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{errorModal.title}</ModalHeader>
                {typeof errorModal.description === 'object'
                ?
                Object.entries(errorModal.description).map((item, index) => {
                    return <ModalBody key={index}>{item[1]}</ModalBody>
                })
                :
                <ModalBody>{errorModal.description}</ModalBody>
            }
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>{errorModal.button}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}