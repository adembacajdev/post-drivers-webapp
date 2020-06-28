import * as yup from 'yup';
const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\d{9}$/;

export const UserSchema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required().matches(emailRgx, 'Email is not valid'),
    phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
});