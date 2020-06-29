import { TOGGLE_ERROR_MODAL } from '../actionTypes';
import i18n from '../../services/locales/i18n';

const initialState = {
    isOpen: false,
    title: i18n.t('errorModal.title'),
    description: '',
    button: i18n.t('errorModal.button')
}
export default function (state = initialState, { type, data }) {
    switch (type) {
        case TOGGLE_ERROR_MODAL:
            return {
                isOpen: !state.isOpen,
                title: 'Error',
                description: data,
                button: 'Cancel'
            };
        default: return state;
    }
}