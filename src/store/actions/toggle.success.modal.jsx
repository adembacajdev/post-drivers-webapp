import { TOGGLE_SUCCESS_MODAL } from '../actionTypes';

export const toggleSuccessModal = (data) => (dispatch) => {
    dispatch({ type: TOGGLE_SUCCESS_MODAL, data })
}