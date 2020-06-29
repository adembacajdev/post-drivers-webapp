import { TOGGLE_SUCCESS_MODAL } from '../actionTypes';
import i18n from '../../services/locales/i18n';

const initialState = {
    isOpen: false,
    title: i18n.t('successModal.title'),
    description: '',
    button: i18n.t('errorModal.button')
}
export default function (state = initialState, { type, data }) {
    switch (type) {
        case TOGGLE_SUCCESS_MODAL:
            return {
                isOpen: !state.isOpen,
                title: i18n.t('successModal.title'),
                description: data,
                button: i18n.t('errorModal.button')
            };
        default: return state;
    }
}