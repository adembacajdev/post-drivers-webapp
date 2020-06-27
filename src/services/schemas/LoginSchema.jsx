import * as yup from 'yup';
const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const LoginSchema = yup.object().shape({
  email: yup.string().required().matches(emailRgx, 'Email is not valid'),
  password: yup.string().required()
});