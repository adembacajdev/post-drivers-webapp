import { TOGGLE_ERROR_MODAL } from '../actionTypes';

export const toggleErrorModal = (data) => (dispatch) => {
    dispatch({ type: TOGGLE_ERROR_MODAL, data })
}